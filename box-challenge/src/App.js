import React from "react"
import boxes from "./boxes"
import Box from "./components/box"
export default function App(props) {
  const [squares, setSquares]=React.useState(boxes)
  

  function toggle(id){
    setSquares(prev =>{
      return prev.map((square)=>{
        return square.id === id ? {...square, on : !square.on} :square
      })
    })
  }
  
  const squaresE=squares.map(squares =>(
    <Box 
      key={squares.id} 
      id={squares.id} 
      on={squares.on}
      handleClick={toggle}
    />
  ))
    return (
      <main>
        {squaresE}
      </main>
    )
}