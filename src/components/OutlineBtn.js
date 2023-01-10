import React from "react";

function OutlineBtn({type}){
    return(
        <button className={`outline-btn ${type === "black" ? "outline-black-btn" : type === "white" ? "outline-white-btn" : ""}`}>
           Explore Other Products
        </button>
    )
}

export default OutlineBtn;