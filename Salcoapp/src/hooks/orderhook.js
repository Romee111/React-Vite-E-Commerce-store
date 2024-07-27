import axios from "axios";

function useOrder() {
     const createOrder= async (user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate) => {
          try {
               const response = await axios.post("http://localhost:2900/order/createOrder", { user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate });
               console.log(response.data);
               const data = response.data;
               return data;
          } catch (err) {
               console.log(err);
          } 

};
const getOrders=async(id)=>{
  try{
    const response = await axios.get(`http://localhost:2900/order/getOrderById/${id}`);
    console.log(response.data.data);
    const data=response.data.data;
    console.log(data);


     return { createOrder };
}

catch(err){ 
    console.log(err);

}
}
return {  createOrder, getOrders };
}
 
export default useOrder