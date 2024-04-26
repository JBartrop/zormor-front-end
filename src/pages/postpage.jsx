import List from '../list';
import React from 'react'
import Image1 from "../images/image1.jpg"
import { ClockIcon, InformationCircleIcon, MapPinIcon,  UserCircleIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'



function Postpage() {
    const listId = useParams();
    const list = List.find(( item) =>  item.id === listId.id )
    console.log(listId.id)



  return (
    <section>
        <div className="postpage">
        <div className="content">
            <div className="postpagebox">
                <div className="post-image">
                    <img src={list.image}  alt="posts-image" />
                </div>
                <div className="post-text">
                    <p><UserCircleIcon width={15} /> {list.name} </p>
                <p><InformationCircleIcon width={15} />   {list.description}</p>
                    <p><MapPinIcon width={15} />  {list.location}</p>
                    <p><ClockIcon width={15} />  {list.openhours}</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Postpage