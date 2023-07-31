const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const perenualRouter = express.Router();

perenualRouter.get('/details', (req, res) => {
    let searchQuery = req.params.searchQuery
    console.log('req.params: ', searchQuery);
    axios.get(`https://perenual.com/api/species/details/2000?key=${process.env.PERENUAL_API_KEY}`)
    .then ( response => {
        res.send(response.data)
    })
    .catch( error => {
        console.log('Error with perenual DETAIL request: ', error)
    })
})

perenualRouter.get('/careDetails', (req, res) => {
    axios.get(`http://perenual.com/api/species-care-guide-list?species_id=2000&key=${process.env.PERENUAL_API_KEY}`)
    .then ( response => {
        res.send(response.data)
    } )
    .catch (error => {
        console.log('Error in Perenual DETAIL CARE request: ', error);
    })
})

perenualRouter.get('/search/:search', (req, res) => {
    let searchQuery = req.params.search
    axios.get(`https://perenual.com/api/species-list?page=1&key=${process.env.PERENUAL_API_KEY}&q=${searchQuery}`)
    .then( response => {
        res.send(response.data)
    })
    .catch (error => {
        console.log('error in router with API search: ', error)
    })
})

module.exports = perenualRouter;