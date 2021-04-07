const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// Get Study History for logged in user
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = 
      `SELECT e.id, e.date, st.name, e.study_time, e.vocab_count, e.kanji_count, e.notes 
      FROM entry e
      JOIN study_tool st on e.tool_id = st.id
      WHERE e.user_id=$1 
      ORDER BY date DESC;`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.log(`ERR: get study history failed for user ${req.user.id}`, error);
      res.sendStatus(500);
    });
});

// Get graph datasets
router.get('/graph', rejectUnauthenticated, (req, res) => {
  const queryText = 
      `SELECT array_agg(entry.date) as dates, array_agg(entry.study_time) as times, array_agg(entry.vocab_count) as vocab_counts, array_agg(entry.kanji_count) as kanji_counts
      FROM (SELECT to_char(date, 'MM/DD/YYYY') date, SUM(study_time) study_time, SUM(vocab_count) vocab_count, SUM(kanji_count) kanji_count FROM entry
      WHERE user_id=$1
      GROUP BY date) as entry;`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows[0]))
    .catch((error) => {
      console.log(`ERR: get study history graph data failed for user ${req.user.id}`, error);
      res.sendStatus(500);
    });
});

// Get streak data
router.get('/streak', rejectUnauthenticated, (req, res) => {
  const queryText = 
      `with t as (SELECT distinct(entry.date::date) as date
          FROM entry WHERE entry.user_id = $1)
      select count(*)
      from t
      where t.date > (
          select d.d
          from generate_series('2021-01-01'::date, 'yesterday'::DATE, '1 day') d(d)
          left outer join t on t.date = d.d::date
          where t.date is null
          order by d.d desc
          limit 1
      );`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows[0]))
    .catch((error) => {
      console.log(`ERR: get study streak data failed for user ${req.user.id}`, error);
      res.sendStatus(500);
    });
});

// Get Statistics for logged in user
router.get('/statistics', rejectUnauthenticated, (req, res) => {
  const queryText = 
      `SELECT SUM(e.study_time) as study_time, SUM(e.vocab_count) as vocab_count, 
      SUM(e.kanji_count) as kanji_count
      FROM entry e
      WHERE e.user_id=$1;`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows[0]))
    .catch((error) => {
      console.log(`ERR: get study statistics failed for user ${req.user.id}`, error);
      res.sendStatus(500);
    });
});

// Get Study Tools for logged in user
router.get('/tools', rejectUnauthenticated, (req, res) => {
  const queryText = 
    `SELECT tool.id, tool.name, tool.url, 
      CASE WHEN count(stats) = 0 
        THEN ARRAY[]::json[] 
        ELSE array_agg(stats.statistic) 
      END AS custom_stats 
    FROM study_tool as tool
    LEFT OUTER JOIN (
      SELECT ts.tool_id, json_build_object('id', stat.id, 'label', stat.label, 'measure', stat.measure) as statistic 
      FROM tool_statistic ts
      JOIN statistic stat on stat.id = ts.statistic_id
      ) stats on stats.tool_id=tool.id 
    WHERE user_id is NULL OR user_id=$1 
    GROUP BY tool.id ORDER BY tool.name;`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.log(`ERR: get study tools failed for user ${req.user.id}`, error);
      res.sendStatus(500);
    });
});

