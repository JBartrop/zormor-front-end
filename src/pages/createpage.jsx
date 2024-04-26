import { CameraIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import { Form, redirect, useFetcher } from 'react-router-dom'



export async function createaction(){
  return redirect("/")
}

function Create() {

  const [item, setitem] = useState({
    name:"",
    description:"",
    location:"",
    openhours:"",
    image:""
  });

    const fetcher = useFetcher();
    const issubmitting = fetcher.state === "submitting"

    function handlechange(event){
      const {name, value} = event.target
      setitem((previtem) => {
        return {...previtem, [name]: value}
      })
      console.log(value)
    }


  return (
    <section className="create">
        <div className="heading">
        <h1>create</h1>
        </div>
        <div className="content">
        <Form method="post"  className="forms">
            <input type="hidden" _action="create" />

            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="name"
              onChange={handlechange}
              value={item.name}
              required
            />

            <label htmlFor="name">Description</label>
            <input 
              type="description"
               name="Description" 
               placeholder="description"
               onChange={handlechange} 
               value={item.description}
               required 
              />

            <label htmlFor="location">Location</label>
            <input 
              type="text" 
              name="location" 
              placeholder="location"
              onChange={handlechange} 
              value={item.location} 
              required
            />

            <label htmlFor="Time">open hours</label>
            <input 
              type="text" 
              name="openhours" 
              placeholder="6am - 6pm"
              onChange={handlechange} 
              value={item.openhours}
              required 
            />

            <label htmlFor="file-upload" className="file-uploads"> <CameraIcon width={20} /> image </label>
            <input 
              type="file" 
              accept="image/png, image/jpg, image/gif, image/jpeg," 
              name="file-upload" 
              placeholder="image"
              onInput={handlechange} 
              value={item.image[0]}
              required
            />

            <button 
              type="submit" 
              disabled={issubmitting} 
              onClick={(e) => {
                 e.preventDefault()
                 setitem({
                  name:"",
                  description:"",
                  location:"",
                  openhours:"",
                  image:""
                 })
                 }
              }
            >
            {issubmitting ? "submitting..." : "create"}
            </button>
        </Form>
        </div>
    </section>
  )
}

export default Create