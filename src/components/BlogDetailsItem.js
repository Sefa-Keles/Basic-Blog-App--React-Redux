import React from 'react'

const BlogDetailsItem = ({id,title,description}) => {
  return (
    <div>
        <p>Blog ID: {id}</p>
        <p>Blog TITLE: {title}</p>
        <p>Blog DESCRIPTION: {description}</p>
    </div>
  )
}

export default BlogDetailsItem