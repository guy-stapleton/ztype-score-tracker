import React from 'react'
import {connect} from 'react-redux'

import {getScores} from '../actions/scores'

class RecentScoresGraph extends React.Component {
  constructor(props) {
  super(props)

  this.createGraph = this.createGraph.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(getScores())
  }


  createGraph(scores) {
    var data = scores.map((score, i) => {
      return score.score
    })

    let maxValue = Math.max(...data)

    console.log(maxValue)

    var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, maxValue])


    d3.select('.chart')
      .selectAll('div')
      .data(data)
      .enter().append('div')
      .attr('class', 'bar')
      .style('width', function(d) {return x(d) + 'px'})
      .style('height', function(d) {return 30 + 'px'})
      .style('font-size', function(d) {return 1.5 + 'em'})
      .style('padding-right', function(d) {return 0.5 + 'em'})
      .style('padding-bottom', function(d) {return 0.5 + 'em'})
      .style('margin-bottom', function(d) {return 0.5 + 'em'})
      .text(function(d) {return d})

  }

  render() {
    this.createGraph(this.props.scores)
    return (
      <div className="chart">
      </div>
    )
  }
}

const mapStateToProps = state => {
   return {scores: state.scores.reverse()}
 }


export default connect(mapStateToProps)(RecentScoresGraph)
