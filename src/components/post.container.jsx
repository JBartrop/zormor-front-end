import React from 'react'
import { ClockIcon, InformationCircleIcon, MapPinIcon,  PlusIcon,  UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Postcontainer(props) {
  return (
    <div className="postbox">
        <div className="post-image">
            <img src={props.image} alt="postshere" />
        </div>
        <div className="post-text">
            <p><UserCircleIcon width={15} /> {props.name}</p>
            <p><InformationCircleIcon width={15} />  {props.description}</p>
            <p><MapPinIcon width={15} />  {props.location}</p>
            <p><ClockIcon width={15} />  {props.openhours}</p>
            <button aria-label="home">
                  <Link to = {`/post/${props.id}`}  className='link'>
                    <PlusIcon width={15} />
                    <span>view more</span>
                  </Link>
                </button>
        </div>
    </div>
  )
}

export default Postcontainer