
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "plant_table" (
	"id" SERIAL PRIMARY KEY,
	"api_id" integer,
	"common_name" varchar(80),
	"scientific_name" varchar(120) ,
	"cycle" varchar(20),
	"indoors" BOOLEAN,
	"soil" varchar(60),
	"growth_rate" varchar(20),
	"watering" varchar(60),
	"maintenance" varchar(80),
	"sun" varchar(100),
	"image" varchar(2000),
	"description" varchar(1000),
	"watering_description" varchar(1000),
	"sunlight_description" varchar(1000)
);




CREATE TABLE "user_plant" (
	"id" SERIAL PRIMARY KEY,
	"user_id" integer NOT NULL,
	"plant_id" integer NOT NULL,
	"water_date" DATE NOT NULL,
	"water_days" integer NOT NULL,
	"added_date" DATE NOT NULL
);

