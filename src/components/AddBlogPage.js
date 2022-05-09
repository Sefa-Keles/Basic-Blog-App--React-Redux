import React from 'react'
import BlogForm from './BlogForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addBlogAction} from '../actions/blogAction'


const AddBlogPage = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate()
    return (
      <div>
          <h1> Add Blog</h1>
          <BlogForm formSubmit={(blog) => {
            dispatch(addBlogAction(blog))    
            navigation('/blogs')  
          }}/>
      </div>
    )
}
export default AddBlogPage
