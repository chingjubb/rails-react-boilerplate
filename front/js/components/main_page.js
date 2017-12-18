/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row } from 'react-bootstrap';
import Editor from './editor';
import LeftBar from './left_bar';
import ChartArea from './chart_area';
import ChartSettingsArea from './chart_settings_area';
import TypeSelectEditor from './type_select_editor';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Grid>
          <h1>Revenue and Growth Rate</h1>
        	<Row className="show-grid">
        		<Col md={2} lg={2}>
              <LeftBar />
            </Col>
        		<Col md={7} lg={7}>
              <TypeSelectEditor {...this.props} />
              <ChartArea />
            </Col>
            <Col md={2} lg={2}>
              <ChartSettingsArea />
            </Col>
        	</Row>
        </Grid>
      </div>
    );
  }
}

MainPage.propTypes = {
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
