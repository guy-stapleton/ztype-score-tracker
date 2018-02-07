import React from 'react'
import {Link} from 'react-router-dom'

const Nav = props => {
  return (
    <nav>
      <ul>
        <li><Link to={'/add'}>Add Result</Link></li>
        <li><Link to={'/recent-results'}>Last Wee's Result</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
