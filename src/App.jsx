import React from "react";
import "./App.css";
import { createBrowserRouter, Link, Navigate, Outlet } from "react-router";
import Home from './Home.jsx'
import About from './About.jsx'
import Users from './Users.jsx'
import NotFound from "./NotFound.jsx";

// Define the router configuration
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout component
    children:[
      {path:'', element: <Home />}, // /
      {path: 'about', element: <About />}, // /about
      {path: 'users/:id', element: <Users />}, // /users Dynamic route with user ID
      {path: 'abc', element: <Navigate to='/' replace />},
      {path: '*', element: <NotFound />} // Catch-all route for 404 Not Found
    ]
  }
])
//Layout component
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <br />
        <br />
        <Link to="/about">About</Link>
        <br />
        <br />
        <Link to="/users/1">Users 1</Link>
        <br />
        <br />
        <Link to="/users/2">Users 2</Link>
        <br />
        <br />
        <Link to="/users/3">Users 3</Link>
      </nav>

      {/* <hr /> */}
      <Outlet />
    </div>
  );
}

export default App;
