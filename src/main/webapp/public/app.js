import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../resources/static/app.css';
import SelectMonth from './SelectMonth';
import TotalExpensesGraph from './TotalExpensesGraph';


class App extends Component{
constructor(props){
    super(props);
}
render(){
    return (
       <div>
        <SelectMonth/>
        <TotalExpensesGraph/>
      </div>);
}
}


ReactDOM.render(
  <App/>, document.getElementById('charts')
);
