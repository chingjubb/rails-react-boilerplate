/**
 * @fileOverview The Server Timestamp reducer.
 */

import { handleActions } from 'redux-actions';

import {
  SET_SCENARIO,
} from '../constants/reducer-actions.const';

const initialState = 'scenario1'; // initial state of scenario

export default handleActions({
  [SET_SCENARIO]: (state, action) => {
    var newScenario = action.value;
    return newScenario;
  },
}, initialState);
