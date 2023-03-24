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
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [qty, setQty] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(product) {
    var availableItem = cartItems.find(
      (item) => item.product.id === product.product.id
    );
    if (availableItem) {
      product.product.quantity += 1;
      console.log("Increased item quantity");
    } else {
      product.product.quantity = 1;
      setCartItems([...cartItems, product]);
      console.log("Added new item");
    }
  }

  function increaseCartItem(data) {
    let array = [...cartItems];
    array.find((item) => item.product.id === data.product.id).product.quantity =
      data.product.quantity + 1;
    setCartItems(array);
    incQty();
  }

  function decreaseCartItem(data) {
    let array = [...cartItems];
    array.find((item) => item.product.id === data.product.id).product.quantity >
    1
      ?   (  decQty()    
        (array.find(
          (item) => item.product.id === data.product.id
        ).product.quantity = data.product.quantity - 1))
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
      const products = await response.data;
      dispatch({ type: "SET_API_DATA", payload: products });
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

  function decQty() {
    setQty((prevQty) => {
      if (prevQty - 1 < 1)
        return 1;
      return prevQty - 1;
    });
  }

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
      }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
