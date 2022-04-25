import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import {addBlogAction} from '../actions/blogAction'


const AddBlogPage = (props) => {
    return (
      <div>
          <h1> Add Blog</h1>
          <BlogForm formSubmit={(blog) => {
            props.dispatch(addBlogAction(blog))    
            props.history.push('/blogs')  
          }}/>
      </div>
    )
}
export default connect()(AddBlogPage)
