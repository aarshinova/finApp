import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SelectMonth extends Component {
  constructor(props){
    super(props);
  }
   // TODO add month selector
  render(){
    return (
      <div>
        <h3>Choose the months you want to display: {this.props.name}</h3>
      </div>
    );
  }
}