import React from "react"

export default function Joke(props) {
    const [isShow, setIsShow]=React.useState(false)


    function toggle(){
        setIsShow(prev=>!prev)
    }
    const toggle2 = () =>{
        setIsShow(prev=>!prev)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* {isShow ? <p>{props.punchline}</p> : ""} */}
            {isShow && <p>{props.punchline}</p>}
            <button onClick={toggle2}>{isShow ? "Hide":"Show"} punchline</button>
            <hr />
            
        </div>
    )
}