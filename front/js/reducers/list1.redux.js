/**
 * @fileOverview The Server Timestamp reducer.
 */

import { handleActions } from 'redux-actions';

import {
  ADD_TO_LIST_1, REMOVE_FROM_LIST_1
} from '../constants/reducer-actions.const';

const initialState = []; // initial state of List1 is an empty array

export default handleActions({
  [ADD_TO_LIST_1]: (state, action) => {
    return state.concat(action.value);
  },
  [REMOVE_FROM_LIST_1]: (state, action) => {
  	var newArray = [];
  	for (var i = 0; i < state.length; i++) {
  		if (state[i] != action.value) {
  			newArray.push(state[i]);
  		}
  	}
    return newArray
  },
}, initialState);
