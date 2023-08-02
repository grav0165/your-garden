import { combineReducers } from "redux";

// Reducer to hold GET request from database user
const userPlantDatabaseResponse = (state = [], action ) => {
    switch(action.type) {
        case 'SET_USER_PLANTS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    userPlantDatabaseResponse,
})