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
    this.onDragOverList1 = this.onDragOverList1.bind(this);
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
              <td></td>
            </tr>
            <tr>
              <td style={{width:'130px'}}>Values (Y axis)</td>
              <td>Larry the Bird</td>
            </tr>
            <tr>
              <td style={{width:'130px'}}>Filters</td>
              <td>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    );
  }
}

Editor.propTypes = {
  list1: React.PropTypes.array.isRequired,
  addToList1: React.PropTypes.func.isRequired,
  removeFromList1: React.PropTypes.func.isRequired,
};

