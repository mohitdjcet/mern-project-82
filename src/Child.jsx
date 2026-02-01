// function Child({showMsg}) {
//   return <button onClick={showMsg}>Click Me</button>
// }

// export default Child;


function Child({getData}) {
  return (
    <button onClick={()=> getData("Hello Parent")}>Send Data</button>
  )
}

export default Child;