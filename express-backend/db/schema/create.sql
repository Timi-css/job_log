DROP TABLE IF EXISTS  user CASCADE;
DROP TABLE IF EXISTS application CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY NOT NULL,
username VARCHAR(255) NOT NULL,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
password VARCHAR(50) NOT NULL)

CREATE TABLE applications(
id SERIAL PRIMARY KEY NOT NULL,
users_id INT REFERENCES users(id) ON DELETE CASCADE,
job_title VARCHAR(255) NOT NULL,
company VARCHAR(255) NOT NULL,
date_applied DATE NOT NULL);