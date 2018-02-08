import React from 'react'
import {Link} from 'react-router-dom'

const Nav = props => {
  return (
    <nav>
      <ul>
        <li><Link to={'/add'}>Add Result</Link></li>
        <li><Link to={'/recent-results'}>Last Week's Result</Link></li>
        <li><Link to={'/high-scores'}>High Scores</Link></li>
        <li><a href="http://zty.pe">Zty.pe - The Game</a></li>
      </ul>
    </nav>
  )
}

export default Nav
