import { useNavigate } from "react-router";
import { login } from "../utils/auth.js";

function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
        login();
        navigate("/dashboard");
    }
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={handleClick}>
                Login
            </button>
        </div>
    )
}
export default Login;