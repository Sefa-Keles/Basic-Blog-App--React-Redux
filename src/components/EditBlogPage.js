import React from 'react'
import BlogForm from './BlogForm'
import { useDispatch, useSelector } from 'react-redux'
import { editBlogAction, removeBlogAction } from '../actions/blogAction'
import { useParams, useNavigate } from 'react-router-dom'

const EditBlogPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const blogCollection = useSelector((state)=> {
        return {
            blog: state.blogs.find((b)=> {
                return b.id === params.id
            })
        }
    })
  return (
    <div>
        <h1>Edit Blog Page</h1>
        <BlogForm 
        blog={blogCollection.blog}
        formSubmit={(blog) => {
            dispatch(editBlogAction(blogCollection.blog.id,blog));
            navigate('/blogs');
        }}/>
        <button onClick={() => {
            dispatch(removeBlogAction({id:blogCollection.blog.id}));
            navigate('/blogs')
            }}>Delete
        </button>
    </div>
  )
}

export default EditBlogPage;