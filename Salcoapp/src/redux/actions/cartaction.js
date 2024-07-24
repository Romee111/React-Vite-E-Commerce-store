import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART, SET_CART } from "./constantproduct";
import axios from "axios";

const addCart=(id)=>{
    return async(dispatch)=>{
        try{
            const response=await axios.get(`http://localhost:2900/addtocart/createCart/${id}`)
            console.log(response.data)
            const data=response.data;
            dispatch({type:ADD_TO_CART,payload:data})

        }
        catch(err){
            console.log(err);
            dispatch({type:ADD_TO_CART,payload:err})

        }

        }
    }

    