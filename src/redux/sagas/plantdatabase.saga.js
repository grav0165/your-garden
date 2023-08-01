import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects'

// Request to database to pull all currently stored plant information

function fetchPlantList (action) {
    try {
        const plantListResponse = yield axios.get('/plantList')
        yield put({ type: 'SET_PLANT_DATABASE', payload: plantListResponse.data.data})
    }
}