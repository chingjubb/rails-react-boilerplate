// import { createAction } from 'redux-actions';
import { SET_CHART_TYPE } from '../constants/reducer-actions.const';

export const setChartType = (value) => {
  return function(dispatch) {
    dispatch({
      type: SET_CHART_TYPE,
      value: value,
    });
  };
};

