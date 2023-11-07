import React from "react";
import Image from '../assest/react-icon.png'
import '../index.css'

export default function Navbar(){
    // return <h1>Navbar component</h1>
    return(
        
        <nav>
            <img src={Image} alt="description"/>
            <h3>ReactFacts</h3>
            <h4>React - P1</h4>
        </nav>
    )
}
