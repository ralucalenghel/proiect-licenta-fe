import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  services: [],
  isLoading: false,
};

const fetchServicesStart = (state, action) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const fetchServicesSuccess = (state, action) => {
  return updateObject(state, {
    services: action.services,
    isLoading: false,
  });
};

const fetchServicesFail = (state, action) => {
  return updateObject(state, {
    isLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVICES_START:
      return fetchServicesStart(state, action);
    case actionTypes.FETCH_SERVICES_SUCCESS:
      return fetchServicesSuccess(state, action);
    case actionTypes.FETCH_SERVICES_FAIL:
      return fetchServicesFail(state, action);

    default:
      return state;
  }
};

export default reducer;
