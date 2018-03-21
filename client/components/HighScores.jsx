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
    return (
      <div>
        <h2>High Scores</h2>
        {this.props.scores.map((score, i) => {
          return <p key={i}>{score.score}</p>
        })}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {scores: state.scores}
}

export default connect(mapStateToProps)(HighScores)
