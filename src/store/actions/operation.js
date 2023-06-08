import * as actionTypes from "./actionTypes";

export const addOperation = (id) => {
  return {
    type: actionTypes.ADD_OPERATION,
    operationId: id,
  };
};

export const removeOperation = (id) => {
  return {
    type: actionTypes.REMOVE_OPERATION,
    operationId: id,
  };
};

export const closeOperations = () => {
  return {
    type: actionTypes.CLOSE_OPERATIONS,
  };
};
