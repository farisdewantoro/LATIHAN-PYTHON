import { MESSAGES } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case MESSAGES.CREATE:
            return (state = action.payload);
        default:
            return state;
    }
}