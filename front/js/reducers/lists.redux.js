/**
 * @fileOverview The Server Timestamp reducer.
 */

import { handleActions } from 'redux-actions';

import {
  ADD_TO_LIST_1, REMOVE_FROM_LIST_1,
  ADD_TO_LIST_2, REMOVE_FROM_LIST_2,
  ADD_TO_LIST_3, REMOVE_FROM_LIST_3,
  ADD_TO_LIST_4, REMOVE_FROM_LIST_4,
} from '../constants/reducer-actions.const';

const initialState = {list1: [], list2: [], list3: [], list4: []}; // initial state of List1 is an empty array

export default handleActions({
  [ADD_TO_LIST_1]: (state, action) => {
    var newArray = state.list1.concat(action.value);
    return {list1: newArray, list2: state.list2, list3: state.list3, list4: state.list4 };
  },
  [ADD_TO_LIST_2]: (state, action) => {
     var newArray = state.list2.concat(action.value);
    return {list1: state.list1, list2: newArray, list3: state.list3, list4: state.list4 };
  },
  [ADD_TO_LIST_3]: (state, action) => {
    var newArray = state.list3.concat(action.value);
    return {list1: state.list1, list2: state.list2, list3: newArray, list4: state.list4 };
  },
  [ADD_TO_LIST_4]: (state, action) => {
    var newArray = state.list4.concat(action.value);
    return {list1: state.list1, list2: state.list2, list3: state.list3, list4: newArray };
  },
  [REMOVE_FROM_LIST_1]: (state, action) => {
  	var newArray = [];
    var list = state.list1;
  	for (var i = 0; i < list.length; i++) {
  		if (list[i] != action.value) {
  			newArray.push(list[i]);
  		}
  	}
    return {list1: newArray, list2: state.list2, list3: state.list3, list4: state.list4 };
  },
  [REMOVE_FROM_LIST_2]: (state, action) => {
    var newArray = [];
    var list = state.list2;
    for (var i = 0; i < list.length; i++) {
      if (list[i] != action.value) {
        newArray.push(list[i]);
      }
    }
    return {list1: state.list1, list2: newArray, list3: state.list3, list4: state.list4 };
  },
  [REMOVE_FROM_LIST_3]: (state, action) => {
    var newArray = [];
    var list = state.list3;
    for (var i = 0; i < list.length; i++) {
      if (list[i] != action.value) {
        newArray.push(list[i]);
      }
    }
    return {list1: state.list1, list2: state.list2, list3: newArray, list4: state.list4 };
  },
  [REMOVE_FROM_LIST_4]: (state, action) => {
    var newArray = [];
    var list = state.list4;
    for (var i = 0; i < list.length; i++) {
      if (list[i] != action.value) {
        newArray.push(list[i]);
      }
    }
    return {list1: state.list1, list2: state.list2, list3: state.list3, list4: newArray };
  },
}, initialState);
