import { Link, Outlet } from "react-router";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <br/>
        <Link to="/products?category=react&page=1">Products</Link><br/>
        <Link to="/login">Login</Link><br/>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr/>
      <Outlet />
    </div>
  );
}
