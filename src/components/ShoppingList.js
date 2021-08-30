import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Use the useState hook to create a state variable called selectedCategory for
  // keeping track of the selected value from this <select> element.
  // When the value of the <select> element is changed, update state.

  // Trial: Call useState to create the variable, setter fn, and set initial value to "All" (???)
  //        Add an event listener to the select element
  //        Call setSelectedCategory onChange
  // Success: When the value of the dropdown menu is changed, selectedCategory is set to the selection

  const [selectedCategory, setSelectedCategory] = useState("All");

  function setCategory(e) {
    setSelectedCategory(e.target.value);
  }

  // You should also use the selectedCategory variable to determine which items to
  // display in the shopping list. You'll need some way of filtering the array of
  // items based on the selectedCategory.
  // Trial: Use selectedCategory to conditionally render the DOM elements - use .filter (not .map bc we're not transforming items) with conditional
  //        Define a variable to hold a new array
  //        Where are all of the current items being held? items
  //        Do I need another state variable to hold the value of items?
  //            No because 1) it's a prop and 2) you can compute it using selectedCategory and items array
  //        When fitering, compare each item's category to the selected category. If matching, they'll be included in the new array.
  //        Use itemsToDisplay when rendering the iem list
  // Success: Items are conditionally rendered based on the state of selectedCategory
  // Error: Doesn't display all items when initially rendered.
  // Trial: Add conditional logic in itemsToDisplay filter call
  //        If the selectedCategory is All, every item automatically matches the filter's condition
  //        Else, see if the item's category matches the selected category
  // Success: The items all display when the category "All" is selected

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={setCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
