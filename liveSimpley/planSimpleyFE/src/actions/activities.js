/**
 * ACTIONS
 */
import axios from 'axios';

import { GET_ACTIVITIES, DELETE_ACTIVITY, ADD_ACTIVITY, UPDATE_ACTIVITY } from './actionTypes';

// GET ACTIVITIES
export const getActivities = () => dispatch => {
    // Make API call to django backend
    axios.get('api/activities')
        .then(res => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: res.data
            });
        })
        .catch(err => {
            if (err) {
                console.log(err);
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
                console.log(err);
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
                console.log(err);
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
                console.log(err);
            }
        })
};