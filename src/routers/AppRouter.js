import React from 'react'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import AddBlogPage from '../components/AddBlogPage'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import EditBlogPage from '../components/EditBlogPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Routes>
                <Route path = '/' element={<HomePage/>}/>
                <Route path = '/blogs' element={<BlogListPage/>}/>
                <Route path = '/create' element={<AddBlogPage/>}/>
                <Route path = '/edit/:id' element={<EditBlogPage/>}/>
                <Route path = '/blogs/:id' element={<BlogDetailsPage/>}/>
                <Route path = '/contact' element={<ContactPage/>}/>
                <Route element={<NotFoundPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter
