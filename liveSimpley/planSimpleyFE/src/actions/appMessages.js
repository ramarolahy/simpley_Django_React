import {CREATE_MESSAGE, GET_ERRORS} from "./actionTypes";

/**
 * Action to create app messages
 * @param msg
 * @returns {{payload: *, type: string}}
 */
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
};

/**
 * Action to get error messages
 * @param msg
 * @param status
 * @returns {{payload: {msg: *, status: *}, type: string}}
 */
export const returnError = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status}
    }
};
