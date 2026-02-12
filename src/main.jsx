import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //Layout
    children: [
      { index: true, element: <Home /> },
      { path:"products", element: <Products /> },
      { path: "login", element: <Login /> },
      {
        path: "dashboard",
        element:(
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
