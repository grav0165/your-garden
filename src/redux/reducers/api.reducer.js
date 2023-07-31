import { combineReducers } from "redux";


// reducer to hold DETAILS results from API
const apiDetailsResponse = (state = {}, action ) => {
    switch (action.type) {
        case 'SET_API_DETAILS_RESULT':
            return state;
        default:
            return state;
    }
}

// reducer to hold SEARCH results from API
const apiSearchResponse = (state = [], action ) => {
    switch (action.type) {
        case 'SET_API_RESULT':
            return action.payload;
        default:
            return state;
    }
}



export default combineReducers({
    apiDetailsResponse,
    apiSearchResponse
})