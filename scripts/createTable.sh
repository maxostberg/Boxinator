#!/usr/bin/bash
mysql -u sampleUser -p -h sampleHost <<create_table_query 
CREATE TABLE boxdb.boxes 
(
	Id int NOT NULL auto_increment,
    Name varchar(255) NOT NULL,
    Weight double NOT NULL,
    Color varchar(255),
    Country varchar(255) NOT NULL,
    ShippingCost double NOT NULL,
    primary key (Id)
)
create_table_query