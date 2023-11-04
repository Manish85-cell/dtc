import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
//import App from './App.jsx'
import './index.css';
import Home from './component/Home';
import Bus from './component/Bus';
import Layout from './component/Layout';
import Login from './component/Login';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='bus' element={<Bus/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>   
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
