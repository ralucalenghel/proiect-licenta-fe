import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  operationList: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
  prices: {
    1: 10.0,
    2: 12.5,
    3: 20.0,
    4: 25.0,
    5: 29.99,
  },
  total: 0.0,
};

const addOperation = (state, action) => {
  const updatedOperation = {
    [action.operationId]: state.operationList[action.operationId] + 1,
  };
  const updatedOperations = updateObject(state.operationList, updatedOperation);
  const updatedTotal = updateObject(state.total, {
    total: state.total + state.prices[action.operationId],
  });
  const updatedState = {
    operationList: updatedOperations,
    ...updatedTotal,
  };
  return updateObject(state, updatedState);
};

const removeOperation = (state, action) => {
  const updatedOperation = {
    [action.operationId]: state.operationList[action.operationId] - 1,
  };
  const updatedOperations = updateObject(state.operationList, updatedOperation);
  const updatedTotal = updateObject(state.total, {
    total: state.total - state.prices[action.operationId],
  });
  const updatedState = {
    operationList: updatedOperations,
    ...updatedTotal,
  };
  return updateObject(state, updatedState);
};

const closeOperations = (state, action) => {
  return updateObject(state, initialState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_OPERATION:
      return addOperation(state, action);
    case actionTypes.REMOVE_OPERATION:
      return removeOperation(state, action);
    case actionTypes.CLOSE_OPERATIONS:
      return closeOperations(state, action);
    default:
      return state;
  }
};

export default reducer;
