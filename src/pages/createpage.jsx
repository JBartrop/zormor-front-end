import { CameraIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { Form, redirect, useFetcher } from 'react-router-dom'



export async function createaction(){
  return redirect("/")
}

function Create() {

    const fetcher = useFetcher();
    const issubmitting = fetcher.state === "submitting"


  return (
    <section className="create">
        <div className="heading">
        <h1>create</h1>
        </div>
        <div className="content">
        <Form method="post"  className="forms">
            <input type="hidden" _action="create" />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="name" required />
            <label htmlFor="name">Description</label>
            <input type="description" name="Description" placeholder="description" required />
            <label htmlFor="location">Location</label>
            <input type="text" name="Location" placeholder="location"  required/>
            <label htmlFor="Time">open hours</label>
            <input type="time" name="Time" placeholder="open hours" required />
            <label htmlFor="file-upload" className="file-uploads"> <CameraIcon width={20} /> image </label>
            <input type="file" accept="image/png, image/jpg, image/gif, image/jpeg," name="file-upload" placeholder="image" required />
            <button type="submit" disabled={issubmitting}>
            {issubmitting ? "submitting..." : "create"}
            </button>
        </Form>
        </div>
    </section>
  )
}

export default Create