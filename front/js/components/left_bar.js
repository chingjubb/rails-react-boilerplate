/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Panel } from 'react-bootstrap';
import Pill from './pill';

export default class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
  	 let dimentions = ['dte'];
     let measures = ['new_mrr', 'reactivation_mrr', 'upgrade_mrr', 'churn_mrr', 
     'downgrad_mrr', 'mrr','new_cust','reactivation_cust', 'upgrade_cust','downgrad_cust','churn_cust','customer_live'];

    return (
      <Panel>
        <div><b>Dimentions</b></div>
        <div>
          {dimentions.map((value, index) => (
            <Pill value={value} key={index} />
          ))}
        </div>
        <div style={{height:'30px'}}/>
        <div><b>Measures</b></div>
        <div>
          {measures.map((value, index) => (
            <Pill value={value} key={index} />
          ))}
        </div>
      </Panel>
    );
  }
}
