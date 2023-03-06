import React,{createContext,useContext,useEffect,useReducer,useState} from'react' ;
import axios from 'axios';
import reducer from '../Reducer/ProductReducer'
// import { useParams } from 'react-router-dom';

const Context = createContext();



const allProductsAPI ='https://course-api.com/react-store-products';




export const StateContext = ({children})=>{

    const initialState= {
        isLoading : false ,
        isError : false,
        products: [],
        featureProducts: [],
        singleProduct: {},
    };

  
    const[state,dispatch] = useReducer(reducer,initialState)


    const[qty,setQty] = useState(0);


    const [cartItems, setCartItems] = useState([]);
    
    

    function addItemToCart(product) {
        var availableItem = cartItems.find(item => item.product.id === product.product.id)
        if(availableItem){
            console.log("Increased item quantity")
            product.product.quantity+=1 ;
            
        }
        else{
            product.product.quantity=1
        setCartItems([...cartItems, product]);
        console.log("Added new item")
        }

    }

    function increaseCartItem(data){
        let array = [...cartItems]
        array.find(item => item.product.id === data.product.id).product.quantity = data.product.quantity + 1
        setCartItems(array)
        incQty()

    } 

    function decreaseCartItem (data){
        let array = [...cartItems];
        array.find(item => item.product.id === data.product.id).product.quantity > 1 ?  array.find(item => item.product.id === data.product.id).product.quantity = data.product.quantity - 1 :  array.find(item => item.product.id === data.product.id).product.quantity = 1
        setCartItems(array)
        decQty()
    }


    const removeItem = (index,data) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        setQty( qty-(data.product.quantity))
      };
    

    const getProducts = async (url) =>{
                 dispatch({type:"SET_LOADING"})

                try{
                    const response = await axios.get(url);
                    const products= await response.data ;
                    dispatch({type:"SET_API_DATA", payload: products})
                
                    }catch(error){
                        dispatch({type:"API_ERROR"})
                        alert(error)
         }};

    const getSingleProduct  = async (url) =>{
        dispatch({type:"SET_SINGLE_LOADING"})

       try{
           const response = await axios.get(url);
           const singleProduct= await response.data ;
           dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct})
       
           }catch(error){
               dispatch({type:"SET_SINGLE_ERROR"})
               alert(error)

}};
    
    useEffect(()=>{
        getProducts(allProductsAPI)
    },[])

    

    const incQty=()=>{
        //console.log(cartItems.reduce((n,o)=>n + o.product.quantity))
        setQty((prevQty)=> prevQty+1) ;
    }

    const decQty=()=>{
        setQty((prevQty)=> {
            if(prevQty-1<1) return 1;
            return prevQty-1
        }) ;
    }

   
  


    return(
        <Context.Provider
        value={{
             ...state,   
                qty,
                incQty,
                decQty,
                getSingleProduct,
                addItemToCart,
                cartItems,
                increaseCartItem,
                decreaseCartItem,
                removeItem
                
        }}>
            {children}
        </Context.Provider>
    )
}
export const useStateContext =()=> useContext(Context);