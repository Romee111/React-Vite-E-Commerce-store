import {combineReducer} from 'redux';
import cartReducer from './cartreducer';

export default combineReducer({
    cart: cartReducer,
})