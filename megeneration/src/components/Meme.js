import React from "react";
import data1 from "./memedata"
export default function Meme(){
   
    const [memeImage,setMemeImage] =React.useState("")

    function getMemeimage(){
        const memesArray =data1.data.memes
        // const randomNumber = Math.floor(Math.rondom() * memesArray.length)
        const randomNumber = Math.floor(Math.random() * 2);
        const url =memesArray[randomNumber].url
        console.log(url);
        setMemeImage(memesArray[randomNumber].url)
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
            <img src={memeImage} className="meme-image"/>
        </main>
    )

}