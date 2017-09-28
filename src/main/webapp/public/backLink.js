import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class BackLink extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <a href="" onClick={this.props.handleOpenMonthOverview}>Back to the general view</a>
      </div>
    );
  }
}