import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  isLoading: false,
  service: null,
};

const fetchServiceStart = (state, action) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const fetchServiceSuccess = (state, action) => {
  return updateObject(state, {
    service: action.service,
    isLoading: false,
  });
};

const fetchServiceFail = (state, action) => {
  return updateObject(state, {
    isLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVICE_START:
      return fetchServiceStart(state, action);
    case actionTypes.FETCH_SERVICE_SUCCESS:
      return fetchServiceSuccess(state, action);
    case actionTypes.FETCH_SERVICE_FAIL:
      return fetchServiceFail(state, action);
    default:
      return state;
  }
};

export default reducer;
