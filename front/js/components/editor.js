/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel } from 'react-bootstrap';
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <Panel>Editor Area</Panel>
    );
  }
}
