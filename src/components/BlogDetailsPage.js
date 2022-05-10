import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogDetailsItem from './BlogDetailsItem';

//Blog page showing all blogs
const BlogDetailsPage = () => {
  //Parameter from url
  const params = useParams();
  //component's function that returns state from redux
  const blogCollection = useSelector((state) => {
    return {
      //Returned blog object if the id of the blogs from the state and the parameter from the url are equal
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