import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function compareNumbers(a, b) {
  return a - b;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


 export default class TotalExpensesGraph extends Component{
     constructor(props){
        // if we want props passed down to this component from a parent component
        super(props)
        // set initial state
        this.state = {
          data: [],
          series : this.props.series,
          labels: this.props.labels,
          colors: this.props.colors,
          ids: this.props.ids
        }
      }
    componentDidMount() {
        this.populateArray();
    }

    populateArray() {
        var data = [],
            series = 4,//getRandomInt(2, 10),
            serieLength = 1;//getRandomInt(2, 10);

        for (var i = series; i--; ) {
            var tmp = [];

            for (var j = serieLength; j--; ) {
                tmp.push(getRandomInt(0, 20));
            }

            data.push(tmp);
        }

        this.setState({ data: data });
    }
  render() {
    return (
            <section>
                    <Charts
                    data={ this.state.data }
                    labels={ this.state.series }
                    colors={ this.state.colors }
                    height={ 250 }
                    handleClick={this.props.handleOpenDetail }
                    ids={this.props.ids}
                    />
             </section>
       )
  }
}

class Charts extends Component{


  render() {
    var self = this,
      data = this.props.data,
      colors = this.props.colors,
      ids = this.props.ids,
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
       	<div className={ 'Charts' + (self.props.horizontal ? ' horizontal' : '' ) }>
       	{
       	    data.map(function (serie, serieIndex) {
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
                  name={self.props.labels[serieIndex]}
                  onClick={ self.props.handleClick }
                >
                <label>{ self.props.labels[serieIndex] }</label>
                {
                  serie.map(function (item, itemIndex) {
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
                        style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
                      }

                     return (
                       <div
                        className={ 'Charts--item ' + (self.props.grouping) }
                        style={ style }
                        key={itemIndex}

                      >
                        <b style={{ color: color }}>{ item }</b>
                       </div>
                    );
                    })
                }
                </div>
          );
        }) }
      </div>
    );
  }
}
