/**
 * @fileOverview The Hello World container.
 */

import { connect } from 'react-redux';

import HelloWorld from '../components/hello-world.comp';
import { fetchServerTimestamp } from '../actions/server-timestamp.action';
import { addToList1, removeFromList1 } from '../actions/list1.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    serverTimestamp: state.serverTimestamp,
    list1: state.list1,
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
    removeFromList1: (value) => {
      dispatch(removeFromList1(value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
