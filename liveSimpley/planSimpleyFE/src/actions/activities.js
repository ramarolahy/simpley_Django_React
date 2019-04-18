/**
 * ACTIONS
 */
import axios from 'axios';

import { GET_ACTIVITIES } from './actionTypes';

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