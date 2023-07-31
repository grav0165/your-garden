import { combineReducers } from "redux";

const apiResponse = (state = {}, action ) => {
    switch (action.type) {
        case 'SET_API_RESULT':
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    apiResponse
})