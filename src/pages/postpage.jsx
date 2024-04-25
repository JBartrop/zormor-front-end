import React from 'react'
import Image1 from "../images/image1.jpg"
import { ClockIcon, InformationCircleIcon, MapPinIcon,  UserCircleIcon } from '@heroicons/react/24/solid'


function Postpage() {
  return (
    <section>
        <div className="postpage">
        <div className="content">
            <div className="postpagebox">
                <div className="post-image">
                    <img src={Image1}  alt="posts-image" />
                </div>
                <div className="post-text">
                    <p><UserCircleIcon width={15} />  name</p>
                    <p><InformationCircleIcon width={15} />   description</p>
                    <p><MapPinIcon width={15} />  location</p>
                    <p><ClockIcon width={15} />  time</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Postpage