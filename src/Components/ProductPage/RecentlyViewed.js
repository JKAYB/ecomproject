import React from "react";
import "./RecentlyViewed.css";
import {useNavigate } from "react-router-dom";
import { useStateContext } from "../../Context/StateContext";

function RecentlyViewed(props) {
  const { featureProducts } = useStateContext();
  const navigate = useNavigate();


  const shopnow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="recents-main">
      <h1 className="recents-head">{props.head}</h1>
      <div className="recent-products">
        {featureProducts.map((curElem) => {
          return (
            <div  onClick={() => shopnow(curElem.id)} key={curElem.id} className="product-container">
              <img
                className="product"
                src={curElem.image && curElem.image}
                alt="product-img"
              ></img>
              <p className="recent-details-detail">{curElem.company}</p>
              <h2 className="recent-details">{curElem.name}</h2>
              <p className="recent-details">₹{curElem.price}</p>
              <div className="color-selection-recents">
                {curElem.colors &&
                  curElem.colors.map((color, id) => (
                    <div
                      style={{ backgroundColor: color }}
                      key={`color-${id}`}
                      className="color-recents"
                    ></div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentlyViewed;
