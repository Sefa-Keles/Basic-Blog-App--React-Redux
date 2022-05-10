import React from 'react'
import { useSelector } from 'react-redux'
import BlogListItem from './BlogListItem'

 const BlogList = () => {
     //Function that brings state by establishing a relationship between Redux and component
     const blogCollection = useSelector((state) => {
        return {
            blogs:state.blogs
        }
     });
  return (
      <ul>
        {/*send the resulting blog info to BlogListItem component as props */}
        {
            blogCollection.blogs.map(blog => {
                return <BlogListItem key={blog.id} {...blog}/>
            })
        }
    </ul>
  )
}


export default BlogList