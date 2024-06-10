import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Items from './components/Items';
import Content from './components/Content';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/Todo",
    element: <TodoList/>,
  },
  {
    path:"/Items",
    element:<Items/>
  },{
    path:"/content",
    element:<Content/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
