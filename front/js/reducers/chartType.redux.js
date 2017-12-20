/**
 * @fileOverview The Server Timestamp reducer.
 */

import { handleActions } from 'redux-actions';

import {
  SET_CHART_TYPE,
} from '../constants/reducer-actions.const';

const initialState = 'table'; // initial state of chartType

export default handleActions({
  [SET_CHART_TYPE]: (state, action) => {
    var newChartType = action.value;
    return newChartType;
  },
}, initialState);
