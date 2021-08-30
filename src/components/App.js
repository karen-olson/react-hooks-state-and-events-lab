import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable to toggle dark/light modes
  // Add an event listener to the dark mode button to make it work
  // Trial: Declare a CB function handleDarkMode and return the value of !isDark
  // Error: Nothing happened - need to call the setter function
  // Trial: Call the setter function from w/in handleDarkMode and pass in !isDark
  // Better trial: Use an arrow function in the JSX to call setIsDark(!isDark)
  // Success;

  const [isDark, setIsDark] = useState(false);

  const appClass = isDark ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setIsDark(!isDark)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
