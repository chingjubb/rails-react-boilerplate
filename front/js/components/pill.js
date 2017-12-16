/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Label } from 'react-bootstrap';
export default class Pill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div draggable={true} style={{cursor:'pointer', display: 'block'}}>
        <Label bsStyle="primary" draggable={true} style={{cursor:'pointer'}}>{this.props.value}</Label>
      </div>
    );
  }
}

Pill.propTypes = {
  value: React.PropTypes.string.isRequired,
};
