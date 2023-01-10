import React from 'react';
import MenuBtn from '../components/MenuBtn';
function Menu(){
    return(
        <div className='menu-style'>
             <div className="menu-container">
                 <h1>get the new iphone 12 <br /> pro</h1>
                 <p>A transformative triple-camera system that adds tons of capability without complexity</p>
                 <div className="menu-btn-box">
                    <MenuBtn icons={`iconsShop`} btnText={`Buy Now`}/>
                    <MenuBtn icons={`menuNotIcons`} btnText={`With $599 with trade-in`}/>
                 </div>
             </div>
        </div>
    )
}

export default Menu;