-- Creating the database.
CREATE DATABASE educational_app;

-- Using the database.
use educational_app;

-- Creating the roles table.
CREATE TABLE roles(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(50) NOT NULL
);

-- Creating the parent table.
CREATE TABLE users(
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    nick VARCHAR(60) NOT NULL,
    name VARCHAR(90) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    mothers_last_name VARCHAR(60) NOT NULL,
    federal_entity VARCHAR(60) NOT NULL,
    municipality VARCHAR(60) NOT NULL,
    city VARCHAR(60) NOT NULL,
    address VARCHAR(100),
    birthdate DATE NOT NULL,
    age INT(3),
    email VARCHAR(80) NOT NULL,
    cell_phone VARCHAR(15),
    gender VARCHAR(15),
    password VARCHAR(100) NOT NULL,
    curp VARCHAR(18),
    registration_date TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- Creating the children table.
CREATE TABLE child (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nick VARCHAR(60) NOT NULL,
    name VARCHAR(90) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    mothers_last_name VARCHAR(60) NOT NULL,
    id_related INT(10),
    birthdate DATE NOT NULL,
    age INT(3),
    gender VARCHAR(15),
    id_role INT(6),
    password VARCHAR(100) NOT NULL,
    image VARCHAR(120),
    registration_date TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- Creating the game table.
CREATE TABLE games(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    description VARCHAR(255) NOT NULL,
    id_user INT(11),
    registration_date TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- Creating the scores table.
CREATE TABLE scores(
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idUser VARCHAR(60) NOT NULL,
    gameId INT(6) NOT NULL,
    gameScore INT (20) NOT NULL,
    registration_date TIMESTAMP NOT NULL DEFAULT current_timestamp 
);

-- to show all tables.
SHOW TABLES;

-- to describe the tables.
describe roles;
describe users;
describe child;
describe games;
describe scores;