/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Label } from 'react-bootstrap';

export default class EditorPill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onDragStart = this.onDragStart.bind(this);
  }
  onDragStart (ev) {
    console.log("onDragStart", this.props.value);
    ev.dataTransfer.setData("text/plain", this.props.value);
    ev.dataTransfer.dropEffect = "move";
  }
  render() {
    return (
      <div draggable={true} style={{cursor:'pointer', display: 'inline-block'}}>
        <Label bsStyle="primary" draggable={true} style={{cursor:'pointer'}} onDragStart={this.onDragStart}>{this.props.value}</Label>
      </div>
    );
  }
}

EditorPill.propTypes = {
  value: React.PropTypes.string.isRequired,
};
