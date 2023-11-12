import React, { useState } from "react";

function PlantCard({p}) {
  const [isClicked, setIsClicked]=useState(true)
  function handleClick (){
    setIsClicked(!isClicked)
  }
  return (
    <li className="card">
      <img src={p.image} alt={p.name} />
      <h4>{p.name}</h4>
      <p>Price: {p.price}</p>
      {isClicked ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick ={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
