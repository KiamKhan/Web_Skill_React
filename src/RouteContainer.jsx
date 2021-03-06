import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import About from './Pages/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Post from './Pages/Post';
import Product from './Pages/Product';

export default function RouteContainer() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:id' element={<Post/>}/>
        </Routes>
    </BrowserRouter>
  )
}
