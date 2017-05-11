CREATE DATABASE sequelizedBurger_db;

USE sequelizedBurger_db;

CREATE TABLE burgers
(
	id int NOT NULL auto_increment,
    burger_name varchar(200) NOT NULL,
    devoured boolean NOT NULL DEFAULT false 0,
    item_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
