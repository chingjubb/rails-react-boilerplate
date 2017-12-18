/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Panel } from 'react-bootstrap';
import Select from 'react-select';

export default class ChartSettingsArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: 'table'
    };
    this.options= [{value:'table', label:'table'},
                   {value:'bar', label:'bar'},
                   {value:'line', label:'line'},
                   {value:'number overlay', label:'number overlay'},
                   {value:'sparkline', label:'sparkline'}];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedValue) {
    this.setState({chartType: selectedValue});
  }
  render() {
    return (
      <Panel style={{height:'300px'}}>
        Chart Type
        <Select name='form-field-name'
                placeholder='Select Chart Type'
                value={this.state.chartType}
                onChange={this.handleChange}
                options={this.options} 
                clearable={false} />
      </Panel>
    );
  }
}

ChartSettingsArea.propTypes = {
};
