// import { createAction } from 'redux-actions';
import { SET_SCENARIO } from '../constants/reducer-actions.const';

export const setScenario = (value) => {
  return function(dispatch) {
    dispatch({
      type: SET_SCENARIO,
      value: value,
    });
  };
};

