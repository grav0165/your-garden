import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

// This API request asks for detailed information from a specific ID
function* fetchApiDetails () {
    try {
        const perenualResponse = yield axios.get(`/api/perenual/details`)
        const perenualDetailResponse = yield axios.get(`/api/perenual/careDetails`)

        yield put({ type: 'SET_API_DETAILS_RESULT', payload: {base: perenualResponse.data, care: perenualDetailResponse.data.data}})
    } catch (error) {
        console.log('API get request failed', error);
    }
}

// Creating a second API call to use the LIST API search type
function* fetchApiSearch (action) {
    try {
        const perenualSearchResponse = yield axios.get(`/api/perenual/search/${action.payload}`)
        yield put ({ type: 'SET_API_RESULT', payload: perenualSearchResponse.data.data })
    } catch (error) {
        console.log('Error in SAGA API request for SEARCH of plants: ', error);
    }
}

function* apiSaga() {
    yield takeLatest('SEARCH_API', fetchApiSearch)
    yield takeLatest('SEARCH_API_DETAILS', fetchApiDetails)
    // yield takeLatest('SEARCH_API', fetchApi2)
}

export default apiSaga;