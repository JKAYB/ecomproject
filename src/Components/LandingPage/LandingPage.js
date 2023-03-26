import React, { useState ,useEffect } from "react";
import { useStateContext } from "../../Context/StateContext";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import img1 from "../../Icon/featureIcon1.jpg";
import img2 from "../../Icon/icon2.png";
import img3 from "../../Icon/icon3.png";
import img4 from "../../Icon/icon4.png";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ShareSetUp from "./ShareSetUp";
import Footer from "../Footer/Footer";
import video from "../../Icon/loading.gif";

function LandingPage() {
  const { isLoading, featureProducts, products } = useStateContext();

  const [showContent, setShowContent] = useState(false);

  const navigate = useNavigate();
  const shopnow = (id) => {
    navigate(`/product/${id}`);
    //  console.log(id)
  };

  useEffect(() => {
    window.scrollTo({top: 1400, left: 0, behavior: 'smooth' });
  }, [setShowContent]);

  if (isLoading) {
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
    <>
      <div className="Rectangle50">
        <Navbar />
        <div className="Rectangle51"></div>
        <div className="Rectangle11">
          <h3 className="Head1-Rectangle11">
            High-Quality Furniture Just For You
          </h3>
          <h3 className="Head2-Rectangle11">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home{" "}
          </h3>
          {featureProducts.slice(0, 1).map((curElem) => {
            return (
              <button key={curElem.id} onClick={() => shopnow(curElem.id)} className="ShopNow">
                Shop Now
              </button>
            );
          })}
         
        </div>
        <Carousel infiniteLoop autoPlay stopOnHover className="main-carousel">
          {featureProducts.slice(0, 4).map((curElem) => {
            return (
              <div className="carousel-image" key={curElem.id}>
                <img src={curElem.image} alt="im" />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="feature">
        <span className="feature-container">
          <img className="feature-icons" src={img1} alt="img"></img>
          <span className="feature-texts">
            <div className="feature-text-bold">High Quality</div>
            <div className="feature-text">Crafted from top materials</div>
          </span>
        </span>
        <span className="feature-container">
          <img className="feature-icons" src={img2} alt="img"></img>

          <span className="feature-texts">
            <div className="feature-text-bold">Warranty Protection</div>
            <div className="feature-text">Over 2 Years</div>
          </span>
        </span>

        <span className="feature-container">
          <img className="feature-icons" src={img3} alt="img"></img>

          <span className="feature-texts">
            <div className="feature-text-bold">Free Shipping</div>
            <div className="feature-text">Order over $150</div>
          </span>
        </span>

        <span className="feature-container">
          <img className="feature-icons" src={img4} alt="img"></img>

          <span className="feature-texts">
            <div className="feature-text-bold">24/7 Support</div>
            <div className="feature-text">Dedicated Support</div>
          </span>
        </span>
      </div>

      <h2 className="products-head">Our Products</h2>

      {showContent ? (
        <div className="products-list">
          {products.slice(0, 20).map((curElem) => {
            return (
              <span
                className="product-list-content"
                key={curElem.id}
                onClick={() => shopnow(curElem.id)}
              >
                <div>
                  <img
                    className="product-image"
                    src={curElem.image}
                    alt="s"
                  ></img>
                  <div className="product-details-desc">
                    <p className="product-details-desc-name">{curElem.name}</p>
                    <p className="product-details-desc-description">
                      {curElem.company}
                    </p>
                    <br />
                    <span className="newPrice">₹{curElem.price}</span>{" "}
                    <span className="strike">
                      ₹{curElem.price + curElem.price / 5}
                    </span>
                  </div>
                </div>
              </span>
            );
          })}
        </div>
      ) : (
        <div className="products-list">
          {products.slice(0, 8).map((curElem) => {
            return (
              <span
                className="product-list-content"
                key={curElem.id}
                onClick={() => shopnow(curElem.id)}
              >
                <div>
                  <img
                    className="product-image"
                    src={curElem.image}
                    alt="s"
                  ></img>
                  <div className="product-details-desc">
                    <p className="product-details-desc-name">{curElem.name}</p>
                    <p className="product-details-desc-description">
                      {curElem.company}
                    </p>
                    <br />
                    <span className="newPrice">₹{curElem.price}</span>{" "}
                    <span className="strike">
                      ₹{curElem.price + curElem.price / 5}
                    </span>
                  </div>
                </div>
              </span>
            );
          })}
        </div>
      )}
      <div className="showMore">
        <button
          onClick={() => setShowContent(!showContent)}
          className="showMorebutton"
        >
          {showContent ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="BG">
        <div className="BGtext">
          <h2 className="BGtext1">50+ Beautiful rooms inspiration </h2>
          <br />
          <h4 className="BGtext2">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </h4>
            <button className="exploreNowbutton">Explore Now</button>
          
        </div>
        <div className="BGcarousal">
          <Carousel infiniteLoop autoPlay stopOnHover>
            <div className="carousel-BG">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/home-decor-ideas-heidi-caillier-design-seattle-interior-designer-living-room-design-modern-traditional-1578073894.jpg?resize=480:*"
                alt="im"
              />
            </div>
            <div className="carousel-BG">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/edc090120echavarria-011-1595337658.jpg?resize=480:*"
                alt="im"
              />
            </div>
            <div className="carousel-BG">
              <img
                src="https://shabbyfufu.com/wp-content/uploads/2020/07/summer-decor-ideas-9-2.jpg"
                alt="im"
              />
            </div>
            <div className="carousel-BG">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/edc090120echavarria-011-1595337658.jpg?resize=480:*"
                alt="im"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <h1 className="products-head">Tips & Tricks</h1>
      <div className="tips">
        <Carousel  infiniteLoop autoPlay stopOnHover className="tips-carousel">
          <div className="carousel-tips">
            <img
              src="https://i.pinimg.com/564x/f6/7a/2c/f67a2c0cf3c82912d16ebeb647a58a29--wall-art-prints-canvas-prints.jpg"
              alt="im"
            />
          </div>
          <div className="carousel-tips">
            <img
              src="https://i.pinimg.com/564x/29/3d/51/293d5191c14740b3dd4d306cd7b43c2b--living-room-kitchen-living-room-interior.jpg"
              alt="im"
            />
          </div>
          <div className="carousel-tips">
            <img
              src="https://img.staticmb.com/mbcontent/images/uploads/2021/1/a-classy-dark-theme-always-works.jpg"
              alt="im"
            />
          </div>
        </Carousel>
      </div>
      <ShareSetUp />
      <Footer />
    </>
  );
}

export default LandingPage;
