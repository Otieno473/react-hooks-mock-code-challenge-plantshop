import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ps}) {
  return (
    <ul className="cards">{ps.map((p)=>{
      return <PlantCard key={p.id} p={p}/>
    }
    )}
    </ul>
  );
}

export default PlantList;
