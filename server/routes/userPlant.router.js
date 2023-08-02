const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

// Creating a router for userPlant database
const userPlantRouter = express.Router();

userPlantRouter.get('/', (req, res) => {
    let sqlUserId = req.user.id;
    let sqlQuery=`
    SELECT * FROM "user_plant"
    WHERE "id" LIKE $1;
    `;
    pool.query(sqlQuery, [sqlUserId])
    .then(result => {
        console.log('Obtaining ')
    })
})

module.exports = userPlantRouter;