import { useParams } from "react-router";

//user/2
function Users(){
    const {id} = useParams();
    return(
        <div>
            <h1>Welcome to the Users Page</h1>
            <p> User ID: {id} </p>
        </div>
    );
}

export default Users;