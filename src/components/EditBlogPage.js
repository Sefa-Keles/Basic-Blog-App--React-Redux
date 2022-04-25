import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { editBlogAction, removeBlogAction } from '../actions/blogAction'

const EditBlogPage = (props) => {
  return (
    <div>
        <h1>Edit Blog Page</h1>
        <BlogForm 
        blog={props.blog}
        formSubmit={(blog) => {
            props.dispatch(editBlogAction(props.blog.id,blog));
            props.history.push('/blogs');
        }}/>
        <button onClick={() => {
            props.dispatch(removeBlogAction({id:props.blog.id}));
            props.history.push('/blogs')
            }}>Delete
        </button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((b)=> {
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage);