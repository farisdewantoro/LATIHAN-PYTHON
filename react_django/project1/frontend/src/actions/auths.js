import axios from "axios";
import { returnErrors } from "./messages";
import { AUTHS } from "./types";



// REGISTER USER
export const register = ({ username, password, email }) => async dispatch => {
    try {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        // Request Body
        const body = JSON.stringify({ username, email, password });
        const res = await axios.post("/api/auth/register", body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });


    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));
    }
};

// LOGIN USER
export const login = (username, password) => async dispatch => {
    try {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        // Request Body
        const body = JSON.stringify({ username, password });
        const res = await axios.post("/api/auth/login", body, config)
        axios.defaults.headers.common['Authorization'] = `Token ${res.data.token}`;

        dispatch({
            type: AUTHS.LOGIN,
            payload: res.data
        });


    } catch (err) {

        dispatch(returnErrors(err.response.data, err.response.status));

    }
};

// CHECK TOKEN & LOAD USER
export const loadUser = () => async (dispatch, getState) => {
    try {
        // User Loading
        dispatch({ type: AUTHS.LOADING });
        const config = tokenConfig(getState);
        const res = await axios.get("/api/auth/user", config);
        axios.defaults.headers.common['Authorization'] = config.headers["Authorization"];
        dispatch({
            type: AUTHS.LOADED,
            payload: res.data
        });


    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));

    }
};

export const logout = () => async (dispatch, getState) => {
    try {

        const res = await axios.post("/api/auth/logout/", null, tokenConfig(getState))
        dispatch({ type: AUTHS.LOGOUT });

    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));
    }
};

// Setup config with token - helper function
export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auths.token || localStorage.getItem("token");

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // If token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }


    return config;
};