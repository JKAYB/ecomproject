import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useStateContext } from "../../Context/StateContext";
import "./ProductPage.css";
import Collapsible from "../Collapsible/Collapsible";
import Line from "../Line/Line";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import wish from "../../Icon/wishlist.png";
import Reviews from "./Reviews";
import RecentlyViewed from "./RecentlyViewed";
import Tablist from "./Tablist";
import axios from "axios";
import video from "../../Icon/loading.gif";
import cartImg from "../../Icon/addedToCart.gif";

const data1 = "Our best product ";
const data2 = "Suitable only in dry areas";
const data3 = "Return before 7 days";
const data4 = "3 years warranty covered by the brand";

const title1 = "Features";
const title2 = "Product Care";
const title3 = "Shipping & Returns";
const title4 = "Warranty";

const name1 = "Alexa Liras";
const name2 = "Laurent Perrier";
const name3 = "Michael Levi";
const name4 = "Dua Lipa";

const date1 = "03 March 2022";
const date2 = "23 December 2020";
const date3 = "14 June 2020";
const date4 = "11 February 2023";

const proPic1 =
  "http://www.wallpaperg.com/uploads/file/1482048132-awesome-hd-profile-picture-for-girls-file.jpg";
const proPic2 =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";
const proPic3 =
  "https://www.imagesplatform.com/mohsin_site/uploads/2019_09_06/0afee7ed5c0a7277.jpg";
const proPic4 =
  "https://i.scdn.co/image/ab67616d0000b2736b915e407b70e121e06fe979";

function ProductPage() {
  const { isLoading, incQty, addItemToCart ,cartItems  } = useStateContext();
  const { id } = useParams();

  const [sucess, setSucess] = useState(false);
  const [product, setProduct] = useState([]);

  function combined(product) {
    incQty();
    addItemToCart(product);
    handleSuccess();
  }

  function handleSuccess() {
    setSucess(true);
    // console.log(sucess);

    setTimeout(() => {
      setSucess(false);
    }, 1600);
  }

  useEffect(() => {
    axios
      .get(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((response) => {
        setProduct(response.data);
        // console.log(response.data)
      });
  }, [id]);

  

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  // eslint-disable-next-line eqeqeq
  if (isLoading || product.length == 0) {
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
    <div className="BG-productPage">
      <Navbar />
      <div className="product-content">
        <div className="product-desc-image">
          <div className="product-type">
            <h4 className="text">{product.category}</h4>
            <h3 className="text-big">{product.name}</h3>
          </div>
          <div className="imageBig">
            <img
              className="imageBig-content"
              src={product.images && product.images[0].url}
              alt="product-img"
            ></img>
          </div>

          <div className="imageSmall">
            {product.images &&
              product.images.length > 0 &&
              product.images.map((image) => {
                return (
                  <img
                    key={image.id}
                    className="imageSmall-content"
                    src={image.url}
                    alt="product-img"
                  ></img>
                );
              })}
          </div>
        </div>
        <div className="product-desc">
          <div className="dropdown-buttons">
            <select className="dropdown">
              <option value="sort">Sort</option>
              <option value="hi">Not Set</option>
              <option value="Ooi">Not Set</option>
            </select>
            <select className="dropdown">
              <option value="filter">Filter</option>
              <option value="hi">Not Set</option>
              <option value="Ooi">Not Set</option>
            </select>
          </div>
          <div className="itemName">
            <h1 className="text-main">{product.name}</h1>
            <h2 className="price">₹{product.price}</h2>
            <br />
            <div className="react-review">
              {product && product.stars && (
                <ReactStars
                  edit={false}
                  half={true}
                  count={5}
                  value={product.stars}
                  size={20}
                  activeColor="#111827"
                />
              )}
            </div>
          </div>
          <p className="para">{product.description}</p>

          <h4 className="color-head">Color</h4>
          <div className="color-selection">
            {product.colors &&
              product.colors.map((color, id) => (
                <div
                  style={{ backgroundColor: color }}
                  key={`color-${id}`}
                  className="color-choice"
                ></div>
              ))}
          </div>
          <div className="cartDiv">
            <img className="wishlist-icon" src={wish} alt="wishlist"></img>

            {sucess && (
              <img
                src={cartImg}
                alt="AddedToCart"
                className="success-message"
              ></img>
            )}
            {product.stock > 0 ? (
              cartItems.length>0?(cartItems.find((item) => item.product.id === product.id)?(
              <button 
              className="addToCartButton"
            >
              Added to cart
            </button>):( 
            <button 
            onClick={() => combined({ product })}
            className="addToCartButton"
          >
            Add to cart
          </button>
            ) ):(
              <button 
                onClick={() => combined({ product })}
                className="addToCartButton"
              >
                Add to cart
              </button>)
            ) : (
              <div className="notInStock">Temporarily out of stock</div>
            )}
          </div>
          <Line />
          <Collapsible data={data1} title={title1} />
          <div className="small-line"></div>
          <Collapsible data={data2} title={title2} />
          <div className="small-line"></div>
          <Collapsible data={data3} title={title3} />
          <div className="small-line"></div>
          <Collapsible data={data4} title={title4} />
        </div>
      </div>

      <div className="product-features">
        <h1 className="features-head">Product Features</h1>
        <p className="features-desc">{product.description}</p>
      </div>

      <Tablist />
      <h1 className="review-head">Reviews</h1>
      <Reviews name={name1} date={date1} profilePic={proPic1} />
      <Reviews name={name2} date={date2} profilePic={proPic2} />
      <Reviews name={name3} date={date3} profilePic={proPic3} />
      <Reviews name={name4} date={date4} profilePic={proPic4} />
      <RecentlyViewed head={"Recently Viewed"} />
      <Footer />
    </div>
  );
}

export default ProductPage;
