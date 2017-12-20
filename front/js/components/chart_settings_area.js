/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Panel } from 'react-bootstrap';
import Select from 'react-select';

export default class ChartSettingsArea extends React.Component {
  constructor(props) {
    super(props);

    this.options= [{value:'table', label:'table'},
                   {value:'bar', label:'bar'},
                   {value:'line', label:'line'},
                   {value:'number overlay', label:'number overlay'},
                   {value:'pie', label:'pie'}];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedValue) {
    console.log("change to chart type: ",selectedValue.value);
    let newChartType = selectedValue.value;
    this.props.setChartType(newChartType)
  }
  render() {
    return (
      <Panel style={{height:'300px'}}>
        Chart Type
        <Select name='form-field-name'
                placeholder='Select Chart Type'
                value={this.props.chartType}
                onChange={this.handleChange}
                options={this.options} 
                clearable={false} />
      </Panel>
    );
  }
}

ChartSettingsArea.propTypes = {
};
