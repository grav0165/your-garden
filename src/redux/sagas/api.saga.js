import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* fetchApi () {
    try {
        const perenualResponse = yield axios.get(`/api/perenual/details`)
        const perenualDetailResponse = yield axios(`/api/careDetails`)
        yield put({ type: 'SET_API_RESULT', payload: {base: perenualResponse.data, care: perenualDetailResponse.data}})
    } catch (error) {
        console.log('API get request failed', error);
    }


}

function* apiSaga() {
    yield takeLatest('FETCH_API', fetchApi)
}

export default apiSaga;