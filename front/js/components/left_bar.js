/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel, Label } from 'react-bootstrap';
export default class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
  	 let dimentions = ['dte'];
     let measures = ['new_mrrr', 'reactivation_mrrr', 'upgrade_mrrr'];
    return (

      <Panel>
      <div><b>Dimentions</b></div>
      <div>
        {dimentions.map((value, index) => (
          <div key={index} draggable={true} style={{cursor:'pointer', display: 'inline-block'}}>
            <Label bsStyle="primary" key={index} draggable={true} style={{cursor:'pointer'}}>{value}</Label>
          </div>
        ))}
      </div>
      <div><b>Measures</b></div>
      <div>
        {measures.map((value, index) => (
          <div key={index} draggable={true} style={{cursor:'pointer', display: 'inline-block'}}>
            <Label bsStyle="primary" key={index} draggable={true} style={{cursor:'pointer'}}>{value}</Label>
          </div>
        ))}
      </div>

      </Panel>
    );
  }
}
