import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Component/Home/home.jsx'
import Moviedetails from './Component/moviedetails/moviedetails.jsx'
import PageNotfount from './Component/pagenotfount/pageNotfount.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:imdbID" element={<Moviedetails/>} />
      <Route Component={<PageNotfount/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
