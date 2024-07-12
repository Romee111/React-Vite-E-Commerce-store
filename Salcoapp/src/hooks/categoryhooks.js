import axios from "axios";

export function useCategories(){
     const getCat = async () =>{
        try{
            const response = await axios.get("http://localhost:2900/category/getallCategory");
                   const data = response.data.Category.slice(3,6)
                   console.log(data);
                   return data;

                
        }
        catch(err){
            console.log(err);
 
        }
        
};

  const getallCategory = async () =>{
    try{
        const response = await axios.get("http://localhost:2900/category/getallCategory");
               const data = response.data.Category
               console.log(data);
               return data;
    }
    catch(err){
        console.log(err);
    }

};


return {getCat,getallCategory}
}