import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART, SET_CART } from "../actions/constantproduct";

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case SET_CART:
            return {
                ...state,
                cart: action.payload,

            };
        default:
            return state || initialState;
    }
};
export default cartReducer;