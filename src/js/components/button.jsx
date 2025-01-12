import React from "react"

const Button = (props) => {
let stopButton = "STOP2"

    return (
        <button style={{marginTop: "50px", backgroundColor: props.backgroundCol, marginRight: "15px", width:"120px", height:"70px", fontWeight:"bold", borderColor:"#aaa #000 #000 #aaa", borderRadius: "10px", cursor:"pointer" }} onClick={props.onClick}>{props.label}</button>
    )
}

export default Button