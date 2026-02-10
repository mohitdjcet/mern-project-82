import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {router} from './App.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />, // Layout component
//     children:[
//       {index: true, element: <Home />}, // /
//       {path: 'about', element: <About />}, // /about
//       {path: 'users', element: <Users />} // /users
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
