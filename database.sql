CREATE DATABASE jp_habit_tracker;

CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);