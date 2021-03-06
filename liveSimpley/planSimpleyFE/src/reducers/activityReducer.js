import {GET_ACTIVITIES, DELETE_ACTIVITY, ADD_ACTIVITY, UPDATE_ACTIVITY} from '../actions/actionTypes.js'
import {LOGOUT_SUCCESS} from "../actions/actionTypes";

/** ===============
 *  ACTION CREATORS
 */
const initialState = {
    activities: []
};

// See https://redux.js.org/recipes/using-object-spread-operator for spread operator usage in redux
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };
        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload)
            };
        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            };
        case UPDATE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.map(activity => activity.id === action.payload.id ?
                    action.payload : activity
                )
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                activities: []
            };
        default:
            return state
    }
}