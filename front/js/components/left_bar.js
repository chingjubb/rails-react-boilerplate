/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Panel } from 'react-bootstrap';
import Pill from './pill';
import Select from 'react-select';

export default class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
  	 const dimentions = ['dte'];
     const measures = ['new_mrr', 'reactivation_mrr', 'upgrade_mrr', 'churn_mrr', 
     'downgrad_mrr', 'mrr','new_cust','reactivation_cust', 'upgrade_cust','downgrad_cust','churn_cust','customer_live'];

     const options = [{value:'business_metrics',label:'business_metrics'}, 
                      {value:'time_on_site_per_day',label:'time_on_site_per_day'},
                      {value:'active_site_users',label:'active_site_users'},
                      {value:'_mrr_change',label:'_mrr_change'}, 
                      {value:'_charts_data',label:'_charts_data'}]
    return (
      <Panel>
        SQL Views
        <Select name='form-field-name'
                placeholder='Select Chart Type'
                value={'business_metrics'}
                options={options} 
                clearable={false} />
        <div style={{height:'30px'}}/>
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
