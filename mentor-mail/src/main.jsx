import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoList from './components/TodoList.jsx'
import Login from './components/Login.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/TodoList",
    element:<TodoList/>
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
