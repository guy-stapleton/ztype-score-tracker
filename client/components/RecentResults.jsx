import React from 'react'
import {Link} from 'react-router-dom'
import {getScores} from '../api/api'


class RecentResults extends React.Component {
  constructor(props){
     super(props)
    this.state = {
      error: null,
      scores: []
    }
    this.displayScores = this.displayScores.bind(this)
    this.addScoresToPage = this.addScoresToPage.bind(this)
  }
  // functions
  componentDidMount() {
    this.addScoresToPage()
  }

  displayScores(err, scores) {
    this.setState({
      error: err,
      scores: scores || []
    })
  }

  addScoresToPage(err) {
    this.setState({
      error: err
    })
    getScores(this.displayScores)
  }

  render() {
    return (
    <div>
      <ol>
        {this.state.scores.map((score, i) => {
          return <li key={i}>{score.score}</li>
        })}
      </ol>
    </div>
    )
  }
}

export default RecentResults
