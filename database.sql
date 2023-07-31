
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
	"api_id" integer NOT NULL,
	"common_name" varchar(80) NOT NULL,
	"scientific_name" varchar(120) NOT NULL,
	"cycle" varchar(20) NOT NULL,
	"indoors" BOOLEAN NOT NULL,
	"soil" varchar(60) NOT NULL,
	"growth_rate" varchar(20) NOT NULL,
	"watering" varchar(60) NOT NULL,
	"maintenance" varchar(80) NOT NULL,
	"sun" varchar(100) NOT NULL,
	"image" varchar(120) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"watering_description" varchar(1000) NOT NULL,
	"sunlight_description" varchar(1000) NOT NULL,
);




CREATE TABLE "user_plant" (
	"id" SERIAL PRIMARY KEY,
	"user_id" integer NOT NULL,
	"plant_id" integer NOT NULL,
	"water_date" DATE NOT NULL,
	"water_days" integer NOT NULL,
);

