import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

// import components
import Nav from './Nav'
import Home from './Home'
import Add from './Add'
import RecentResults from './RecentResults'
import HighScores from './HighScores'

import {getScores} from '../actions/scores'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getScores())
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Ztype Score</h1>
          <Route exact path='/' component={Home} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/recent-results' component={RecentResults} />
          <Route exact path='/high-scores' component={HighScores} />
          <div>
            <Nav />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {scores: state.scores}
}

export default connect(mapStateToProps)(App)
