/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row } from 'react-bootstrap';
import Editor from './editor';
import LeftBar from './left_bar';
import ChartArea from './chart_area';

export default class MainPage extends React.Component {
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
              <Editor />
              <ChartArea />
            </Col>
        	</Row>
        </Grid>
      </div>
    );
  }
}
