import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartaction';

const useCart = () => {
  const dispatch = useDispatch();

  const addCart = async (item) => {
    try {
      const response = await axios.post('http://localhost:2900/addtocart/createCart', item);
      const data = response.data;
      dispatch(addToCart(data)); // Dispatch action to add item to cart in Redux
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  };

  const removeCart = async (id) => {
    try {
      const response=await axios.delete(`http://localhost:2900/addtocart/deleteCart/${id}`);
      const  data=response.data;
      console.log(data);
      
    } catch (err) {
      console.error('Error removing item from cart:', err);
    }
  };

  return { addCart, removeCart };
};

export default useCart;
