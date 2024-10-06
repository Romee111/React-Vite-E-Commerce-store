import { createStore, combineReducers,applyMiddleware } from 'redux';
import cartReducer from './reducers/cartreducer';
import {thunk} from 'redux-thunk';
import userReducer from './reducers/userprofilereducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
