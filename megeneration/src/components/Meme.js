import React from "react";
import data1 from "./memedata"
export default function Meme(){
   
    // const [memeImage,setMemeImage] =React.useState("https://www.w3schools.com/images/w3schools_green.jpg")
    const [meme, setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://www.w3schools.com/images/w3schools_green.jpg"
    })
    const [allMemeImages,setAllMemeImages]=React.useState(data1)

    function getMemeimage(){
        const memesArray =allMemeImages.data.memes
        // const randomNumber = Math.floor(Math.rondom() * memesArray.length)
        const randomNumber = Math.floor(Math.random() * 2);
        const url =memesArray[randomNumber].url
        // console.log(url);
        setMeme(preMeme =>({
            ...preMeme,randomImage:url
        }))
    }
    return(
        <main>
            <div className="form">
                <input
                 type="text" 
                 className="form--input" 
                 placeholder="Top text">

                </input>
                <input
                 type="text" 
                 className="form--input" 
                 placeholder="Bottom text">
                </input>
                <button
                 className="form--button"
                 onClick={getMemeimage}>
                    Get a new meme image
                </button>
            </div>
            <img src={meme.randomImage} className="meme-image"/>
        </main>
    )

}