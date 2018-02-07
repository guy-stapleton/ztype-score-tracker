import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// import components
import Nav from './Nav'
import Home from './Home'
import Add from './Add'
import RecentResults from './RecentResults'

const App = (props) => {
  return (
    <Router>
      <div>
        <h1>Ztype Score</h1>
        <Route path='/' component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/recent-results' component={RecentResults} />
        <div>
          <Nav />
        </div>
      </div>
  </Router>
  )
}

//
// <Router>
// </Router>


export default App



{/* <route path='/addResult' component={Add} /> */}
