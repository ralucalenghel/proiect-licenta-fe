import axios from "axios";
import { operationsUrl } from "../..";

import * as actionTypes from "./actionTypes";

export const fetchServiceLogStart = () => {
  return {
    type: actionTypes.FETCH_SERVICE_LOG_START,
  };
};

export const fetchServiceLogSuccess = (serviceLog) => {
  return {
    type: actionTypes.FETCH_SERVICE_LOG_SUCCESS,
    serviceLog: serviceLog,
  };
};

export const fetchServiceLogFail = (error) => {
  return {
    type: actionTypes.FETCH_SERVICE_LOG_FAIL,
    error: error,
  };
};

export const fetchServiceLog = () => {
  return (dispatch) => {
    axios
      .get(operationsUrl + "log")
      .then((response) => {
        const fetchedServiceLog = [];
        for (let key in response.data) {
          fetchedServiceLog.push({
            ...response.data[key],
            id: parseInt(response.data[key].id),
          });
        }
        dispatch(fetchServiceLogSuccess(fetchedServiceLog));
      })
      .catch((error) => {
        dispatch(fetchServiceLogFail(error));
      });
  };
};
