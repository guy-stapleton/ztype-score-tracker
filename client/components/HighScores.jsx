import React from 'react'
import {connect} from 'react-redux'

import {getScores} from '../actions/scores'


class HighScores extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getScores())
  }
  render() {
    console.log(this.props.scores)
    return (
      <div>
        <h2>High Scores</h2>
        <ol>
        {this.props.scores.map((score, i) => {
          return <li key={i}>{score}</li>
        })}
      </ol>
      </div>

    )
  }
}

const mapStateToProps = state => {
  let topScores = state.scores.map((score, i) => {
    return score.score
  })
  let topScoresSorted = topScores.sort((a, b) => {return b-a})
  return {scores: topScoresSorted.slice(0, 5)}
}

export default connect(mapStateToProps)(HighScores)
