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
    console.log('The object given is: ', req.body)
    sqlParams = req.body
    sqlQuery=`
    INSERT INTO "plant_table" 
    ("api_id", "common_name", "scientific_name", "cycle", "indoors", "soil", "growth_rate", "watering", "maintenance", "sun", "image", "description", "watering_description", "sunlight_description")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `
})

module.exports = plantRouter;