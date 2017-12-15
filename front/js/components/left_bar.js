/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel } from 'react-bootstrap';
export default class LeftBar extends React.Component {
  render() {
  	 let dimentions = ['dte'];
     let measures = ['new_mrrr', 'reactivation_mrrr', 'upgrade_mrrr'];
    return (

      <Panel>
      <div><b>Dimentions</b></div>
        {dimentions.map((value, index) => (
          <div key={index}>
            {value}
          </div> 
        ))}
        <div><b>Measures</b></div>
        {measures.map((value, index) => (
          <div key={index}>
            {value}
          </div> 
        ))}

      </Panel>
    );
  }
}
