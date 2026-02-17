import { Link, Outlet } from "react-router";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/dashboard">Dashboard</Link>{" | "}
        <Link to="/settings">Settings</Link>{" | "}
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}