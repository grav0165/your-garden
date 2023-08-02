const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

// Creating a router for userPlant database
const userPlantRouter = express.Router();

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

module.exports = userPlantRouter;