import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogDetailsItem from './BlogDetailsItem';


const BlogDetailsPage = () => {
  const params = useParams();
  const blogCollection = useSelector((state) => {
    return {
      blog: state.blogs.find((blog) => {
        return blog.id === params.id
      })
    }  
  });
    return (
      <BlogDetailsItem {...blogCollection.blog}/>
  )
}

export default BlogDetailsPage