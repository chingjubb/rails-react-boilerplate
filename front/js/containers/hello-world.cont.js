/**
 * @fileOverview The Hello World container.
 */

import { connect } from 'react-redux';

import HelloWorld from '../components/hello-world.comp';
import { fetchServerTimestamp } from '../actions/server-timestamp.action';
import { addToList1, 
  removeFromList1, 
  addToList2, 
  removeFromList2,
  addToList3, 
  removeFromList3,
  addToList4, 
  removeFromList4, 
  replaceList1, 
  replaceList2, 
  replaceList3, 
  replaceList4} from '../actions/list1.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    serverTimestamp: state.serverTimestamp,
    list1: state.lists.list1,
    list2: state.lists.list2,
    list3: state.lists.list3,
    list4: state.lists.list4,
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    onFetchServerTimestamp: () => {
      dispatch(fetchServerTimestamp());
    },
    addToList1: (value) => {
      dispatch(addToList1(value));
    },
    addToList2: (value) => {
      dispatch(addToList2(value));
    },
    addToList3: (value) => {
      dispatch(addToList3(value));
    },
    addToList4: (value) => {
      dispatch(addToList4(value));
    },
    replaceList1: (value) => {
      dispatch(replaceList1(value));
    },
    replaceList2: (value) => {
      dispatch(replaceList2(value));
    },
    replaceList3: (value) => {
      dispatch(replaceList3(value));
    },
    replaceList4: (value) => {
      dispatch(replaceList4(value));
    },
    removeFromList1: (value) => {
      dispatch(removeFromList1(value));
    },
    removeFromList2: (value) => {
      dispatch(removeFromList2(value));
    },
    removeFromList3: (value) => {
      dispatch(removeFromList3(value));
    },
    removeFromList4: (value) => {
      dispatch(removeFromList4(value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
