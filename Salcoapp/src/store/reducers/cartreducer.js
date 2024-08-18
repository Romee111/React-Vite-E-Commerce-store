// cartReducer.js
const initialState = {
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Ensure no duplication
            const existingItemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
            if (existingItemIndex > 0) {
                // Update quantity if item already exists
                const updatedItems = [...state.cartItems];
                updatedItems[existingItemIndex].quantity += action.payload.quantity;
                return { ...state, cartItems: updatedItems };
            }
            return { ...state, cartItems: [...state.cartItems, action.payload] };

        case 'REMOVE_FROM_CART':
            // debugger
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item._id === action.payload.id
                        ? { ...item, quantity: item.quantity + action.payload.quantityChange }
                        : item
                )
            };

        default:
            return state;
    }
};

export default cartReducer;


//id==_id
//action.[ayload ] = undefined


// cart FE
// Place Order 

