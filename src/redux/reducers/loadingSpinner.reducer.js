import { bool } from "prop-types";
import { combineReducers } from "redux";

// Spinner effect when loading
const loadingSpinner = (state = false, action) => {
    console.log('in reducer!', action)
    switch (action.type) {
        case 'SHOW_SPINNER':
            console.log('spin!')
            return true;
        case 'HIDE_SPINNER':
            return false;
        default:
            return state;
    }
}

export default loadingSpinner