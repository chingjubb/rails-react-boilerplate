/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel, Table } from 'react-bootstrap';
export default class ChartDropArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div style={{position:'relative'}}>
        <div style={{border:'1px solid gray',backgroundColor:'gray', width:'550',height:'3px', position:'absolute',top:'50px'}}></div>
        <div style={{border:'1px solid gray',backgroundColor:'gray', width:'3px',height:'250px', position:'absolute',left:'130px'}}></div>
     
        <div id='Column Drop area' style={{border:'1px dotted gray',
                      backgroundColor:'white', 
                      width:'450',
                      height:'50px', 
                      position:'absolute',
                      left:'130px',
                      padding:'10px'}}>Drop field here</div>

        <div id='Row Drop area' style={{border:'1px dotted gray',
                      backgroundColor:'white', 
                      width:'130px',
                      height:'200px', 
                      position:'absolute',
                      top:'50px',
                      padding:'10px'}}>Drop field here</div>
      </div>
    );
  }
}

ChartDropArea.propTypes = {
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