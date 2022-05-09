import React from 'react'
import { useSelector } from 'react-redux'
import BlogListItem from './BlogListItem'

 const BlogList = () => {
     const blogCollection = useSelector((state) => {
        return {
            blogs:state.blogs
        }
     });
  return (
    <ul>
        {
            blogCollection.blogs.map(blog => {
                return <BlogListItem key={blog.id} {...blog}/>
            })
        }
    </ul>
  )
}


export default BlogList