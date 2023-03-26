import LandingPage from "./Components/LandingPage/LandingPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import CartPage from "./Components/CartPage/CartPage";
import {Routes,Route} from 'react-router-dom'
import OrderPlaced from "./Components/OrderPlaced/OrderPlaced";
import {StateContext} from '../src/Context/StateContext'
import WishList from "./Components/Wishlist/WishList";
function App() {
  return (
    <div className="App">
      <StateContext>
        <Routes>
        <Route path= "/" exact element = {<LandingPage/>} />
          <Route path= "/home" exact element = {<LandingPage/>} />
          <Route path= "/product/:id" exact element = {<ProductPage/>} /> 
          <Route path= "/cart" exact element = {<CartPage/>} />   
          <Route path= "/wishlist" exact element = {<WishList/>} />   
          <Route path= "/orderplaced" exact element = {<OrderPlaced/>} />   
        </Routes>
        </StateContext>
  </div>
  )
}

export default App;
