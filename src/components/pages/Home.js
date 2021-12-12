import React, { useState, useEffect } from "react";
import './Home.css';
import {db} from "./Firebase.js";
import { getDocs,collection } from "firebase/firestore";
import {Link} from "react-router-dom";

export const Home = () => {

    const [information, setInformation] = useState([]);
    const informationCollectionRef = collection(db, "informations");


    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(informationCollectionRef);
          setInformation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, [informationCollectionRef]);

    
    return (
        <div className="home">
            <div className="home-btn">
                <Link exact to="/form" activeClassName="active"  >
                    <button  className="btn-add">Add new city</button>
                </Link>
            </div>
            <div className="home-lists" >
            {information.map((info) => {
                return (
                <div className="home-list">
                    {" "}
                    <h1>Name: {info.name}</h1>
                    <h1>
                        <img className="photo1" src={info.url} alt="/"></img>
                    </h1>
                </div>
                );
            })}
            </div>
        </div>
    )  
}
