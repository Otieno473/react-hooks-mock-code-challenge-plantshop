import React, { useState } from "react";

function NewPlantForm({addPlant}) {
  const[fd, sfd]=useState({
    name:"",
    image:"",
    price:0,
  })
  function onSubmit (e){
    e.preventDefault()
    fetch(" http://localhost:6001/plants",{
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(fd)
    })
    .then(r=>r.json())
    .then((np)=> {
      addPlant(np)
      console.log(fd)
      sfd({name :"",
    image :"",
  price :0, 
 })
 })
}
function handleChange (e){
  sfd({...fd,[e.target.name] : e.target.value})
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
