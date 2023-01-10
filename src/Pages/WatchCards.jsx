import React from "react";
import WatchComponents from "../components/watchCard";
import { dataWatch } from "../store/store";
import OutlineBtn from "../components/OutlineBtn";
function WatchCards() {
  console.log("Datas : ", dataWatch);
  return (
    <div className="watch-block-style">
      <div className="wach-body">
        <h4>Explore Avesome Products</h4>
        <h3>RECOMMENDED FOR YOU</h3>
      </div>
      <div className="cards-container">
        <div className="row">
        {dataWatch &&
          dataWatch.map((item, index) => {
            return (
                <div className="col-3" key={index}>
                  <WatchComponents
                  imgSrc={item?.img}
                  price={item?.price}
                  name={item?.watchName}
                  />
                </div>
            );
          })}
            
        </div>
        
      </div>
      <div className="watch-btn-box">
        <OutlineBtn type="black"/>
      </div>
    </div>
  );
}

export default WatchCards;
