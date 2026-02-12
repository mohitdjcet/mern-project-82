import { useNavigate } from "react-router";
import { logout } from "../utils/auth.js";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return(
        <div>
            <h1>Dashboard (Protected)</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}
export default Dashboard;