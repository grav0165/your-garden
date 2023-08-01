import { combineReducers } from "redux";

// Reducer to hold GET request from database
const plantDatabaseResponse = (state =[], action ) => {
    switch (action.type) {
        case 'SET_PLANT_DATABASE':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    plantDatabaseResponse,
})