import React from "react";

import '../css/Card.css'
import star from '../assest/Star 1.png'
export default function Card(props){
    //using props object cannot direct put path inside img src
    const img = require(`../assest/${props.img}`);

    let badgetext
    if(props.openSports === 0 ){
        badgetext="SOLD OUT"
    }else if(props.location === "Online" ){
        badgetext="ONLINE"
    }
    return(
        <div className="card">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            {/* <img src={Image1} alt="image1" className="card--image"/> */}
            <img src={img} alt="image1" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span>{props.stats.reviewcount} .</span>
                <span>{props.country}</span>
            </div> 
            <p className="card--title">{props.title}</p>
            <p className="card-price"><span className="Bold">From ${props.price}</span>/ person
            </p>
            
        </div>
    )
}