import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// import components
import Nav from './Nav'
import Home from './Home'
import Add from './Add'
import RecentResults from './RecentResults'
import HighScores from './HighScores'

const App = (props) => {
  return (
    <Router>
      <div>
        <h1>Ztype Score</h1>
        <Route exact path='/' component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/recent-results' component={RecentResults} />
        <Route path='/high-scores' component={HighScores} />
        <div>
          <Nav />
        </div>
      </div>
  </Router>
  )
}

export default App