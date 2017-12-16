/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel, Table } from 'react-bootstrap';
import EditorPill from './editor_pill';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onDropList1 = this.onDropList1.bind(this);
    this.onDropList2 = this.onDropList2.bind(this);
    this.onDropList3 = this.onDropList3.bind(this);
    this.onDropList4 = this.onDropList4.bind(this);
    this.onDragOverList1 = this.onDragOverList1.bind(this);
    this.onDragOverList2 = this.onDragOverList2.bind(this);
    this.onDragOverList3 = this.onDragOverList3.bind(this);
    this.onDragOverList4 = this.onDragOverList4.bind(this);
  }

  onDropList1(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("on Drop value: ", value);
    this.props.addToList1(value);
  }
  onDragOverList1(ev) {
    ev.preventDefault();
  }

  onDropList2(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("on Drop value: ", value);
    this.props.addToList2(value);
  }
  onDragOverList2(ev) {
    ev.preventDefault();
  }

  onDropList3(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("on Drop value: ", value);
    this.props.addToList3(value);
  }
  onDragOverList3(ev) {
    ev.preventDefault();
  }

  onDropList4(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("on Drop value: ", value);
    this.props.addToList4(value);
  }
  onDragOverList4(ev) {
    ev.preventDefault();
  }
  render() {
    return (
      <Panel>Editor Area
        <Table striped bordered condensed>
          <tbody>
            <tr>
              <td style={{width:'130px'}}>Columns (series)</td>
              <td onDrop={this.onDropList1} onDragOver={this.onDragOverList1}>
                {this.props.list1.map((value, index) => (
                  <span key={index}><EditorPill value={value} key={index} />&nbsp;</span>
                ))}
              </td>
            </tr>
            <tr>
              <td style={{width:'130px'}}>Rows (X axis)</td>
              <td onDrop={this.onDropList2} onDragOver={this.onDragOverList2}>
                {this.props.list2.map((value, index) => (
                  <span key={index}><EditorPill value={value} key={index} />&nbsp;</span>
                ))}
              </td>
            </tr>
            <tr>
              <td style={{width:'130px'}}>Values (Y axis)</td>
              <td onDrop={this.onDropList3} onDragOver={this.onDragOverList3}>
                {this.props.list3.map((value, index) => (
                  <span key={index}><EditorPill value={value} key={index} />&nbsp;</span>
                ))}
              </td>
            </tr>
            <tr>
              <td style={{width:'130px'}}>Filters</td>
              <td onDrop={this.onDropList4} onDragOver={this.onDragOverList4}>
                {this.props.list4.map((value, index) => (
                  <span key={index}><EditorPill value={value} key={index} />&nbsp;</span>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    );
  }
}

Editor.propTypes = {
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

