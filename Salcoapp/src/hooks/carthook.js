import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartaction';

const useCart = () => {
  const dispatch = useDispatch();

  const addCart = async (item) => {
    try {
      const response = await axios.post('http://localhost:2900/addtocart/createCart', item);
      const data = response.data;
      dispatch(addToCart(data)); // Dispatch action to add item to cart
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  };

  return { addCart };
};

export default useCart;
