import React from "react"

export default function App() {
  const [count,setCount] =React.useState(0)

  function subtract(){
    // setCount(count -1)

    //better practices
    // setCount(function(count){
    //   return count -1
    // })
    
    //best
    //another way var diff from above also work
    //most updated correct version
    //call back function
    setCount(oldValue => oldValue -1)

  }
  function add(){
    // setCount(count +1)

    setCount(previousvalue => previousvalue +1 )
  }

  return (
    <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
    </div>
   )
}