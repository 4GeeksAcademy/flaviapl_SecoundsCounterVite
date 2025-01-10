import React from "react";
import Digit from "./digit";

const SecondsCounter = (props) => {
    const one= Math.floor(props.seconds/100000 % 10)
    const two=Math.floor(props.seconds/10000 % 10)
    const three=Math.floor(props.seconds/1000 % 10) 
    const four=Math.floor(props.seconds/100 % 10) 
    const five=Math.floor(props.seconds/10 % 10)
    const six=Math.floor(props.seconds/1 % 10)


    return (
        <>
            <div className="d-flex gap-3 justify-content-center" style={{backgroundColor: "black", marginTop:"15px", marginLeft: "15px", marginRight: "15px"}}>
                <span style={{backgroundColor: "#101010", color: "white", fontSize: "100px", padding:"10px", marginTop: "14px", marginBottom: "14px" }}><i className="fa-regular fa-clock"></i></span>
                <Digit number= {one}/>
                <Digit number= {two}/>
                <Digit number= {three}/>
                <Digit number= {four}/>
                <Digit number= {five}/>
                <Digit number= {six}/>
            </div>
            <div>
                <button >STOP</button>
                <button >RESTART</button>
                <button >RESUME</button>
            </div>

        </>

    )
}

export default SecondsCounter 