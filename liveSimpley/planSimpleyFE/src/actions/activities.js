/**
 * ACTIONS
 */
import axios from 'axios';
// To enable app messaging for certain actions
import {createMessage, returnError} from "./appMessages";

import {GET_ACTIVITIES, DELETE_ACTIVITY, ADD_ACTIVITY, UPDATE_ACTIVITY} from './actionTypes';

// GET ACTIVITIES
export const getActivities = () => dispatch => {
    // Make API call to django backend
    axios.get('api/activities')
        .then(res => {
            // This will dispatch CREATE_MESSAGE action once we get res back from GET_ACTIVITIES
            dispatch(createMessage({activitiesLoaded: "Your activities have been loaded!"}));
            dispatch({
                type: GET_ACTIVITIES,
                payload: res.data
            });
        })
        .catch(err => {
            if (err) {
                // This will dspatch GET_ERRORS action
                dispatch(returnError(err.response.data, err.response.status))
            }
        })
};

// DELETE ACTIVITY
export const deleteActivity = (id) => dispatch => {
    // Make API call to django backend
    axios.delete(`api/activities/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_ACTIVITY,
                payload: id
            });
        })
        .catch(err => {
            if (err) {
                // This will dspatch GET_ERRORS action
                dispatch(returnError(err.response.data, err.response.status))
            }
        })
};

// ADD ACTIVITY
export const addActivity = (activity) => dispatch => {
    // Make API call to django backend
    axios.post('api/activities/', activity)
        .then(res => {
            dispatch({
                type: ADD_ACTIVITY,
                payload: res.data
            });
        })
        .catch(err => {
            if (err) {
                // This will dspatch GET_ERRORS action
                dispatch(returnError(err.response.data, err.response.status))
            }
        })
};

// ADD ACTIVITY
export const updateActivity = (id, newData) => dispatch => {
    // Make API call to django backend
    axios.put(`api/activities/${id}/`, newData)
        .then(res => {
            dispatch({
                type: UPDATE_ACTIVITY,
                payload: res.data
            });
        })
        .catch(err => {
            if (err) {
               // This will dspatch GET_ERRORS action
                dispatch(returnError(err.response.data, err.response.status))
            }
        })
};