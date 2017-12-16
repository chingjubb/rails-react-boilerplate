import { createAction } from 'redux-actions';
import { ADD_TO_LIST_1, REMOVE_FROM_LIST_1 } from '../constants/reducer-actions.const';

// export const addToList1 = createAction('ADD_TO_LIST_1')
// export const removeFromList1 = createAction('REMOVE_FROM_LIST_1')

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
