import React from "react";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
function NavIcons({typeIcons, count}) {
    return(
        <div className="nav-icons-style">
            {
                typeIcons === "like" ? <AiOutlineHeart size={`1.3rem`}/> : typeIcons === "user" ? <AiOutlineUser size={`1.3rem`}/> : typeIcons === "cart" ? <AiOutlineShoppingCart size={`1.3rem`}/> : ""
            }  
            {
                count ? <span>{count}</span> : ""
            }
        </div>
    )
}

export default NavIcons;