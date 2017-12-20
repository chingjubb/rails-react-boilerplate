/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Button, Grid, Col, Row, Panel, Table } from 'react-bootstrap';
import EditorPill from './editor_pill';
import Select from 'react-select';

export default class TypeSelectEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionArray1: '',
      optionArray2: '',
      optionArray3: '',
      optionArray4: '',
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);


    this.options = [{value:'dte', label:'dte'},
                    {value:'new_mrr', label:'new_mrr'},
                    {value:'reactivation_mrr', label:'reactivation_mrr'},
                    {value:'upgrade_mrr', label:'upgrade_mrr'},
                    {value:'churn_mrr', label:'churn_mrr'},
                    {value:'downgrad_mrr', label:'downgrad_mrr'},
                    {value:'mrr', label:'mrr'},
                    {value:'new_cust', label:'new_cust'},
                    {value:'reactivation_cust', label:'reactivation_cust'},
                    {value:'upgrade_cust', label:'upgrade_cust'},
                    {value:'downgrad_cust', label:'downgrad_cust'},
                    {value:'churn_cust', label:'churn_cust'},
                    {value:'customer_live', label:'customer_live'} ];

    if (this.props.scenario == 'scenario1' || this.props.scenario =='scenario2') {
      this.options = [{value:'chart type', label:'chart type'},
                      {value:'year', label:'year'},
                      {value:'count', label:'count'}];
    }
   
  }

  handleChange1(selectedOptions) {
    console.log("selectedOptions", selectedOptions);
    this.setState({optionArray1: selectedOptions});
    if (selectedOptions == null) {
      this.props.replaceList1([]);
      return;
    }
    this.props.replaceList1([selectedOptions.value]);
  }

  handleChange2(selectedOptions) {
    console.log("selectedOptions", selectedOptions);
    this.setState({optionArray2: selectedOptions});
    if (selectedOptions == null) {
      this.props.replaceList2([]);
      return;
    }
    this.props.replaceList2([selectedOptions.value]);
  }

  handleChange3(selectedOptions) {
    console.log("selectedOptions", selectedOptions);
    this.setState({optionArray3: selectedOptions});
    if (selectedOptions == null) {
      this.props.replaceList3([]);
      return;
    }
    this.props.replaceList3([selectedOptions.value]);
  }

  handleChange4(selectedOptions) {
    console.log("selectedOptions", selectedOptions);
    this.setState({optionArray4: selectedOptions});
    // var newArray = []
    // for (let i = 0; i < selectedOptions.length; i++) {
    //   newArray.push(selectedOptions[i].value);
    // }
    this.props.replaceList4([selectedOptions.value]);
  }
  render() {
    return (
      <Panel>Type Select Editor Area
        <Table striped bordered condensed>
          <tbody>
            <tr>
              <td style={{width:'130px'}}>Columns (series)</td>
              <td style={{padding:'0px'}}>
                <Select name='form-field-name'
                        multi={false}
                        placeholder='type dimention or measure here'
                        value={this.state.optionArray1}
                        onChange={this.handleChange1}
                        options={this.options} 
                        autoFocus={true}
                  />
              </td>
            </tr>
            <tr>
              <td style={{width:'130px'}}>Rows (X axis)</td>
              <td style={{padding:'0px'}}>
                 <Select name='form-field-name'
                        multi={false}
                        placeholder='type dimention or measure here'
                        value={this.state.optionArray2}
                        onChange={this.handleChange2}
                        options={this.options} 
                  />
              </td>
            </tr>
            <tr>
              <td style={{width:'130px'}}>Values (Y axis)</td>
              <td style={{padding:'0px'}}>
                <Select name='form-field-name'
                        multi={false}
                        placeholder='type dimention or measure here'
                        value={this.state.optionArray3}
                        onChange={this.handleChange3}
                        options={this.options} 
                  />
              </td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    );
  }
}

TypeSelectEditor.propTypes = {
  addToList1: React.PropTypes.func.isRequired,
  addToList2: React.PropTypes.func.isRequired,
  addToList3: React.PropTypes.func.isRequired,
  addToList4: React.PropTypes.func.isRequired,
  replaceList1: React.PropTypes.func.isRequired,
  replaceList2: React.PropTypes.func.isRequired,
  replaceList3: React.PropTypes.func.isRequired,
  replaceList4: React.PropTypes.func.isRequired,
  removeFromList1: React.PropTypes.func.isRequired,
  removeFromList2: React.PropTypes.func.isRequired,
  removeFromList3: React.PropTypes.func.isRequired,
  removeFromList4: React.PropTypes.func.isRequired,
  list1: React.PropTypes.array.isRequired,
  list2: React.PropTypes.array.isRequired,
  list3: React.PropTypes.array.isRequired,
  list4: React.PropTypes.array.isRequired,
};

