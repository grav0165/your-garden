import { combineReducers } from "redux";

// Spinner effect when loading
const loadingSpinner = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_SPINNER':
            return true;
        case 'HIDE_SPINNER':
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    loadingSpinner,
})