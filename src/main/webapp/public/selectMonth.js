import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SelectMonth extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
      </div>
    );
  }
}