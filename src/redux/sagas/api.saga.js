import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';



// This API request asks for detailed information from a specific ID
function* fetchApiDetails (action) {
    try {
        yield put({ type: 'SHOW_SPINNER'})
        const perenualResponse = yield axios.get(`/api/perenual/details/${action.payload}`)
        const perenualDetailResponse = yield axios.get(`/api/perenual/careDetails/${action.payload}`)
        yield put({ type: 'SET_API_DETAILS_RESULT', payload: {base: perenualResponse.data, care: perenualDetailResponse.data.data}})
        yield put({ type: 'HIDE_SPINNER'})
    } catch (error) {
        console.log('Error in SAGA API details get request: ', error);
    }
}

// Creating a second API call to use the LIST API search type
function* fetchApiSearch (action) {
    try {
        yield put({ type: 'SHOW_SPINNER'})
        const perenualSearchResponse = yield axios.get(`/api/perenual/search/${action.payload}`)
        yield put ({ type: 'SET_API_RESULT', payload: perenualSearchResponse.data.data })
        yield put({ type: 'HIDE_SPINNER'})
    } catch (error) {
        console.log('Error in SAGA API request for SEARCH of plants: ', error);
    }
}

function* apiSaga() {
    yield takeLatest('SEARCH_API', fetchApiSearch)
    yield takeLatest('SEARCH_API_DETAILS', fetchApiDetails)
}

export default apiSaga;