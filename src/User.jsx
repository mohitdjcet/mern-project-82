export default function User(){

    const saveTemp = () =>{
        sessionStorage.setItem("step","2");
        alert("Step saved in session storage");
    }

    const readTeam = () =>{
        alert("Current Step: " + sessionStorage.getItem("step"));
    }
    return(
        <div>
            <h1>User Session Component</h1>
            <button onClick={saveTemp}> Save Step</button>
            <button onClick={readTeam}>Read step</button>
            <p>Tab close kro, data clear hoga</p>
        </div>
    )
}