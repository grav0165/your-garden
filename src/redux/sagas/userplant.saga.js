import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects'

// Requesting to database to add the user's garden

function* addUserPlant(action) {
    try{
        yield axios.post('/userPlant', action.payload)
        yield put({ type: 'FETCH_PLANT_USER'})
    } catch (error) {
        console.log('Error in SAGA POST for user plants: ', error)
    }
}

function* fetchUserPlants(action) {
    try {
        const userPlantResponse = yield axios.get('/userPlant')
        yield put({ type: 'SET_USER_PLANTS', payload: userPlantResponse.data})
    } catch (error) {
        console.log('Error in SAGA GET request for user plants: ', error)
    }
}

function* userUpdateWater(action) {
    try {
        yield axios.put(`/userPlant/watering/${action.payload}`)
        yield put({ type: 'FETCH_PLANT_USER'})
    } catch (error) {
        console.log('Error in SAGA PUT request: ', error)
    }
}

function* userPlantSaga() {
    yield takeLatest('ADD_PLANT_USER', addUserPlant);
    yield takeLatest('FETCH_PLANT_USER', fetchUserPlants);
    yield takeLatest('USER_WATER_UPDATE', userUpdateWater)
}

export default userPlantSaga