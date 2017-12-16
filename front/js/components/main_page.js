/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row } from 'react-bootstrap';
import Editor from './editor';
import LeftBar from './left_bar';
import ChartArea from './chart_area';

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
        		<Col md={3} lg={3}>
              <LeftBar />
            </Col>
        		<Col md={7} lg={7}>
              <Editor {...this.props} />
              <ChartArea />
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
  list1: React.PropTypes.array.isRequired,
  list2: React.PropTypes.array.isRequired,
  list3: React.PropTypes.array.isRequired,
  list4: React.PropTypes.array.isRequired,
};
