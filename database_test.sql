-- TEST DATA -----------------------------------------------------
-- Create user "testuser" w/ password testuser
INSERT INTO login (id, username, password) VALUES 
(10001, 'testuser', '$2a$10$wwQJym57zg9T1tqwpiy68.soEAqmN.ZMnfVMnMk4v8OrHVh1QR8/G');

INSERT INTO study_tool (id, name, url, user_id) VALUES
(10, 'Genki', NULL, 10001), 
(11, 'Tadoku', 'https://tadoku.org/japanese/en/free-books-en/', 10001);

INSERT INTO statistic (id, label, type_id, user_id) VALUES 
(10, 'Page (count)', 2, 10001); 

INSERT INTO tool_statistic (tool_id, statistic_id) VALUES
(11, 10); -- Tadoku to page (custom) 

-- Test Entry 1 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10001, '01-04-2021', 'Food 2, Level 3/5, Lesson 4/8', 10001, 1, 5, 12, 8);

-- Test Entry 2 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10002, '01-04-2021', 'Food 2, Level 3/5, Lesson 5/8', 10001, 1, 8, 8, 4);

-- Test Entry 3 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10003, '01-04-2021', 'Did really well remembering today!', 10001, 2, 25, 10, 4);

-- Test Entry 4 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10004, '01-05-2021', 'Food 2, Level 3/5, Lesson 6/8', 10001, 1, 8, 8, 4);

-- Test Entry 5 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10005, '01-05-2021', 'Food 2, Level 3/5, Lesson 7/8', 10001, 1, 6, 7, 3);

-- Test Entry 6 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10006, '01-05-2021', 'Learned enter / exit kanji & related words today.', 
10001, 2, 33, 14, 7);

-- Test Entry 7 for Genki w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10007, '01-05-2021', 'Worked on Lesson 5', 10001, 10, 75, 30, 15);

-- Test Entry 8 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10008, '01-06-2021', 'Food 2, Level 3/5, Lesson 8/8', 10001, 1, 8, 8, 4);

-- Test Entry 9 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10009, '01-06-2021', 'Mostly review today.', 10001, 2, 23, 5, 5);

-- Test Entry 10 for Other w/ time
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(100010, '01-07-2021', 'Flashcard review', 10001, 3, 36, 0, 0);

-- Test Entry 11 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10011, '01-07-2021', 'Food 3, Level 3/5, Lesson 1/5', 10001, 1, 14, 12, 6);

-- Test Entry 12 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10012, '01-08-2021', 'Food 3, Level 3/5, Lesson 2/5', 10001, 1, 6, 6, 4);

-- Test Entry 13 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10013, '01-08-2021', 'Learned some new radicals & kanji, but mostly review.', 
10001, 2, 30, 5, 3);

-- Test Entry 14 for Genki w/ time & vocab
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10014, '01-08-2021', 'More exercises for Lesson 5', 10001, 10, 45, 8, 0);

-- Test Entry 15 for Tadoku w/ time & page count
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10015, '01-09-2021', 'Read きく　菊', 10001, 10, 25, 0, 0);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10015, 10, 9);

-- Test Entry 16 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10016, '01-09-2021', 'Food 3, Level 3/5, Lesson 3/5', 10001, 1, 12, 9, 6);

-- Test Entry 17 for Wanikani w/ time only
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10017, '01-09-2021', 'Just review... burning the turtles', 10001, 2, 17, 0, 0);

-- Test Entry 18 for Tadoku w/ time & page count
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10018, '01-10-2021', 'Read いました', 10001, 10, 32, 0, 0);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10018, 10, 12);

-- Test Entry 19 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id, study_time, 
vocab_count, kanji_count) VALUES
(10019, '01-10-2021', 'Food 3, Level 3/5, Lesson 4/5', 10001, 1, 9, 5, 4);
