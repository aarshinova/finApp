import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../resources/static/app.css';
import SelectMonth from './SelectMonth';
import TotalExpensesGraph from './TotalExpensesGraph';
import BackLink from './BackLink';
import CurrentMonth from './CurrentMonth';
import {loadMonths} from "./store/client";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: ['june', 'july', 'august', 'september'],
      labels: ['june', 'july', 'august', 'september'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
      detailedView: false,
      months: [],
      currentMonth:""
    }
    this.handleOpenMonthDetail = this.handleOpenMonthDetail.bind(this);
  }
  handleOpenMonthDetail(e) {
    if (this.state.detailedView === false)
      this.setState({
        detailedView: true,
        currentMonth: e.currentTarget.attributes.name.nodeValue
      });
    else
      this.setState({
        detailedView: false
      });
  }

  componentDidMount() {
      loadMonths().then(results => {
           console.log(results.data._embedded.months);
          this.setState({
              months: results.data._embedded.months
          })
      });
      console.log(this.state);
  }

  render() {
    let allMonthsOverview = <div>
      <SelectMonth months={this.state.months} />
      <TotalExpensesGraph series={this.state.series} labels={this.state.labels} colors={this.state.colors}
        handleOpenDetail={this.handleOpenMonthDetail} />
    </div>

    let montDetails = <div>
      <CurrentMonth month={this.state.currentMonth} />
      <TotalExpensesGraph series={this.state.series} labels={this.state.labels} colors={this.state.colors}
      />
      <BackLink handleOpenMonthOverview={this.handleOpenMonthDetail} />
    </div>

    let visibleElement = this.state.detailedView ? montDetails : allMonthsOverview;
    return (
      <div>
        <h1>Wallet watch</h1>
        {visibleElement}
      </div>
    );
  }
}


ReactDOM.render(
  <App />, document.getElementById('charts')
);
