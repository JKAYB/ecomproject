import React from "react";
import "./Results.css";
import { useStateContext } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Results() {
  const navigate = useNavigate();

  const { search } = useStateContext();


  const shopnow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Navbar />
      <h2 className="result-head">Search Results ...</h2>
      <div className="products-list">
        {search.map((item) => {
          return (
            <span
              className="product-list-content"
              key={item.id}
              onClick={() => shopnow(item.id)}
            >
              <div>
                <img className="product-image" src={item.image} alt="s"></img>
                <div className="product-details-desc">
                  <p className="product-details-desc-name">{item.name}</p>
                  <p className="product-details-desc-description">
                    {item.company}
                  </p>
                  <br />
                  <span className="newPrice">₹{item.price}</span>{" "}
                  <span className="strike">₹{item.price + item.price / 5}</span>
                </div>
              </div>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Results;
