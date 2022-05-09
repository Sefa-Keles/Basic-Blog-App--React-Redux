import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
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
store.dispatch(addBlogAction({title:"blog title 3", description: "blog description 3", dateAdded: "blog dateAdded 3"}))
store.dispatch(removeBlogAction({id: blog1.blog.id}))
store.dispatch(editBlogAction(blog2.blog.id, {title: "updated blog 2 title", description: "updated blog description 2", dateAdded: " updated blog 2 dateAdded"}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
