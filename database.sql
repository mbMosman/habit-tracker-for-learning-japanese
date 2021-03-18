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

-- Table for custom statistics
CREATE TABLE statistic (
	id SERIAL PRIMARY KEY,
	label VARCHAR(80) NOT NULL,
	type_id INT REFERENCES type NOT NULL,
	user_id INT REFERENCES login
);

CREATE TABLE tool_statistic (
    id SERIAL PRIMARY KEY,
    tool_id INT REFERENCES study_tool NOT NULL,
    statistic_id INT REFERENCES statistic NOT NULL
);

CREATE TABLE entry (
	id SERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL,
    notes VARCHAR(1000),
    study_time INT NOT NULL,
    vocab_count INT DEFAULT 0,
    kanji_count INT DEFAULT 0,
    user_id INT REFERENCES login NOT NULL,
    tool_id INT REFERENCES study_tool NOT NULL
);

CREATE TABLE entry_statistic (
    id SERIAL PRIMARY KEY,
    entry_id INT REFERENCES entry NOT NULL,
    statistic_id INT REFERENCES statistic NOT NULL,
    amount INT NOT NULL
);