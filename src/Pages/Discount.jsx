import React from "react";
import OutlineBtn from "../components/OutlineBtn";
function Discount(){
    return(
        <div className="discount-box">
           <div className="discount-bg-color">
            <div className="discount-container">
                <div className="discount-text">
                    <h3>Sneakers Never Run Out of Style</h3>
                     <h3>Get 50% Off Sitewide</h3>
                </div>
                <div className="discount-btn">
                   <OutlineBtn type={"white"}/>
                </div>
            </div>   
           </div>
        </div>
    )
}

export default Discount;