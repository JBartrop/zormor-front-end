import { CameraIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useFetcher } from 'react-router-dom'

function Create() {

    const fetcher = useFetcher();

  return (
    <section className="create">
        <div className="heading">
        <h1>create</h1>
        </div>
        <div className="content">
        <fetcher.Form method="POST" className="forms">
            <input type="hidden" _action="create" />
            <input type="text" placeholder="name" />
            <input type="text" placeholder="description" />
            <input type="text" placeholder="location" />
            <input type="time" placeholder="time" />
            <label htmlFor="file-upload"> <CameraIcon width={20} /> </label>
            <input type="file" name="file-upload" placeholder="image" />
            <button type="submit">create</button>
        </fetcher.Form>
        </div>
    </section>
  )
}

export default Create