import React from 'react'
import {connect} from 'react-redux'
import {addScore} from '../actions/scores'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: {}
    }
  }
  submitNewScore(e){
    e.preventDefault()
    e.target.reset()
    this.props.dispatch(addScore(this.state.score))
  }
  editScoreDetails(e) {
    let score = this.state.score
    score[e.target.name] = e.target.value
    this.setState({score})
  }
  render() {
    return (
      <div>
        <h2>Add Score</h2>
        <form id="add-score" method="POST" onSubmit={this.submitNewScore.bind(this)}>
          <label>Date <br/><input type="date" name="date" onChange={this.editScoreDetails.bind(this)} /></label>
          <label>Score <br/><input type="number" name="score" onChange={this.editScoreDetails.bind(this)} /></label>
          <label>Typing Accuracy <br/><input type="number" name="typing_accuracy" onChange={this.editScoreDetails.bind(this)} /></label>
          <label>Wave <br/><input type="number" name="wave" onChange={this.editScoreDetails.bind(this)} /></label>
          <label>Longest Streak <br/><input type="number" name="longest_streak" onChange={this.editScoreDetails.bind(this)} /></label>
          <input type="submit" value="Add Score" />
        </form>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {scores: state.scores}
}

export default connect(mapStateToProps)(Add)
