CREATE DATABASE task_management;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL
);

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    user_id VARCHAR REFERENCES users(username),
    created_at TIMESTAMP DEFAULT NOW()     
);

INSERT INTO users (username, password) VALUES ('admin', '12345');