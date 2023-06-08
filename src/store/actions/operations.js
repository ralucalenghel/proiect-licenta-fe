import axios from "axios";
import { operationsUrl } from "../..";

import * as actionTypes from "./actionTypes";

export const fetchOperationsStart = () => {
  return {
    type: actionTypes.FETCH_OPERATIONS_START,
  };
};

export const fetchOperationsSuccess = (operations) => {
  return {
    type: actionTypes.FETCH_OPERATIONS_SUCCESS,
    operations: operations,
  };
};

export const fetchOperationsFail = (error) => {
  return {
    type: actionTypes.FETCH_OPERATIONS_FAIL,
    error: error,
  };
};

export const fetchOperations = () => {
  return (dispatch) => {
    axios
      .get(operationsUrl + "option/")
      .then((response) => {
        const fetchOperations = response.data;
        dispatch(fetchOperationsSuccess(fetchOperations));
      })
      .catch((error) => {
        dispatch(fetchOperationsFail(error));
      });
  };
};
