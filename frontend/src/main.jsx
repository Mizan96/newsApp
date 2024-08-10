import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewsDetailsScreen from './screen/NewsDetailsScreen.jsx'
import {Provider}  from 'react-redux';
import store from './store/store.jsx'

const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path: '/news/:id', element: <NewsDetailsScreen />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><RouterProvider router={router} /></Provider>
  </React.StrictMode>,
)
