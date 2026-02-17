import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./pages/Home.jsx";
// import Dashboard from "./pages/Dasboard.jsx";
// import Settings from "./pages/Settings.jsx";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const DashboardPage = lazy(() => import("./pages/Dasboard.jsx"));
const SettingsPage = lazy(() => import("./pages/Settings.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
