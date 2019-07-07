import { LEADS } from '../actions/types'

const initialState = {
    loading: false,
    leads: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LEADS.GET:
            return {
                ...state,
                leads: action.payload
            }
        case LEADS.DELETE:
            return {
                ...state,
                leads: state.leads.filter(l => l.id !== action.payload)
            }
        case LEADS.ADD:
            return {
                ...state,
                leads: state.leads.concat(action.payload)
            }
        default:
            return state
    }
}


