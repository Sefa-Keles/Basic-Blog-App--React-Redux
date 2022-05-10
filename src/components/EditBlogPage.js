import React from 'react'
import BlogForm from './BlogForm'
import { useDispatch, useSelector } from 'react-redux'
import { editBlogAction, removeBlogAction } from '../actions/blogAction'
import { useParams, useNavigate } from 'react-router-dom'

//Editting element from Form Component
const EditBlogPage = () => {
    //Parameter from url
    const params = useParams();
    //The dispatch method called to dispatch the Action
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const blogCollection = useSelector((state)=> {
        //Returned blog object if the id of the blogs from the state and the parameter from the url are equal
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
        //formSubmit props brings the blog object from the BlogForm component to the blog parameter
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