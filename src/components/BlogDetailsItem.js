import React from 'react'


//Component showing the details of the selected blog object
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