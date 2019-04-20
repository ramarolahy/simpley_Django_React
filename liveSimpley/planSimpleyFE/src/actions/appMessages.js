import {CREATE_MESSAGE, GET_ERRORS} from "./actionTypes";

/**
 * Action to create app messages
 * @param msg
 * @returns {{payload: *, type: string}}
 */
export const createMessage = message => {
    return {
        type: CREATE_MESSAGE,
        payload: message
    }
};

/**
 * Action to get error messages
 * @param msg
 * @param status
 * @returns {{payload: {msg: *, status: *}, type: string}}
 */
export const returnError = (errorMessage, status) => {
    return {
        type: GET_ERRORS,
        payload: { errorMessage, status}
    }
};
