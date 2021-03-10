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
      WHERE e.user_id=$1;`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log(`ERR: get study history failed for user ${req.user.id}`, err);
      res.sendStatus(500);
    });
});

// Get Study History for logged in user
router.get('/statistics', rejectUnauthenticated, (req, res) => {
  const queryText = 
      `SELECT SUM(e.study_time) as study_time, SUM(e.vocab_count) as vocab_count, 
      SUM(e.kanji_count) as kanji_count
      FROM entry e
      WHERE e.user_id=$1;`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows[0]))
    .catch((err) => {
      console.log(`ERR: get study history failed for user ${req.user.id}`, err);
      res.sendStatus(500);
    });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
