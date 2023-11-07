import React from "react"
import icon from "../assest/Airbnb.png"
import "../css/Navbar.css"
export default function Navbar(){
    return(
        <nav>
            <img src={icon} alt="icon" className="nav--logo"/>
        </nav>
    )
}