import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// import components
import Nav from './Nav'
import Home from './Home'
import Add from './Add'

const App = (props) => {
  return (
    <Router>
      <div>
        <h1>Ztype Score</h1>
        <Nav />
        <div>
          <Route path='/' component={Home} />
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