// Get Study History for logged in user
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = 
      `SELECT e.id, e.user_id, e.date, st.name, e.study_time, e.vocab_count, 
          e.kanji_count, e.notes 
      FROM entry e
      JOIN study_tool st on e.tool_id = st.id
      WHERE e.id=$1;`;
  pool.query(queryText, [req.params.id])
    .then( (result) => {
      // Should be only 1 row, getting by id
      let detail = result.rows[0];
      // Only send if belongs to logged in user
      if (result.rows.length > 0 && req.user.id === detail.user_id) {
        res.send(detail);
      } else {
        console.log(`WARN: blocked request for study detail with id ${req.params.id} requested by user ${req.user.id}.`);
        res.sendStatus(403);
      }
    })
    .catch((error) => {
      console.log(`ERR: get study detail with id ${req.params.id} failed for user ${req.user.id}`, error);
      res.sendStatus(500);
    });
});

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('Adding entry:', req.body);
  // TODO - handle custom statistics
  const entryQuery = 
    `INSERT INTO entry (date, notes, user_id, tool_id, study_time, 
      vocab_count, kanji_count) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  pool.query(entryQuery, [req.body.date, req.body.note, req.user.id, req.body.toolId, 
      req.body.studyTime, req.body.vocabCount, req.body.kanjiCount])
    .then(() => res.send(201))
    .catch((error) => {
      console.log(`ERR: add study entry failed for user ${req.user.id}`, error);
      res.sendStatus(500);
    });
})

// Delete study entry by id, must belong to logged in user
router.delete('/:id/', rejectUnauthenticated, async (req, res) => {
  try {
    const selectQuery = 'SELECT e.id, e.user_id FROM entry as e WHERE e.id = $1;'
    let selectResult = await pool.query(selectQuery, [req.params.id]);
    let entry = selectResult.rows[0];
    if (entry.user_id === req.user.id){
      let query = `DELETE FROM entry WHERE id=$1;`;
      await pool.query(query, [ req.params.id ]);
      res.sendStatus(200);
    } else {
      console.log(`WARN: blocked delete for study detail id ${req.params.id} requested by user ${req.user.id}.`);
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(`ERR: delete entry id ${req.params.id} failed for user ${req.user.id}`, error);
    res.sendStatus(500);
  }
});

// Update study entry, must belong to logged in user
//   body requires at least one optional field
//   optional fields: notes, study_time, vocab_count, kanji_count
router.put('/:id/', rejectUnauthenticated, async (req, res) => {
  try {
    const selectQuery = 'SELECT e.id, e.user_id FROM entry as e WHERE e.id = $1;'
    let selectResult = await pool.query(selectQuery, [req.params.id]);
    let entry = selectResult.rows[0];
    if (entry.user_id === req.user.id){
      let updateQuery = `UPDATE entry SET `;
      const values = [];

      // Add set expression for each field to update
      if (req.body.notes) { 
        values.push(req.body.notes);
        updateQuery += `notes=$${values.length}`;
      }
      if (req.body.study_time) { 
        if (values.length > 0) {
          updateQuery += ', ';
        }
        values.push(req.body.study_time);
        updateQuery += `study_time=$${values.length}`;
      }
      if (req.body.vocab_count) {  
        if (values.length > 0) {
          updateQuery += ', ';
        }
        values.push(req.body.vocab_count);
        updateQuery += `vocab_count=$${values.length}`;
      }
      if (req.body.kanji_count) {  
        if (values.length > 0) {
          updateQuery += ', ';
        }
        values.push(req.body.kanji_count);
        updateQuery += `kanji_count=$${values.length}`;
        console.log(updateQuery, values);
      }

      // if nothing to update, fail 
      if (values.length === 0) {
        res.sendStatus(500);
        return;
      } else 
        // Update values with id & add WHERE for entry id 
        values.push(req.params.id)
        updateQuery += ` WHERE id=$${values.length}`;

        // Update values with user_id & add AND to WHERE 
        values.push(req.user.id)
        updateQuery += ` AND user_id=$${values.length};`;

        // Do update
        await pool.query(updateQuery, values);
        res.sendStatus(200);
    } else {
      console.log(`WARN: blocked update for study detail id ${req.params.id} requested by user ${req.user.id}.`);
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(`ERR: update for entry id ${req.params.id} failed for user ${req.user.id}`, error);
    res.sendStatus(500);
  }
});


// Adds a new study entry
//   body requires: date, tool_id, study_time
//   optional fields: notes, vocab_count, kanji_count
router.post('/', rejectUnauthenticated, (req, res) => {
  
  // Check required fields, fail if not there
  if (!req.body.date || !req.body.tool_id || !req.body.study_time) {
    console.log(`ERR: add entry missing required fields, req.body:`, req.body);
    res.sendStatus(500);
    return;
  } 

  // Have required fields, so add them
  const values = [ req.user.id,  req.body.date, req.body.tool_id, req.body.study_time ];
  let setFields = [ 'user_id', 'date', 'tool_id', 'study_time' ];
  let setValues = [ '$1', '$2', '$3', '$4' ];

  // Updates for each optional field to insert
  if (req.body.notes) { 
    values.push(req.body.notes);
    setFields.push('notes');
    setValues.push(`$${values.length}`);
  }
  if (req.body.vocab_count) { 
    values.push(req.body.vocab_count);
    setFields.push('vocab_count');
    setValues.push(`$${values.length}`);
  }
  if (req.body.kanji_count) { 
    values.push(req.body.kanji_count);
    setFields.push('kanji_count');
    setValues.push(`$${values.length}`);
  }

  // Do Insert
  let insertQuery = `INSERT INTO entry (${setFields.join(', ')}) VALUES(${setValues.join(', ')});`;
  pool.query(insertQuery, values)
    .then( () => res.sendStatus(201) )
    .catch((error) => {
      console.log(`ERR: adding new study entry`, error);
      res.sendStatus(500);
    });

});

module.exports = router;
