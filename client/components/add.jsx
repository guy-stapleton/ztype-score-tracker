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
      <div className="row">
        <div className="col-xs-1 col-sm-3">
          &nbsp;
        </div>
        <div className="col-xs-10 col-sm-6">
          <h2>Add Score</h2>
          <form id="add-score" method="POST" onSubmit={this.submitNewScore.bind(this)}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Date <br/><input className="form-control" type="date" name="date" onChange={this.editScoreDetails.bind(this)} /></label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Score <br/><input className="form-control" type="number" name="score" onChange={this.editScoreDetails.bind(this)} /></label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Typing Accuracy <br/><input className="form-control" type="number" name="typing_accuracy" onChange={this.editScoreDetails.bind(this)} /></label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Wave <br/><input type="number" className="form-control" name="wave" onChange={this.editScoreDetails.bind(this)} /></label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Longest Streak <br/><input className="form-control" type="number" name="longest_streak" onChange={this.editScoreDetails.bind(this)} /></label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <input type="submit" className="btn btn-primary" value="Add Score" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-xs-1 col-sm-3">
          &nbsp;
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {scores: state.scores}
}

export default connect(mapStateToProps)(Add)
