import React, { useState } from "react";
import './Form.css';
import {db} from "./Firebase.js";
import {
    collection,
    addDoc,
  } from "firebase/firestore";

export function Form  () {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const usersCollectionRef = collection(db, "informations");
    
    //   const { name, url } = state;
      const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(usersCollectionRef, { name: name, url:url })
        .then(()=>{
        alert("Informations has been submitted");
        })
        setName("");
        setUrl("");
      };

    return(
        <div className="div-form">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Input information:</h1>

                <label>Name:</label>
                <input 
                placeholder="Name" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />

                <label>Image URL:</label>
                <input 
                placeholder="URL" 
                value={url}
                onChange={(e)=> setUrl(e.target.value)}
                />

                <button type="submit" >ADD</button>
            </form>
        </div>
    ) 
}
