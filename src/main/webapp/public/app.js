import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../resources/static/app.css';


function compareNumbers(a, b) {
  return a - b;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var ExpensesHisto = React.createClass({
  getInitialState: function () {
        return {
            data: [],
            series: ['july'],
            labels: ['june', 'july', 'august'],
            colors: ['#43A19E', '#7B43A1', '#F2317A']
        }
    },
    componentDidMount: function () {
        this.populateArray();
    },
    populateArray: function () {
        var data = [],
            series = 1,//getRandomInt(2, 10),
            serieLength = 3;//getRandomInt(2, 10);

        for (var i = series; i--; ) {
            var tmp = [];

            for (var j = serieLength; j--; ) {
                tmp.push(getRandomInt(0, 20));
            }

            data.push(tmp);
        }

        this.setState({ data: data });
    },
  render: function() {
    return (
            <section>
                    <Charts
                    data={ this.state.data }
                    labels={ this.state.series }
                                        colors={ this.state.colors }
                                        height={ 250 }

                    />
             </section>)
  }
});


var Charts = React.createClass({
  render: function () {
    var self = this,
      data = this.props.data,
      layered = false,
      stacked = false,
      opaque = false,
      max = 0;

    for (var i = data.length; i--; ) {
      for (var j = data[i].length; j--; ) {
        if (data[i][j] > max) {
          max = data[i][j];
        }
      }
    }


    return (
       	<div className={ 'Charts' + (this.props.horizontal ? ' horizontal' : '' ) }>
       				{ data.map(function (serie, serieIndex) {
       				 	var sortedSerie = serie.slice(0),
       				 		sum;

       				 	sum = serie.reduce(function (carry, current) {
       				 		return carry + current;
       					}, 0);
       				 	sortedSerie.sort(compareNumbers);


          return (
            <div className={ 'Charts--serie ' + (self.props.grouping) }
              key={ serieIndex }
              style={{ height: self.props.height ? self.props.height: 'auto' }}
            >
            <label>{ self.props.labels[serieIndex] }</label>
            { serie.map(function (item, itemIndex) {
              var color = self.props.colors[itemIndex], style,
                size = item / (stacked ? sum : max) * 100;

              style = {
                backgroundColor: color,
                opacity: opaque ? 1 : (item/max + .05),
                zIndex: item
              };

              if (self.props.horizontal) {
                style['width'] = size + '%';
              } else {
                style['height'] = size + '%';
              }

              if (layered && !self.props.horizontal) {
                //console.log(sortedSerie, serie, sortedSerie.indexOf(item));
                style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
                // style['left'] = (itemIndex * 10) + '%';
              }

             return (
               <div
                className={ 'Charts--item ' + (self.props.grouping) }
                style={ style }
                key={ itemIndex }
              >
                <b style={{ color: color }}>{ item }</b>
               </div>
            );
            }) }
            </div>
          );
        }) }
      </div>
    );
  }
});

var EXPENSES = [
  {month: 'August/17', expenses: '$49.99', income : '100'},
  {month: 'September/18', expenses: '$9.99', income: '90'},
 ];

ReactDOM.render(
  <ExpensesHisto/>, document.getElementById('charts')
);
