import { ERRORS } from '../actions/types';

const initialState = {
    msg: {},
    status: null
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ERRORS.GET:
            return {
                ...state,
                msg: action.payload.msg,
                status: action.payload.status
            }

        default:
            return state;
    }
}