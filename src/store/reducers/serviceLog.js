import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  isLoading: false,
  serviceLog: null,
};

const fetchServiceLogStart = (state, action) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const fetchServiceLogSuccess = (state, action) => {
  return updateObject(state, {
    serviceLog: action.serviceLog,
    isLoading: false,
  });
};

const fetchServiceLogFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    isLoading: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVICE_LOG_START:
      return fetchServiceLogStart(state, action);
    case actionTypes.FETCH_SERVICE_LOG_SUCCESS:
      return fetchServiceLogSuccess(state, action);
    case actionTypes.FETCH_SERVICE_LOG_FAIL:
      return fetchServiceLogFail(state, action);
    default:
      return state;
  }
};

export default reducer;
