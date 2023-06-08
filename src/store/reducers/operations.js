import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  isLoading: false,
  operations: null,
};

const fetchOperationsStart = (state, action) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const fetchOperationsSuccess = (state, action) => {
  return updateObject(state, {
    operations: action.operations,
    isLoading: false,
  });
};

const fetchOperationsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    isLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OPERATIONS_START:
      return fetchOperationsStart(state, action);
    case actionTypes.FETCH_OPERATIONS_SUCCESS:
      return fetchOperationsSuccess(state, action);
    case actionTypes.FETCH_OPERATIONS_FAIL:
      return fetchOperationsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
