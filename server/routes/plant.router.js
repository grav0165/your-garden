const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

// Creating router for plant database
const plantRouter = express.Router();

plantRouter.get('/', (req, res) => {
    sqlQuery=`
    SELECT *
    FROM "plant_table"`
    pool.query(sqlQuery)
    .then( result => {
        console.log('Got stuff back from database: ', result);
        res.send(result.rows);
    })
    .catch(error=> {
        console.log('Error in making database query: ', error);
        res.sendStatus(500);
    })
})

plantRouter.post('/', (req, res)=> {
    console.log('POST request sent to the server')
    plant = req.body
    sqlValues = [
        plant.base.id,
        plant.base.common_name,
        plant.base.scientific_name,
        plant.base.cycle,
        plant.base.indoor,
        plant.base.soil,
        plant.base.growth_rate,
        plant.base.watering, 
        plant.base.maintenance,
        plant.base.sunlight[0],
        plant.base.default_image.original_url,
        plant.base.description,
        plant.care[0].section[0].description,
        plant.care[0].section[0].description
    ]
    sqlQuery=`
    INSERT INTO "plant_table" 
    ("api_id", 
    "common_name", 
    "scientific_name", 
    "cycle", 
    "indoors", 
    "soil", 
    "growth_rate", 
    "watering", 
    "maintenance", 
    "sun", 
    "image", 
    "description", 
    "watering_description", 
    "sunlight_description")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `
    pool.query(sqlQuery, sqlValues)
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error in completed POST plant query: ', error);
        res.sendStatus(500)
    })
})

module.exports = plantRouter;