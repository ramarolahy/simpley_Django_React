import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS, SIGNUP_FAIL
} from '../actions/actionTypes'

/** ===============
 *  ACTION CREATORS
 */
const initialState = {
    // Token will stored locally
    token: sessionStorage.getItem('token'),
    isAuthenticated: null,
    // Check if signup was successful
    isSignedUp: false,
    // IS_LOADING: Temporary action fires while loading user
    isLoading: false,
    // user from response
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            sessionStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case SIGNUP_SUCCESS:
            sessionStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false,
                isSignedUp: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT_SUCCESS:
            sessionStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isLoading: false,
                isSignedUp: false,
                isAuthenticated: false
            };
        default:
            return state
    }
}