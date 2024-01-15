import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkMode, setToggleMode] = useState(true)
  
  const appClass = false ? "App dark" : "App light"
  function handleClick() {
    setToggleMode(() => !darkMode)
  }
    const backgroundColor = darkMode ? "white" : "black"
    const textColor = darkMode ? "black" : "white"
  return (
    <div className={darkMode ? "App light" : "App dark"}>
      <header>
        <h2 style={{color: textColor}}>Shopster</h2>
        <button onClick={handleClick}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} color={backgroundColor}/>
    </div>
  );
}

export default App;
