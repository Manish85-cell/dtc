import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
//import App from './App.jsx'
import './index.css';
import Home from './component/Home';
import Bus from './component/Bus';
import Layout from './component/Layout';
//import Login from './component/Login';
import Routes from './component/Routes';
import Loginkbaad from './component/Loginkbaad';
import Busstand from './component/Busstand';
import Eplogin from './component/Eplogin';
import Clogin from './component/Clogin';
import Dlogin from './component/Dlogin';
import Successlogin from './component/Successlogin';
import Adminlogin from './component/Adminlogin';
import Successadminlogin from './component/Successadminlogin';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='bus' element={<Eplogin/>}/>
      <Route path='routes' element={<Routes/>}/>
      <Route path='slogin' element={<Loginkbaad/>}/>
      <Route path='busstand' element={<Busstand/>}/>
      <Route path='clogin' element={<Clogin/>}/>
      <Route path='dlogin' element={<Dlogin/>}/>
      <Route path='sucesslogin/:param1/:param2/:param3' element={<Successlogin/>}/>
      <Route path='adminlogin' element={<Adminlogin/>}/>
      <Route path='sucessadminlogin' element={<Successadminlogin/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)