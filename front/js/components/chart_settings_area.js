/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Panel } from 'react-bootstrap';

export default class ChartSettingsArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Panel style={{height:'300px'}}>
        Chart Type
      </Panel>
    );
  }
}

ChartSettingsArea.propTypes = {
};
