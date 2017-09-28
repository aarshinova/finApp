import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CurrentMonth extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h3>You are looking at expenses of : {this.props.month}</h3>
      </div>
    );
  }
}