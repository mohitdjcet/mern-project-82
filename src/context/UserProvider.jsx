import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
    const user = "Mohit Kumar";
    const [isLogin, setIsLogin] = useState(false);

    return(
        <UserContext.Provider value={[isLogin,setIsLogin,user]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;