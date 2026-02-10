import { useNavigate } from "react-router";

export default function NotFound(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/about');
    }
    return(
        <div>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button onClick={handleLogin}>Home Page</button>
        </div>
    );
}