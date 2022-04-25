import React from 'react'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import AddBlogPage from '../components/AddBlogPage'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import EditBlogPage from '../components/EditBlogPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route exact path = '/' component={HomePage}/>
                <Route exact path = '/blogs' component={BlogListPage}/>
                <Route exact path = '/create' component={AddBlogPage}/>
                <Route exact path = '/edit/:id' component={EditBlogPage}/>
                <Route path = '/blogs/:id' component={BlogDetailsPage}/>
                <Route path = '/contact' component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter
