import axios from 'axios';
const { SERVICE_LIST_REQUEST, SERVICE_LIST_FAIL, SERVICE_LIST_SUCCESS, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS, SERVICE_DETAILS_FAIL } = require("../constants/serviceConstants")

const listServices = () => async (dispatch) => {
    try {
        dispatch({ type: SERVICE_LIST_REQUEST });
        const { data } = await axios.get("/api/services");
        dispatch({ type: SERVICE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SERVICE_LIST_FAIL, payload: error.message })
    }
}

const detailsService = (serviceId) => async (dispatch) => {
    try {
        dispatch({ type: SERVICE_DETAILS_REQUEST, payload: serviceId });
        const { data } = await axios.get("/api/services/" + serviceId);
        dispatch({ type: SERVICE_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SERVICE_DETAILS_FAIL, payload: error.message })
    }
} 

export { listServices, detailsService }