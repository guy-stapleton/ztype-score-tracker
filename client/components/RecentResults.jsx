import React from 'react'
import {Link} from 'react-router-dom'

import RecentScoresGraph from './RecentScoresGraph'

class RecentResults extends React.Component {
  constructor(props) {
  super(props)
  }

  render() {
    return (
      <div>
        <h2>Recent Results</h2>
        <RecentScoresGraph />
      </div>
    )
  }
}


export default RecentResults
