import React from 'react'

const BlogDetailsPage = ({match}) => {
  return (
    <div>Blog Details Page : {match.params.id}</div>
  )
}

export default BlogDetailsPage