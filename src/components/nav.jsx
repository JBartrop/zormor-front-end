import React from 'react'
import { HomeIcon, NewspaperIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <button aria-label="home">
          <Link to ="/"  className='link'>
            <HomeIcon width={15} />
            <span>home</span>
          </Link>
        </button>
        <button aria-label="create">
        <Link to="/create" className='link'>
            <NewspaperIcon width={15} />
            <span>create</span>
          </Link>
        </button>
    </nav>
  )
}

export default Nav