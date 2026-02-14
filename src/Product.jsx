export default function Product(){
    const setCount = () =>{
        document.cookie = "token=demo123; path=/; max-age=3600"; //1Hrs
        alert("Cookie set with token");
    }

    const readCount = () =>{
        alert("Token from cookie: " + document.cookie);
    }
    return(
        <div>
            <h1>Product Cookies Component</h1>
            <button onClick={setCount}> Set Token Cookie</button>
            <button onClick={readCount}>Read Token Cookie</button>
            <p>Cookie set krne ke baad, tab close kro, data clear nhi hoga</p>
        </div>
    )
}