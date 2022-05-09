import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({id, title, description}) => {
  return (
    <>
        <li>
            <strong>Title</strong>:{title} - <strong>Description</strong>:{description}<br/> <Link to={`/blogs/${id}`}>Details</Link> - 
            <Link to={`/edit/${id}`}> Edit</Link><hr/>
        </li>
    </>
  )
}

export default BlogListItem