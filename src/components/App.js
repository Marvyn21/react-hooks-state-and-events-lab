import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkmode, setDarkMode] = useState(false);

  const appClass = darkmode ? "App dark" : "App light"

  const handleDarkModeToggle = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
