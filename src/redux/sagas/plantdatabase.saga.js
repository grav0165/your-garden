import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects'

// Request to database to pull all currently stored plant information

function* fetchPlantList (action) {
    try {
        const plantListResponse = yield axios.get('/plantList')
        yield put({ type: 'SET_PLANT_DATABASE', payload: plantListResponse.data})
    } catch (error) {
        console.log('Error in SAGA GET request for plants: ', error)
    }
}

function* addPlant(action) {
    try{
        yield axios.post('/plantList', action.payload)
        yield put({ type: 'GET_PLANT_LIST'})
    } catch (error) {
        console.log('Error in SAGA to POST new plant to database: ', error)
    }
}


function* plantListSaga() {
    yield takeLatest('GET_PLANT_LIST', fetchPlantList)
    yield takeLatest('ADD_PLANT_LOCAL_DB', addPlant)
}

export default plantListSaga;