import React from 'react'
import List from '../list'
import Postcontainer from './post.container'


function Post(props) {
    function createpost(list){
        return(
            <Postcontainer
            id={list.id}
            key={list.id}
            image={list.image}
            name={list.name}
            description={list.description}
            location={list.location}
            openhours={list.openhours}
            />
        )
    }

  return (
    <div className="post">
    <div className="content">
        {List.map(createpost)}
    </div>
    </div>
  )
}

export default Post

//name
//description
//location
//time
//image