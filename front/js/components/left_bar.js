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

    this.dimentions = ['dte'];
    this.measures = ['new_mrr', 
                     'reactivation_mrr', 
                     'upgrade_mrr', 
                     'churn_mrr', 
                     'downgrad_mrr', 
                     'mrr',
                     'new_cust',
                     'reactivation_cust', 
                     'upgrade_cust',
                     'downgrad_cust',
                     'churn_cust',
                     'customer_live'];

    this.options = [{value:'chart type', label:'chart type'}, 
                    {value:'year', label:'year'},
                    {value:'count',label:'count'},];

    if (this.props.scenario=='scenario1' || this.props.scenario=='scenario2') {
      this.dimentions = ['chart type', 'year'];
      this.measures = ['count'];
    }             

  }
  render() {
  	 
    return (
      <Panel>
        SQL Views
        <Select name='form-field-name'
                placeholder='Select Chart Type'
                value={'business_metrics'}
                options={this.options} 
                clearable={false} />
        <div style={{height:'30px'}}/>
        <div><b>Dimentions</b></div>
        <div>
          {this.dimentions.map((value, index) => (
            <Pill value={value} key={index} />
          ))}
        </div>
        <div style={{height:'30px'}}/>
        <div><b>Measures</b></div>
        <div>
          {this.measures.map((value, index) => (
            <Pill value={value} key={index} />
          ))}
        </div>
      </Panel>
    );
  }
}

LeftBar.propTypes = {
  addToList1: React.PropTypes.func.isRequired,
  addToList2: React.PropTypes.func.isRequired,
  addToList3: React.PropTypes.func.isRequired,
  addToList4: React.PropTypes.func.isRequired,
  removeFromList1: React.PropTypes.func.isRequired,
  removeFromList2: React.PropTypes.func.isRequired,
  removeFromList3: React.PropTypes.func.isRequired,
  removeFromList4: React.PropTypes.func.isRequired,
  replaceList1: React.PropTypes.func.isRequired,
  list1: React.PropTypes.array.isRequired,
  list2: React.PropTypes.array.isRequired,
  list3: React.PropTypes.array.isRequired,
  list4: React.PropTypes.array.isRequired,
};
