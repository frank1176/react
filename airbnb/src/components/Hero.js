import React from "react";
import grpphoto from "../assest/Photogrp.png"
import '../css/Hero.css'
export default function Hero(){
    return(
        // <h1>Hero components</h1>
        <section className="hero">
            <img src={grpphoto} alt="main" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}