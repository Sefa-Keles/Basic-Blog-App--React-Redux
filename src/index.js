import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import "./App.css"
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { addBlogAction, removeBlogAction,editBlogAction } from './actions/blogAction';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState())
})

const blog1 = store.dispatch(addBlogAction({title:"blog title 1", description: "blog description 1", dateAdded: "blog dateAdded 1"}))
const blog2 = store.dispatch(addBlogAction({title:"blog title 2", description: "blog description 2", dateAdded: "blog dateAdded 2"}))

store.dispatch(removeBlogAction({id: blog1.blog.id}))
store.dispatch(editBlogAction(blog2.blog.id, {title: "blog 2 title", description: "blog description 2", dateAdded: "blog 2 dateAdded"}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
