const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

// Creating a router for userPlant database
const userPlantRouter = express.Router();

// GET route to obtain all of the user's plants in their garden
userPlantRouter.get('/', (req, res) => {
    let sqlUserId = req.user.id;
    let sqlQuery = `
    SELECT "user_plant"."id", "user_plant"."plant_id", "plant_table"."common_name", "plant_table"."scientific_name", "plant_table"."cycle", "plant_table"."indoors", "plant_table"."soil", "plant_table"."growth_rate", "plant_table"."watering", "plant_table"."maintenance", "plant_table"."sun", "plant_table"."image", "plant_table"."description", "plant_table"."watering_description", "plant_table"."sunlight_description", "user_plant"."water_date", "user_plant"."water_days", "plant_table"."api_id" 
    FROM "user_plant"
    JOIN "plant_table" ON "plant_table"."id" = "user_plant"."plant_id"
    WHERE "user_plant"."user_id" = $1
    GROUP BY "user_plant"."id", "user_plant"."plant_id", "plant_table"."common_name", "plant_table"."scientific_name", "plant_table"."cycle", "plant_table"."indoors", "plant_table"."soil", "plant_table"."growth_rate", "plant_table"."watering", "plant_table"."maintenance", "plant_table"."sun", "plant_table"."image", "plant_table"."description", "plant_table"."watering_description", "plant_table"."sunlight_description", "user_plant"."water_date", "user_plant"."water_days", "plant_table"."api_id" ;
    `;
    pool.query(sqlQuery, [sqlUserId])
        .then(result => {
            console.log('Obtaining all plants owned by user: ', result);
            res.send(result.rows);
        })
        .catch( error => {
            console.log('Error in GET user_plant query: ', error);
            res.sendStatus(500);
        })
})

// POST route to add a new plant to the user's garden
userPlantRouter.post('/', (req, res) => {
    let sqlUserId = req.user.id;
    let sqlParams = req.body
    let sqlValues = [
        sqlUserId,
        sqlParams.id,
        sqlParams.watering
    ]
    let sqlQuery = `
    INSERT INTO "user_plant" ("user_id", "plant_id", "water_date", "water_days", "added_date")
    VALUES ($1, $2, CURRENT_DATE, $3, CURRENT_DATE);
    `
    pool.query(sqlQuery, sqlValues)
    .then( result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error in POST to user_plant query: ', error);
        res.sendStatus(500)
    })
})

// PUT route to update the given plants watering
userPlantRouter.put('/watering/:id', (req, res) => {
    let sqlId = req.params.id
    let sqlUser = req.user.id
    let sqlQuery =  `
    UPDATE "user_plant" 
    SET "water_date"=CURRENT_DATE
    WHERE "id" =$1  AND "user_id" =$2;
    `
    pool.query(sqlQuery, [sqlId, sqlUser])
    .then( result => {
        res.sendStatus(201);
    })
    .catch( error => {
        console.log('Error in PUT to user_plant query: ', error);
        res.sendStatus(500)
    })
})


module.exports = userPlantRouter;