import React from 'react';
import { AiTwotoneShopping } from "react-icons/ai";
function MenuBtn({icons, btnText}){
    return(
        <button className={`menu-btn-style ${icons === "iconsShop" ? "btn-color-yellow" : icons === "menuNotIcons" ? "btn-color-secondary" : ""}`}>
           <span>{btnText}</span>
           {
             icons === "iconsShop" ? <AiTwotoneShopping size={`1.25rem`}/> : ""
           }
           
        </button>
    )
}

export default MenuBtn