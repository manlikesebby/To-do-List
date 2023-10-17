import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListItem from "./components/Listitems";




export default App;
function App() {
  const [item, setItem] = useState("0");
  const [items, setItems] = useState(["An Item", "second item"]);
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const additem = () => {
    console.log("item added");
    setItems([...items, item]);

    
    document.querySelector("input").value =""
  };

  const deleteitem =(itemId)=>{
    console.log(itemId);
   
    const remainingItems = items.filter((item, id)=>{
      return id !=itemId;
    });

    console.log(remainingItems);

    setItems(remainingItems)
   };
 
   
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="type in something"
          onChange={handleChange}
        />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, i)=> {
            return <ListItem item={item} i={i} deleteItem={deleteitem}/>;
          })}
          
        </ul>
      </div>
    </div>
  );
}



