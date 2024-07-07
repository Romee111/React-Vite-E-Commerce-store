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
         console.log(response.data);
         const data=response.data
         console.log(data);
         return data;
      
      }
      catch(err){
          console.log(err);
      }
    }

    return { getProducts,getDetailProduct,getSearch };
}

export default useProducts