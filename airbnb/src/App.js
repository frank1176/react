import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data1 from './components/data.js'
import "../src/css/Card.css"

export default function App(){
  // console.log(data1);
  const cards =data1.map(item => {
    return(
      <Card 
          key={item.id}

          {...item}
          
          // item={item}

          // img={item.img}
          // rating={item.stats.rating}
          // reviewcount={item.stats.reviewcount}
          // country={item.country}
          // title={item.title}
          // price={item.price}
          // location={item.location}
          // openSports={item.openSport}
      />
    )
  })

  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards} 
      </section>
    </div>
  )
}
