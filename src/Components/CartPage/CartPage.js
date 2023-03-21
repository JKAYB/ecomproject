import React, { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import RecentlyViewed from "../ProductPage/RecentlyViewed";
import remove from "../../Icon/remove.png";
import { useStateContext } from "../../Context/StateContext";
import video from "../../Icon/loading.gif";

function CartPage() {
  const {
    isLoading,
    qty,
    removeItem,
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    resetCart
  } = useStateContext();

  const { id } = useParams();

  const [showWarning, setShowWarning] = useState(false);
  const [price, setPrice] = useState(0);

  function handleClick() {
    setShowWarning(true);

    setTimeout(() => {
      setShowWarning(false);
    }, 1000);
  }

  const navigate = useNavigate();
  const checkout = () => {
    resetCart();
    navigate("/orderplaced");
  };

  const increaseQty = (data) => {
    increaseCartItem(data);
  };

  const decreaseQuantity = (data) => {
    decreaseCartItem(data);
  };

  useEffect(() => {
    let price = 0;
    // eslint-disable-next-line array-callback-return
    cartItems.map((item) => {
      price = price + item.product.quantity * item.product.price;
    });
    setPrice(price);
  }, [cartItems]);

  // eslint-disable-next-line eqeqeq
  if (isLoading && cartItems.length == 0) {
    return (
      <>
        <div className="loading">
          <img className="loadingImg" src={video} alt="loading.gif"></img>
        </div>
        <div className="loadingScreen"> Page is Loading ..... </div>
      </>
    );
  }

  return (
    <div className="page">
      <Navbar />
      <div className="cartPage-content">
        {id && qty && cartItems.length > 0 ? (
          <div className="cart-items-container">
            <h3 className="cart-item-head">Shopping Cart</h3>

            {cartItems.map((data, index) => {
              console.log(data.product.quantity);
              return (
                <div key={data.product.id} className="cart-item">
                  <div className="cart-item-image-container">
                    <img
                      className="cart-item-image"
                      src={data.product.images && data.product.images[0].url}
                      alt="item img"
                    ></img>
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-details-container">
                      <div className="cart-item-details-name">
                        {data.product.name}
                      </div>
                      <div className="cart-item-details-desc">
                        {data.product.company}
                      </div>
                      <div className="cart-item-details-price">
                        ₹{data.product.price}
                      </div>
                      <div className="cart-item-details-stock">
                        In Stock :{data.product.stock}
                      </div>
                      <div className="cart-item-details-quantity">
                        <p>{data.product.quantity}</p>
                        {data.product.quantity < data.product.stock ? (
                          <button
                            className="addOne"
                            onClick={() => increaseQty(data)}
                          >
                            +
                          </button>
                        ) : (
                          <button className="addOne" onClick={handleClick}>
                            +
                          </button>
                        )}
                        <button
                          className="removeOne"
                          onClick={() => decreaseQuantity(data)}
                        >
                          -
                        </button>
                      </div>
                      <img
                        onClick={() => removeItem(index, data)}
                        className="remove-item"
                        src={remove}
                        alt="remove item"
                      ></img>
                      {showWarning && (
                        <p key= {id} className="warning">Exceeded stock availability !</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="cart-empty">
            <img
              className="empty-cart-image"
              src="https://media1.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b952n8hl1hu1xx42o7qsr295781y22bis2iy7s84mz7a&rid=giphy.gif&ct=s"
              alt="emptycart"
            ></img>
            <h1 className="cart-empty-text">Your Shopping Cart is empty !</h1>
            <h2 className="cart-empty-text">
              Your Shopping Cart lives to serve. Give it purpose :)
            </h2>
            <h3 className="cart-empty-text-link">
              Click{" "}
              <a className="link-cart-empty" href="/">
                {" "}
                here
              </a>{" "}
              to go to our Products Page ....
            </h3>
          </div>
        )}

        {id && qty && cartItems.length > 0 ? (
          <div className="order-summary">
            <h3 className="order-summary-head">Order Summary</h3>
            <div className="price-breakup">
              <div className="price-breakup-content">
                <p>Subtotal</p>
                <p>₹{price.toFixed(2)}</p>
              </div>
              <div className="line-order-summary"></div>
              <div className="price-breakup-content">
                <p>Shipping estimate</p>
                <p>₹{(price * 0.03).toFixed(2)}</p>
              </div>
              <div className="line-order-summary"></div>
              <div className="price-breakup-content">
                <p>Tax estimate</p>
                <p>₹{(price * 0.06).toFixed(2)}</p>
              </div>
              <div className="line-order-summary"></div>
              <div className="price-breakup-content-total">
                <p>Order Total</p>
                <p>₹{Math.ceil(price + price * 0.03 + price * 0.06)}</p>
              </div>
            </div>
            <button className="checkout-button" onClick={checkout}>
              Checkout
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      <RecentlyViewed head={id ? "You may also like" : "Our Recommendation"} />

      <Footer />
    </div>
  );
}

export default CartPage;
