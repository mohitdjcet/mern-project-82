import React from "react";

function App() {
  const [items, setItems] = React.useState(["React", "Vue", "Angular"]);

  const removeItem = (index) =>{
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={()=> removeItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default App;
