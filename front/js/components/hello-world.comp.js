/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import MainPage from './main_page'

export default class HelloWorld extends React.Component {
  render() {
    const {
      serverTimestamp,
    } = this.props;
    console.log("helloworld this.props", this.props);
    return (
      <MainPage {...this.props} {...this.state} />
    );
  }

  componentDidMount() {
    this.props.onFetchServerTimestamp();
  }
}

/** @const {Object} propTypes definition */
HelloWorld.propTypes = {
  serverTimestamp: React.PropTypes.number,
  onFetchServerTimestamp: React.PropTypes.func.isRequired,
  addToList1: React.PropTypes.func.isRequired,
  addToList2: React.PropTypes.func.isRequired,
  addToList3: React.PropTypes.func.isRequired,
  addToList4: React.PropTypes.func.isRequired,
  removeFromList1: React.PropTypes.func.isRequired,
  removeFromList2: React.PropTypes.func.isRequired,
  removeFromList3: React.PropTypes.func.isRequired,
  removeFromList4: React.PropTypes.func.isRequired,
  list1: React.PropTypes.array.isRequired,
  list2: React.PropTypes.array.isRequired,
  list3: React.PropTypes.array.isRequired,
  list4: React.PropTypes.array.isRequired,
};
