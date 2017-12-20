/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import MainPage from './main_page';
import MainPage2 from './main_page2';
import { Button, Panel } from 'react-bootstrap';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPage1: false,
      mainPage2: false
    };
    this.onMainPage1 = this.onMainPage1.bind(this);
    this.onMainPage2 = this.onMainPage2.bind(this);
  }
  onMainPage1() {
    this.setState({mainPage1: true, mainPage2: false})
  }
  onMainPage2() {
    this.setState({mainPage1: false, mainPage2: true});
    this.props.setScenario('scenario2');
  }
  render() {
    console.log("this.props", this.props)
    if (this.state.mainPage1) {
      return (
        <MainPage {...this.props} {...this.state} />
      );
    } else if (this.state.mainPage2) {
      return (
        <MainPage2 {...this.props} {...this.state} />
      );
    } else {
      return (<Panel>
                <Button onClick={this.onMainPage1}>MainPage1: Drop Editor</Button>
                <Button onClick={this.onMainPage2}>MainPage2: Type Select Editor</Button>
              </Panel>);
    }
  }

  componentDidMount() {
    this.props.onFetchServerTimestamp();
  }
}

/** @const {Object} propTypes definition */
HelloWorld.propTypes = {
  scenario:React.PropTypes.string.isRequired,
  serverTimestamp: React.PropTypes.number,
  setScenario: React.PropTypes.func.isRequired,
  onFetchServerTimestamp: React.PropTypes.func.isRequired,
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
