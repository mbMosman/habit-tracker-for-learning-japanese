-- Create user "testuser" w/ password testuser
INSERT INTO login (id, username, password) VALUES 
(10001, 'testuser', '$2a$10$wwQJym57zg9T1tqwpiy68.soEAqmN.ZMnfVMnMk4v8OrHVh1QR8/G');

INSERT INTO study_tool (id, name, url, user_id) VALUES
(10, 'Genki', NULL, 10001), 
(11, 'Tadoku', 'https://tadoku.org/japanese/en/free-books-en/', 10001);

INSERT INTO statistic (id, label, type_id, user_id) VALUES 
(10, 'Page (count)', 2, 10001); 

INSERT INTO tool_statistic (tool_id, statistic_id) VALUES
(11, 10), (11, 1), -- Tadoku to page (custom) & time (default)
(10, 1), (10, 2), (10, 3); -- Genki to time, vocab, & kanji (all default)

-- Test Entry 1 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10001, '01-04-2021', 'Food 2, Level 3/5, Lesson 4/8', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10001, 1, 5), (10001, 2, 12), (10001, 3, 8);

-- Test Entry 2 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10002, '01-04-2021', 'Food 2, Level 3/5, Lesson 5/8', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10002, 1, 8), (10002, 2, 8), (10002, 3, 4);

-- Test Entry 3 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10003, '01-04-2021', 'Did really well remembering today!', 10001, 2);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10001, 1, 25), (10002, 2, 10), (10002, 3, 4);

-- Test Entry 4 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10004, '01-05-2021', 'Food 2, Level 3/5, Lesson 6/8', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10004, 1, 8), (10004, 2, 8), (10004, 3, 4);

-- Test Entry 5 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10005, '01-05-2021', 'Food 2, Level 3/5, Lesson 7/8', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10005, 1, 6), (10005, 2, 7), (10005, 3, 3);

-- Test Entry 6 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10006, '01-05-2021', 'Learned enter / exit kanji & related words today.', 10001, 2);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10006, 1, 33), (10006, 2, 14), (10006, 3, 7);

-- Test Entry 7 for Genki w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10007, '01-05-2021', 'Worked on Lesson 5', 10001, 10);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10007, 1, 75), (10007, 2, 30), (10007, 3, 15);

-- Test Entry 8 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10008, '01-06-2021', 'Food 2, Level 3/5, Lesson 8/8', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10008, 1, 8), (10008, 2, 8), (10008, 3, 4);

-- Test Entry 9 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10009, '01-06-2021', 'Mostly review today.', 10001, 2);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10009, 1, 23), (10006, 2, 5), (10006, 3, 5);

-- Test Entry 10 for Other w/ time
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(100010, '01-07-2021', 'Flashcard review', 10001, 3);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(100010, 1, 36);

-- Test Entry 11 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10011, '01-07-2021', 'Food 3, Level 3/5, Lesson 1/5', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10011, 1, 14), (10011, 2, 12), (10011, 3, 6);

-- Test Entry 12 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10012, '01-08-2021', 'Food 3, Level 3/5, Lesson 2/5', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10012, 1, 6), (10012, 2, 6), (10012, 3, 4);

-- Test Entry 13 for Wanikani w/ time, vocab & kanji count
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10013, '01-08-2021', 'Learned some new radicals & kanji, but mostly review.', 10001, 2);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10013, 1, 30), (10013, 2, 5), (10013, 3, 3);

-- Test Entry 14 for Genki w/ time & vocab
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10014, '01-08-2021', 'More exercises for Lesson 5', 10001, 10);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10014, 1, 45), (10014, 2, 8);

-- Test Entry 15 for Tadoku w/ time & page count
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10015, '01-09-2021', 'Read きく　菊', 10001, 10);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10015, 1, 25), (10015, 10, 9);

-- Test Entry 16 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10016, '01-09-2021', 'Food 3, Level 3/5, Lesson 3/5', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10016, 1, 12), (10016, 2, 9), (10016, 3, 6);

-- Test Entry 17 for Wanikani w/ time only
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10017, '01-09-2021', 'Just review... burning the turtles', 10001, 2);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10017, 1, 17);

-- Test Entry 18 for Tadoku w/ time & page count
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10018, '01-10-2021', 'Read いました', 10001, 10);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10018, 1, 32), (10018, 10, 12);

-- Test Entry 19 for Duolingo w/ time, vocab & kanji counts
INSERT INTO entry (id, date, notes, user_id, tool_id) VALUES
(10019, '01-10-2021', 'Food 3, Level 3/5, Lesson 4/5', 10001, 1);
INSERT INTO entry_statistic (entry_id, statistic_id, amount) VALUES 
(10019, 1, 9), (10019, 2, 5), (10019, 3, 4);
