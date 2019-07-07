import axios from 'axios'
import {
    LEADS,
    ERRORS
} from './types'

export const getLeads = () => async (disbatch) => {
    try {
        const res = await axios.get('/api/leads/')
        disbatch({
            type: LEADS.GET,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const deleteLeads = (id) => async (disbatch) => {
    try {
        const res = await axios.delete(`/api/leads/${id}/`)
        disbatch({
            type: LEADS.DELETE,
            payload: id
        })
    } catch (err) {
        console.log(err)
    }
}

export const addLead = (lead) => async disbatch => {
    try {
        const res = await axios.post("/api/leads/", lead);
        disbatch({
            type: LEADS.ADD,
            payload: lead
        })
    } catch (err) {
        const msg = err.response.data;
        if (msg) {
            const errors = {
                msg,
                status: err.response.status
            }
            disbatch({
                type: ERRORS.GET,
                payload: errors
            })
        }

    }
}