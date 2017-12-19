/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel, Table, Alert, Well } from 'react-bootstrap';
export default class ChartDropArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragOver1: false,
      dragOver2: false,
    };
    this.onDropList1 = this.onDropList1.bind(this);
    this.onDropList2 = this.onDropList2.bind(this);
    this.onDragOverList1 = this.onDragOverList1.bind(this);
    this.onDragOverList2 = this.onDragOverList2.bind(this);
  }
  onDropList1(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("on Drop value: ", value);
    this.props.addToList1(value);
  }
  onDragOverList1(ev) {
    ev.preventDefault();
    this.setState({dragOver1: true});
  }
  onDropList2(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("on Drop value: ", value);
    this.props.addToList2(value);
    this.setState({dragOver2: true});
  }
  onDragOverList2(ev) {
    ev.preventDefault();
  }
  render() {

    return (
      <div style={{position:'relative'}}>
        <div style={{border:'1px solid gray',backgroundColor:'gray', width:'550px',height:'3px', position:'absolute',top:'50px'}}></div>
        <div style={{border:'1px solid gray',backgroundColor:'gray', width:'3px',height:'250px', position:'absolute',left:'130px'}}></div>
     
        <div id='Column Drop area' style={{
                width:'450px',
                height:'50px', 
                position:'absolute',
                left:'133px',
                padding:'10px',
                paddingLeft:'30px'}}
                onDrop={this.onDropList1} onDragOver={this.onDragOverList1}>Drop field here</div>

        <div id='Row Drop area' style={{ 
                      width:'130px',
                      height:'200px', 
                      position:'absolute',
                      top:'50px',
                      padding:'10px',
                      paddingTop:'30px',}}
                      onDrop={this.onDropList2} onDragOver={this.onDragOverList2}>Drop field here</div>
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