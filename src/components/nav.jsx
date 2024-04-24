import React from 'react'
import { HomeIcon, NewspaperIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <button aria-label="home">
            <HomeIcon width={18} />
            <span><Link to ="/"  className='link'>home</Link></span>
        </button>
        <button aria-label="create">
            <NewspaperIcon width={18} />
            <span><Link to="/create" className='link'>create</Link></span>
        </button>
    </nav>
  )
}

export default Nav