function Students({name, course}){
    console.log(name);
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Course: {course}</p>
        </div>
    )
}

export default Students;