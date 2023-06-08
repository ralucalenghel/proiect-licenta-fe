import axios from "axios";
import { serviceUrl } from "../..";

import * as actionTypes from "./actionTypes";

export const fetchServiceStart = () => {
  return {
    type: actionTypes.FETCH_SERVICE_START,
  };
};

export const fetchServiceSuccess = (service) => {
  return {
    type: actionTypes.FETCH_SERVICE_SUCCESS,
    service: service,
  };
};

export const fetchServiceFail = (error) => {
  return {
    type: actionTypes.FETCH_SERVICE_FAIL,
    error: error,
  };
};

export const selectService = (id) => {
  return (dispatch) => {
    axios
      .get(serviceUrl + "service/" + id)
      .then((response) => {
        const fetchedService = response.data;
        localStorage.setItem("serviceId", fetchedService.id);
        dispatch(fetchServiceSuccess(fetchedService));
      })
      .catch((error) => {
        dispatch(fetchServiceFail(error));
      });
  };
};
