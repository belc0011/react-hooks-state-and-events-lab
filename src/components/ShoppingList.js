import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items, color }) {
  const backgroundColor = color;
  let textColor
  
  if (backgroundColor === 'white') {
    textColor = "black"
  }
  else textColor = "white"

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleOnChange(event) {
    setSelectedCategory(event.target.value)
  }

  function filterItems() {
    if (selectedCategory !== "All") {
      return items.filter((item) => item.category === selectedCategory)
    }
    else return items
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} style={{color: textColor}} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
