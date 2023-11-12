import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[pd,spd]=useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then((p)=>spd(p))
  },[])
  function addPlant (newPlant){
    spd([...pd, newPlant])
  }
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search />
      <PlantList ps={pd}/>
    </main>
  );
}

export default PlantPage;
