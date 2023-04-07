import React from "react";
import "./WishList.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RecentlyViewed from "../ProductPage/RecentlyViewed";
import Footer from "../Footer/Footer";
import { useStateContext } from "../../Context/StateContext";
import video from "../../Icon/loading.gif";
import remove from "../../Icon/remove-icon.png";
import emptywish from "../../Icon/EmptyWishList.png"

function WishList() {
  const navigate = useNavigate();

  const { isLoading, wish, removeFromWishList } = useStateContext();

  const details = (id) => {
    navigate(`/product/${id}`);
  };

  if (isLoading && wish.length === 0) {
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
    <div className="wishList">
      <Navbar />
      <div className="wishList-container">
        <h3 className="wishlist-head">My Wishlist</h3>
        {wish.length > 0 ? (
          <div className="wishList-grid-container">
            {wish.map((product) => {
              return (
                <div key={product.id} className="wish-item">
                  <div className="wish-item-image-container">
                    <img
                      className="wish-item-image"
                      src={product.images && product.images[0].url}
                      onClick={() => details(product.id)}
                      alt="item img"
                    ></img>
                  </div>
                  <div className="wish-item-details">
                    <div className="wish-item-details-container">
                      <div className="wish-item-details-name">
                        {product.name}
                      </div>
                      <div className="wish-item-details-desc">
                        {product.company}
                      </div>
                      <div className="wish-item-details-price">
                        ₹{product.price}
                      </div>
                      <div className="wish-item-details-stock">
                        In Stock :{product.stock}
                      </div>

                      <img
                        onClick={() => removeFromWishList(product)}
                        className="remove-item"
                        src={remove}
                        alt="remove item"
                      ></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-wishList">
            <img className="empty-wish-image" src={emptywish} alt='Empty Wishlist Icon'></img>
            <h1 className="text-wish">Your wishlist is empty ... </h1>
            <h3 className="text-wish">Add items to your wishlist now...</h3>
          </div>
        )}
      </div>
      <RecentlyViewed head={"Our Recommendation"} />

      <Footer />
    </div>
  );
}

export default WishList;
