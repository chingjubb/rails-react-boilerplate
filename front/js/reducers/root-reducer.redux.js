/**
 * @fileOverview The root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverTimestamp from './server-timestamp.redux';
import list1 from './list1.redux';

export default combineReducers({
  serverTimestamp,
  list1,
});
