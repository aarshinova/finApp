import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../resources/static/app.css';
import SelectMonth from './SelectMonth';
import TotalExpensesGraph from './TotalExpensesGraph';
import BackLink from './BackLink';
import CurrentMonth from './CurrentMonth';

class App extends Component{
constructor(props){
    super(props);
    this.state={
      series : ['june', 'july', 'august', 'september'],
      labels : ['june', 'july', 'august', 'september'],
      colors : ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
      detailedView : false,
      month : ''
    }
    this.handleOpenMonthDetail = this.handleOpenMonthDetail.bind(this);
}
handleOpenMonthDetail(e){
    if (this.state.detailedView===false)
    this.setState({
      detailedView: true,
      month : e.currentTarget.attributes.name.nodeValue
    });
    else
        this.setState({
          detailedView: false
        });
}

render(){

    let allMonthsOverview =<div>
                        <SelectMonth/>
                         <TotalExpensesGraph series={this.state.series} labels={this.state.labels} colors={this.state.colors}
                         handleOpenDetail={this.handleOpenMonthDetail}/>
                   </div>

    let montDetails = <div>
                       <CurrentMonth month={this.state.month}/>
                       <TotalExpensesGraph series={this.state.series} labels={this.state.labels} colors={this.state.colors}
                       />
                       <BackLink handleOpenMonthOverview = {this.handleOpenMonthDetail}/>
                 </div>

    let visibleElement = this.state.detailedView ? montDetails:allMonthsOverview;
    return (
        <div>
        <h1>Wallet watch</h1>
        {visibleElement}
        </div>
    );
}
}


ReactDOM.render(
  <App/>, document.getElementById('charts')
);
