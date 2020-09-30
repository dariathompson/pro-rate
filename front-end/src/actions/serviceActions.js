import axios from 'axios';
const { SERVICE_LIST_REQUEST, SERVICE_LIST_FAIL, SERVICE_LIST_SUCCESS } = require("../constants/serviceConstants")

const listServices = () => async (dispatch) => {
    try {
        dispatch({ type: SERVICE_LIST_REQUEST });
        const { data } = await axios.get("/api/services");
        dispatch({ type: SERVICE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SERVICE_LIST_FAIL, payload: error.message })
    }
}

export { listServices }