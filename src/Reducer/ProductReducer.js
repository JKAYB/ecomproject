const ProductReducer = (state,action) =>{
  

    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
             };
        case "API_ERROR" :
            return{
                ...state,
                isLoading:false,
                isError:true,
             };
        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem)=>{
                return curElem.featured === true ;
            });
            
            const categoryData = action.payload.filter((obj, index, arr) => {
                return arr.findIndex(t => t.category === obj.category) === index;
              });
            
            return{
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,  
                category: categoryData,  
       
            }

       
        default:
            return state;
            
    }

};

export default ProductReducer;