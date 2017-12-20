/**
 * @fileOverview The root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverTimestamp from './server-timestamp.redux';
import lists from './lists.redux';
import scenario from './scenario.redux';

export default combineReducers({
  serverTimestamp,
  lists,
  scenario,
});
