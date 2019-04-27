/**
 * ACTIONS
 */
import axios from 'axios';
// To enable app messaging for certain actions
import {createMessage, returnError} from "./appMessages";
import {setConfig} from "./authenticate";

import {GET_ACTIVITIES, DELETE_ACTIVITY, ADD_ACTIVITY, UPDATE_ACTIVITY} from './actionTypes';

// GET ACTIVITIES
export const getActivities = () => (dispatch, getState) => {
    // Make API call to django backend
    axios.get('api/activities', setConfig(getState))
        .then(res => {
            // This will dispatch CREATE_MESSAGE action once we get res back from GET_ACTIVITIES
            dispatch(createMessage({activitiesLoaded: "Your activities have been loaded!"}));
            dispatch({
                type: GET_ACTIVITIES,
                payload: res.data//.results  // Sometimes needs .results? WHY??
            });
        })
        .catch(err => {
            if (err) {
                // This will dspatch GET_ERRORS action
                console.log(err.response.data);
                dispatch(returnError(err.response.data, err.response.status))
            }
        })
};

// DELETE ACTIVITY
export const deleteActivity = (id) => (dispatch, getState) => {
    // Make API call to django backend
    axios.delete(`api/activities/${id}`, setConfig(getState))
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
export const addActivity = (activity) => (dispatch, getState) => {
    // Make API call to django backend
    axios.post('api/activities/', activity, setConfig(getState))
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
export const updateActivity = (id, newData) => (dispatch, getState) => {
    // Make API call to django backend
    axios.put(`api/activities/${id}/`, newData, setConfig(getState))
        .then(res => {
            dispatch({
                type: UPDATE_ACTIVITY,
                payload: res.data
            });
        })
        .catch(err => {
            if (err) {
               // This will dspatch GET_ERRORS action
                console.log(err);
                dispatch(returnError(err.response.data, err.response.status))
            }
        })
};