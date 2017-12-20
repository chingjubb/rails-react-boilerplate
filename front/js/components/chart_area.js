/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

import { Button, Grid, Col, Row, Panel, Table } from 'react-bootstrap';
import ChartDropArea from './chart_drop_area';

export default class ChartArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onDropList2 = this.onDropList2.bind(this);
    this.onDropList3 = this.onDropList3.bind(this);
    this.onDragOverList2 = this.onDragOverList2.bind(this);
    this.onDragOverList3 = this.onDragOverList3.bind(this);
    this.renderImageWithDropArea = this.renderImageWithDropArea.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }
  onDropList2(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("onDropList2: ", value);
    
    this.props.addToList2(value);
  }
  onDragOverList2(ev) {
    ev.preventDefault();
  }
  onDropList3(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var value = ev.dataTransfer.getData("text/plain");
    console.log("onDropList3: ", value);
    this.props.addToList3(value);
  }
  onDragOverList3(ev) {
    ev.preventDefault();
  }
  renderImageWithDropArea(file) {
    return (<div style={{position:'relative'}}>
        <div id='Column Drop area' style={{
                width:'500px',
                height:'50px', 
                position:'absolute',
                left:'0px',
                padding:'10px',
                paddingLeft:'30px'}}
                onDrop={this.onDropList2} onDragOver={this.onDragOverList2}></div>

        <div id='Row Drop area' style={{ 
                      width:'60px',
                      height:'200px', 
                      position:'absolute',
                      top:'50px',
                      padding:'10px',
                      paddingTop:'30px'}}
                      onDrop={this.onDropList3} onDragOver={this.onDragOverList3}></div>

        { this.renderImage(file) }
      </div>);
  }
  renderImage(file) {
    return (<img src={'/dist/images/' + file} style={{maxWidth:'500px'}} />);
  }

  render() {
    let dropArea = <ChartDropArea {...this.props} />
    let file = '';
    if (this.props.scenario =='scenario1') {
      let column = null;
      let x = null;
      let y = null;
      let chartType = this.props.chartType;
      if (this.props.list1.length > 0)  {
        column = this.props.list1[0];
      }
      if (this.props.list2.length > 0) {
        x = this.props.list2[0];
      }
      if (this.props.list3.length > 0) {
        y = this.props.list3[0];
      }
      if (column == 'chart type' && x =='year' && y == 'count' && chartType == 'table') {
        file = 'chart-type-x-count-x-year.png';
      } else if (column == 'chart type' && x =='year' && y == 'count' && chartType == 'bar') {
        file = 'bar-chart.png'
      } else if (column == 'chart type' && x =='year' && y == 'count' && chartType == 'line') {
        file = 'line-chart.png'
      } else if (column == 'chart type' && x =='year' && y == 'count' && chartType == 'number overlay') {
        file = 'number-overlay.png'
      } else if (column == 'chart type' && x =='year' && y == 'count' && chartType == 'pie') {
        file = 'pie-chart.png'
      } else if (column == 'chart type' && x =='year' && y == null) {
        file = 'chart-type-x-year.png';
      } else if (column == 'chart type' && x ==null && y == 'count') {
        file = 'chart-type-x-count.png';
      } else if (column == null && x =='year' && y == 'count') {
        file = 'year-x-count.png';
      } else if (column == null && x == null && y == 'count') { 
        file = 'count.png';
      } else if (column == 'chart type' && x == null && y == null) { 
        file = 'chart-type.png';
      } else if (column == null && x == 'year' && y == null) { 
        file = 'year.png'
      }
    }

    if (file.length > 0) {
      return this.renderImageWithDropArea(file);
    } else {
      return (<ChartDropArea {...this.props} />);
    }

  }
}

ChartArea.propTypes = {
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