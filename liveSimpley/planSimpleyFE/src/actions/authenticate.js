import axios from 'axios';
import {returnError} from "./appMessages";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS, SIGNUP_FAIL
} from './actionTypes'


/**
 * Method to handle user login
 * @param username
 * @param password
 * @returns {Function}
 */
export const login = (username, password) => dispatch => {
    // Get request body
    const body = JSON.stringify({username, password});
    // Set headers for the request
    const config = {
        headers: {'Content-Type': 'application/json'}
    };
    // Send request for user with headers config
    axios.post('/api/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        if (err) {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
        }
    })
};

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export const signup = ({username, email, password}) => dispatch => {
    // Get request body
    const body = JSON.stringify({username, email, password});
    // Set headers for the request
    const config = {
        headers: {'Content-Type': 'application/json'}
    };
    // Send request for user with headers config
    axios.post('/api/signup', body, config)
        .then(res => {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        if (err) {
            console.log(err);
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: SIGNUP_FAIL
            })
        }
    })
};


/**
 * Helper method to set the request configuration
 * @param getState
 * @returns {{headers: {"Content-Type": string}}}
 */
export const setConfig = (getState) => {
    // Get token from state
    const token = getState().authReducer.token;
    // Set headers for the request
    const config = {
        headers: {'Content-Type': 'application/json'}
    };
    // Add token to headers config if there is one in localStorage
    if (token) {
        config.headers['Authorization'] = `token ${token}`;
    }
    return config;
};

// Check for a token and load the user
export const loadUser = () => (dispatch, getState) => {
    // User is loading
    dispatch({type: USER_LOADING});

    // Send request for user with headers config
    axios.get('/api/user', setConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
        if (err) {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        }
    })
};

// Logout the user
export const logout = () => (dispatch, getState) => {
    // Send request for user with headers config
    axios.post('/api/logout', null, setConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
        if (err) {
            dispatch(returnError(err.response.data, err.response.status));
        }
    })
};
