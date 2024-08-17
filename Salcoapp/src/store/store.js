import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartreducer';
import userReducer from './reducers/userprofilereducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default store;
