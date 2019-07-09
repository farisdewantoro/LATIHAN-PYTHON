import {
    CHAT
} from '../actions/types';
// import IsEmpty from '../validation/is-empty';
const initialState = {
    chat:[],
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHAT.loading:
            return {
                ...state,
                loading: true
            }
        case CHAT.send:
            return{
                ...state,
                loading:false,
                chat:action.payload
            }
        default:
            return state;
    }
}