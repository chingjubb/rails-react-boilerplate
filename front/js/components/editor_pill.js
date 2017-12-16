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
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragStart (ev) {
    console.log("onDragStart", this.props.value);
    ev.dataTransfer.setData("text/plain", this.props.value);
    ev.dataTransfer.dropEffect = "move";
  }
  onDragEnd(ev) {
    console.log("onDragEnd!!!",this.props.value);
    this.props.removeFromList(this.props.value);
  }
  render() {
    return (
      <div draggable={true} style={{cursor:'pointer', display: 'inline-block'}}>
        <Label bsStyle="primary" draggable={true} style={{cursor:'pointer'}} onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}>{this.props.value}</Label>
      </div>
    );
  }
}

EditorPill.propTypes = {
  value: React.PropTypes.string.isRequired,
  removeFromList: React.PropTypes.func.isRequired,
};
