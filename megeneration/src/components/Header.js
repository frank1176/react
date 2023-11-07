import React from "react"


export default function Header(){
    const img = require(`../assest/Logo.png`)
    // const img = require(`../assest/${props.img}`);
    return (
        <header className="header">
            <img src={img} alt="logo" className="header--image"/>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course -Project 3</h4>
        </header>
    )
}