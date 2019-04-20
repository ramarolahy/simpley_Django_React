import {GET_ERRORS} from '../actions/actionTypes';

/** ===============
 *  ACTION CREATORS
 */
const initialState = {
    errorMessage: {},
    status: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                errorMessage: action.payload.errorMessage,
                status: action.payload.status
            };
        default:
            return state
    }
}