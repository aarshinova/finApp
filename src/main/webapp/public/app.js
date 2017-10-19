import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../resources/static/app.css';
import SelectMonth from './SelectMonth';
import TotalExpensesGraph from './TotalExpensesGraph';
import BackLink from './BackLink';
import CurrentMonth from './CurrentMonth';
import {loadMonths} from "./store/client";
import {loadYears} from "./store/client";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: ['june', 'july', 'august', 'september'],
      labels: ['june', 'july', 'august', 'september'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
      detailedView: false,
      months: [],
      years : [],
      currentMonth:""
    }
    this.handleOpenMonthDetail = this.handleOpenMonthDetail.bind(this);
    this.handleDatesFilterSubmit = this.handleDatesFilterSubmit.bind(this);
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
      // load all the information

      loadMonths().then(results => {
          var months = results.data._embedded.months;
          loadYears().then(results => {
              this.setState({
                  months: months,
                  years: results.data._embedded.years
              })

          });

      });
  }

  handleDatesFilterSubmit(e){
    e.preventDefault();
  }

  render() {
    let allMonthsOverview = <div>
      <SelectMonth months={this.state.months} years={this.state.years} handleDatesFilterSubmit={this.handleDatesFilterSubmit}/>
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
        <h1>FinApp</h1>
        {visibleElement}
      </div>
    );
  }
}


ReactDOM.render(
  <App />, document.getElementById('charts')
);
