import axios from "axios";


export function useOrder() {
    const createOrder = async (user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate) => {
        try {
            const response = await axios.post("http://localhost:2900/order/createOrder", { user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate });
            console.log(response.data);
            const data = response.data;     
            return data;    
        } catch (err) {             
            console.log(err);
        }
    }
}
 const getOrders = async () => {
    try {
        const response = await axios.get("http://localhost:2900/order/getAllOrders");
        console.log(response.data);
        const data = response.data;
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}
     const getOrderById = async (id) => {   
    try {
        const response = await axios.get(`http://localhost:2900/order/getOrderById/${id}`);
        console.log(response.data);
        const data = response.data;
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
} 
   const updateOrder = async (id, user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate) => {  
    try {   
        const response = await axios.put(`http://localhost:2900/order/updateOrder/${id}`, { user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate });

        console.log(response.data);
        const data = response.data;
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}
   
const deleteOrder = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:2900/order/deleteOrder/${id}`);
        console.log(response.data);
        const data = response.data;
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}
const trackOrder = async (id) => {
    try {
        const response = await axios.get(`http://localhost:2900/order/trackOrder/${id}`);
        console.log(response.data);
        const data = response.data;
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
    return { createOrder, getOrders, getOrderById, updateOrder, deleteOrder, trackOrder };
}

export default useOrder;