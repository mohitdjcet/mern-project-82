import { useContext } from 'react';
import Dashboard from './Dashboard.jsx';
import UserContext from './context/UserContext.js';

function App(){
  const { isLogin, setIsLogin } = useContext(UserContext);
  return (
    <div>
      <button onClick={()=> setIsLogin(!isLogin)}>{isLogin ? "Logout" : "Login"}</button>
      <h2>{isLogin ? "User is logged in" : "User is logged out"}</h2>
      <h1>My App</h1>
      <Dashboard />
    </div>
  )
}

export default App;