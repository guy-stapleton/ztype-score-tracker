import React from 'react'
import {connect} from 'react-redux'

class RecentScoresGraph extends React.Component {
  constructor(props) {
  super(props)
  }
  componentDiDMount() {

  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <div id="graph">
        {this.props.scores.map((score, i) => {
          return <p key={i}>{score.score}</p>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
   return {scores: state.scores.reverse()}
 }


export default connect(mapStateToProps)(RecentScoresGraph)
