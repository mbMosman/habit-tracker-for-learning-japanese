CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE study_tool (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES login,
    name VARCHAR(80) NOT NULL,
    url VARCHAR(255)
);

-- Default study tool insert
INSERT INTO study_tool (id, name, url) VALUES
(1, 'DuoLingo', 'https://www.duolingo.com/'), 
(2, 'Wanikani', 'https://www.wanikani.com/'),
(3, 'Other', NULL);

-- Update study_tool id sequence to start at 100
ALTER SEQUENCE study_tool_id_seq RESTART WITH 100;

CREATE TABLE type (
	id INT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	display_label VARCHAR(30) NOT NULL
);

-- Default statistic types for drop-down
INSERT INTO type (id, name, display_label) VALUES 
(1, 'numeric count', ''), (2, 'time (minutes)', 'minutes'); 

CREATE TABLE statistic (
	id SERIAL PRIMARY KEY,
	label VARCHAR(80) NOT NULL,
	type_id INT REFERENCES type NOT NULL,
	user_id INT REFERENCES login
);

-- Default statistics (required)
INSERT INTO statistic (id, label, type_id) VALUES 
(1, 'Study Time (minutes)', 2), 
(2, 'Vocabulary (count)', 1), 
(3, 'Kanji (count)', 1); 

-- Update statistic id sequence to start at 100
ALTER SEQUENCE statistic_id_seq RESTART WITH 100;

CREATE TABLE tool_statistic (
    id SERIAL PRIMARY KEY,
    tool_id INT REFERENCES study_tool NOT NULL,
    statistic_id INT REFERENCES statistic NOT NULL
);

-- Associate default tools and statistics (required)
INSERT INTO tool_statistic (tool_id, statistic_id) VALUES 
(1, 2), -- Duolingo, Vocab count
(1, 3), -- Duolingo, Kanji count
(1, 1), -- Duolingo, Time
(2, 2), -- Wanikani, Vocab count
(2, 3), -- Wanikani, Kanji count
(2, 1), -- Wanikani, Time
(3, 1), -- Other, Time
(3, 2), -- Other, Vocab count
(3, 3); -- Other, Kanji count

CREATE TABLE entry (
	id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    notes VARCHAR(1000),
    user_id INT REFERENCES login NOT NULL,
    tool_id INT REFERENCES study_tool NOT NULL
);

-- Update statistic id sequence to start at 1000
ALTER SEQUENCE tool_statistic_id_seq RESTART WITH 1000;

CREATE TABLE entry_statistic (
    id SERIAL PRIMARY KEY,
    entry_id INT REFERENCES entry NOT NULL,
    statistic_id INT REFERENCES statistic NOT NULL,
    amount INT NOT NULL
);