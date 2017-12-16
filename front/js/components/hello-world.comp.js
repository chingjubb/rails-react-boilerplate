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
      <MainPage {...this.props} />
    );
  }

  componentDidMount() {
    this.props.onFetchServerTimestamp();
    this.props.addToList1('yoyoyoyo');
    this.props.addToList1('aa');
    this.props.addToList1('bb');
    this.props.addToList1('cc');
    this.props.removeFromList1('bb');
  }
}

/** @const {Object} propTypes definition */
HelloWorld.propTypes = {
  serverTimestamp: React.PropTypes.number,
  onFetchServerTimestamp: React.PropTypes.func.isRequired,
  addToList1: React.PropTypes.func.isRequired,
  removeFromList1: React.PropTypes.func.isRequired,
};
