/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel, Table } from 'react-bootstrap';
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <Panel>Editor Area
      <Table striped bordered condensed>
        <tbody>
          <tr>
            <td style={{width:'130px'}}>Columns (series)</td>
            <td></td>
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
