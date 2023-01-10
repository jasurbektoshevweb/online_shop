import React from "react";
import NavIcons from "../components/NavIcons";
import Form from "../components/Form";
function Navbars() {
    return(
        <div className="nav-box">
            <div className="nav-logo">
                <h3>Jasurbek</h3>
            </div>
            <div className="nav-form">
                 <Form/>
            </div>
            <div className="nav-Icons">
                 <NavIcons typeIcons="like" count={`2`} />
                 <NavIcons typeIcons="user" />
                 <NavIcons typeIcons="cart" count={`0`} />
            </div>
        </div>
    )
}

export default Navbars;