import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

const Context = createContext();

const allProductsAPI = "https://course-api.com/react-store-products";

export const StateContext = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    category: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [qty, setQty] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const [wish, setWish] = useState([]);

  const [data, setData] = useState("");

  const [search, setSearch] = useState([]);

  const [showContent, setShowContent] = useState(false);


  function wishList(product) {
    setWish([...wish, product]);
  }

  const removeFromWishList = (product) => {
    const newWishItems = [...wish];
    const index = wish.findIndex((item) => item.id === product.id);
    newWishItems.splice(index, 1);
    setWish(newWishItems);
  };

  function addItemToCart(product) {
    var availableItem = cartItems.find(
      (item) => item.product.id === product.product.id
    );
    
    if (availableItem) {
      availableItem.product.quantity += 1;
    } else {
      product.product.quantity = 1;
      setCartItems([...cartItems, product]);
    }
  }

  function increaseCartItem(data) {
    let array = [...cartItems];
    array.find((item) => item.product.id === data.product.id).product.quantity =
      data.product.quantity + 1;
    setCartItems(array);
  }

  function decreaseCartItem(data) {
    let array = [...cartItems];
    array.find((item) => item.product.id === data.product.id).product.quantity >
    1
      ? decQty(
          (array.find(
            (item) => item.product.id === data.product.id
          ).product.quantity = data.product.quantity - 1)
        )
      : (array.find(
          (item) => item.product.id === data.product.id
        ).product.quantity = 1);
    setCartItems(array);
  }

  const removeItem = (index, data) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    setQty(qty - data.product.quantity);
  };

  const resetCart = () => {
    setCartItems([]);
    setQty(0);
  };

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      if (response.error) {
        throw new Error(response.error);
      } else {
        const products = await response.data;
        dispatch({ type: "SET_API_DATA", payload: products });
      }
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      alert(error);
    }
  };

  useEffect(() => {
    getProducts(allProductsAPI);
  }, []);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        qty,
        incQty,
        decQty,
        addItemToCart,
        cartItems,
        increaseCartItem,
        decreaseCartItem,
        removeItem,
        resetCart,
        wishList,
        wish,
        removeFromWishList,
        data,
        setData,
        search,
        setSearch,
        showContent,
        setShowContent,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
