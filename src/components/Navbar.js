import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../images/logo.png";

function Navbar(){
    const [ click, setClick] = useState(false);

    const handleClick =() =>setClick(!click);
    return(
        <>
        
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img className="imageLogo" src={logo} alt="/"></img>
                    </NavLink>

                    <ul className={click ? "nav-menu active":"nav-menu"}>
                        <li className="nav-iteemm">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                                 HOME
                            </NavLink>
                        </li>
                        <li className="nav-iteemm">
                            <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                                 ABOUT US
                            </NavLink>
                        </li>
                        
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times":"fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        <div className="lineNavbar1"></div>
        </>
    )
}

export default Navbar