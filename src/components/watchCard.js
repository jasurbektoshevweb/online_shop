import React from 'react';
import Soat1 from './../Assets/1.jpg'
function watchCard({imgSrc, name, price}) {
    return(
        <div className='watchCard-box'>
            <img src={imgSrc}/>
            <h4>{name}</h4>
            <div className='price-block'>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default watchCard;