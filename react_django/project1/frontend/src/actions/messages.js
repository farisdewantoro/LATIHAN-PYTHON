import { MESSAGES, ERRORS } from "./types";

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: MESSAGES.CREATE,
        payload: msg
    };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {

    return {
        type: ERRORS.GET,
        payload: { msg, status }
    };
};