import React, { useState } from "react";

function Item({ name, category, style }) {
  const [inCart, setInCart] = useState(true)
  function handleClick() {
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={inCart ? "" : "in-cart"} style={style}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
