import axios from "axios";

export function useSubCategories() {
    const getsubCat = async ( ) =>{
        try{
            const response = await axios.get(`http://localhost:2900/subcategory/getAllSub`);
             console.log(response.data);         
            const data=response.data
             console.log(data);

            return data;

        }

        
        catch(err){
            console.log(err);

        }

    };
    const ListCategories=async(category_id )=>{
        try{
            const response = await axios.get(`http://localhost:2900/subcategory/getallsubCategory/${category_id}`);
             console.log(response.data);
             const data=response.data
             console.log(data);

            return data;

        }

        catch(err){ 
            console.log(err);

        }
    }
    return { getsubCat,ListCategories };
}