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

    return (
      <MainPage />
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
};
