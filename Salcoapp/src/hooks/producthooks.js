import axios from "axios";

export function useProducts() {
    const getProducts = async () => {
       try{
        const response = await axios.get("http://localhost:2900/product/getAllProducts");
         console.log(response.data);
        const data =  response.data.data.slice(0,20);
      console.log(data);
        return data;
       }
       catch(err){
           console.log(err);

          }  

                    
    };

    const getDetailProduct=async(Id)=>{
      try{
        const response = await axios.get(`http://localhost:2900/product/getProduct/${Id}`);
         console.log(response.data);
         const data=response.data
         console.log(data);
         return data;
      
      }
      catch(err){
          console.log(err);
      }
    }
    
  const getSearch=async( query )=>{
      try{
        const response = await axios.get(`http://localhost:2900/product/searchProduct/${query}`);
         console.log(response.data.data);
         const data=response.data
         console.log(data);
         return data;
      
      }
      catch(err){
          console.log(err);
      }
    }

    const listProduct=async()=>{
      try{
        const response = await axios.get(`http://localhost:2900/product/getAllProducts`);
         console.log(response.data);
         const data=response.data
         console.log(data);
         return data;
      
      }
      catch(err){
          console.log(err);
      }
    }
      const addrating = async (ratingData) => {
        try{
          const response = await axios.post(`http://localhost:2900/rating/addrating`, ratingData);
          console.log(response.data);
          const data=response.data
          console.log(data);
          return data;
        }
        catch(err){
            console.log(err);
        }
      };

      const addreviews=async(user_id,product_id,rating,review)=>{
        try{
          console.log("Id nhi a rhi hai ",user_id)
          const response = await axios.post(`http://localhost:2900/review/addreview/${localStorage.getItem("user_id"),product_id,rating,review}`);
          console.log(response.data);
          
          const data=response.data
          console.log(data);
          return data;
        }
        catch(err){
            console.log(err);
        }
      };
      const getUserReview=async(user_id)=>{
        try{
          console.log("");
          const response = await axios.get(`http://localhost:2900/review/getreviewsById/${user_id}` );
          console.log(response.data);
          const data=response.data
          console.log(data);
          return data;
        
        }
        catch(err){
            console.log(err);
        }
      }
 
    
      
    return { getProducts,getDetailProduct,getSearch,listProduct,addrating,addreviews,getUserReview };
}

export default useProducts