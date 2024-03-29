import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../Context/StateContext";
import wishIcon from "../../Icon/icon-heart.png";
import wishIconRed from "../../Icon/icon-heart-red.png";
import video from "../../Icon/loading.gif";
import mobilenav from "../../Icon/navicon.png";
import { useState , useEffect} from "react";


function Navbar() {

  const [toggleMenu,setToggleMenu] = useState(false);
  const [screenWidth,setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const {
    isLoading,
    qty,
    wish,
    products,
    data,
    setData,
    search,
    setSearch,
    category,
  } = useStateContext();

  const toggleNav =()=>{
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth=()=>{
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize',changeWidth)

    return()=>{
      window.removeEventListener('resize',changeWidth)
    }
  }, [])
  

  const handleSearch = (e) => {
    e.preventDefault();
    const item = e.target.value;
    setData(item);
    console.log(search);
    const filteredData = products.filter((item) => {
      return item.name.toLowerCase().includes(data.toLowerCase());
    });
    setSearch(filteredData);
  };


  const home = () => {
    navigate("/home");

  };
  const cart = () => {
    navigate(`/cart`);
  };
  const user = () => {
    navigate(`/login`);
  };

  const wishList = () => {
    navigate(`/wishlist`);
  };

  function searchList(e) {
    e.preventDefault();
    navigate(`/results`);
  }

  const handleOptionProduct = (e) => {
    const category = e;
    const filteredData = products.filter((item) => {
      return item.category.toLowerCase().includes(category.toLowerCase());
    });
    toggleNav()
    setSearch(filteredData);
    navigate(`/results`);
  };
 

  const handleOptionCategory = (e) => {
    const category = e;
    const filteredData = products.filter((item) => {
      return item.category.toLowerCase().includes(category.toLowerCase());
    });
    toggleNav()
    setSearch(filteredData);
    navigate(`/results`);
  };
  

 
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
    <div className="navbar">
      <button onClick={toggleNav} className="dropdown-mobie-button">
        <img className="dropdown-mobie-icon" src={mobilenav} alt='dropdown-img'></img>
        </button>  
      {(toggleMenu || screenWidth>500)&& <ul className="navbar_contents">
        <li className="brand-name" onClick={home}>
          Funiro.
        </li>
        <div className="navbar-menu-drop" value="Product"  >
          Products
          <div className="dropdown-container">
 
          {category.map((option) => (
            <div onClick={(e) => handleOptionProduct(option.category)}
             
              className="navbar-menu-drop-items"
              key={option.id} 
            >
              {option.category}
            </div>
          ))}
          </div>
        </div>

        <div className="navbar-menu-drop"   >
            Rooms  
            <div className="dropdown-container">
              {category.map((option) => (
                <div onClick={(e) => handleOptionCategory(option.category)}
                  className="navbar-menu-drop-items"
                  key={option.id}  
                >
                  {option.category}
                </div>
              ))}
            </div>
        </div>
        <li className="navbar-menu">Contact Us </li>
      </ul>
  }


      <span className="search-box">
        <form onSubmit={searchList}>
          <input
            type="text"
            className="input-search"
            value={data}
            onChange={handleSearch}
            placeholder={data ? data : "Search any products ..."}
          />
        </form>
      </span>
      <span className="icons">
        {wish.length > 0 ? (
          <img
            className="heart"
            src={wishIconRed}
            onClick={wishList}
            alt="wish"
          ></img>
        ) : (
          <img
            className="heart"
            src={wishIcon}
            onClick={wishList}
            alt="wish"
          ></img>
        )}
        {/* CartIcon */}
        <button
          onClick={cart}
          style={{
            border: "none",
            cursor: "pointer",
            background: "transparent",
            position: "relative",
            curser: "pointer",
          }}
        >

          <svg
            className="cart-icon"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M85 490 c-10 -17 5 -30 34 -30 27 0 28 -3 51 -102 16 -65 32 -110 45
            -123 19 -19 19 -21 3 -38 -10 -9 -18 -26 -18 -37 0 -26 34 -60 60 -60 26 0 60
            34 60 60 0 11 -9 29 -20 40 -20 20 -20 20 50 20 70 0 70 0 50 -20 -11 -11 -20
            -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34 60 60 0 11 -8 28 -18 38 -17 16
            -17 18 1 32 14 12 67 171 67 202 0 5 -75 8 -166 8 -147 0 -165 -2 -160 -16 3
            -9 6 -18 6 -20 0 -2 61 -4 135 -4 74 0 135 -2 135 -5 0 -3 -7 -35 -16 -70
            l-16 -65 -117 0 -117 0 -23 98 c-29 122 -41 142 -86 142 -18 0 -37 -4 -40 -10z
            m191 -321 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m180
            0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"
              />
            </g>
          </svg>

          <div className={qty === 0 ? "cart-qty0" : "cart-qty"}>{qty}</div>
        </button>
        {/* userIcon */}

        <svg onClick={user}
          className="user-icon"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
            60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"
            />
            <path
              d="M82 90 c-71 -32 -51 -45 68 -45 119 0 139 13 68 45 -54 25 -82 25
            -136 0z"
            />
          </g>
        </svg>

      </span>

    </div>
  );
}

export default Navbar;
