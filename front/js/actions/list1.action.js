// import { createAction } from 'redux-actions';
import { ADD_TO_LIST_1, 
  REMOVE_FROM_LIST_1, 
  REPLACE_LIST_1,
  REPLACE_LIST_2,
  REPLACE_LIST_3,
  REPLACE_LIST_4,
  ADD_TO_LIST_2,
  REMOVE_FROM_LIST_2,
  ADD_TO_LIST_3,
  REMOVE_FROM_LIST_3,
  ADD_TO_LIST_4,
  REMOVE_FROM_LIST_4} from '../constants/reducer-actions.const';

export const addToList1 = (value) => {
  return function(dispatch) {
    dispatch({
      type: ADD_TO_LIST_1,
      value: value,
    });
  };
};

export const removeFromList1 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FROM_LIST_1,
      value: value,
    });
  };
};

export const replaceList1 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REPLACE_LIST_1,
      value: value,
    });
  };
};

export const addToList2 = (value) => {
  return function(dispatch) {
    dispatch({
      type: ADD_TO_LIST_2,
      value: value,
    });
  };
};

export const removeFromList2 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FROM_LIST_2,
      value: value,
    });
  };
};

export const addToList3 = (value) => {
  return function(dispatch) {
    dispatch({
      type: ADD_TO_LIST_3,
      value: value,
    });
  };
};

export const removeFromList3 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FROM_LIST_3,
      value: value,
    });
  };
};

export const addToList4 = (value) => {
  return function(dispatch) {
    dispatch({
      type: ADD_TO_LIST_4,
      value: value,
    });
  };
};

export const removeFromList4 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FROM_LIST_4,
      value: value,
    });
  };
};

export const replaceList2 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REPLACE_LIST_2,
      value: value,
    });
  };
};

export const replaceList3 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REPLACE_LIST_3,
      value: value,
    });
  };
};

export const replaceList4 = (value) => {
  return function(dispatch) {
    dispatch({
      type: REPLACE_LIST_4,
      value: value,
    });
  };
};
