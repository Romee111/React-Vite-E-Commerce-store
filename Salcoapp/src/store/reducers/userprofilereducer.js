import { SET_USER, UPDATE_USER, LOGOUT_USER } from '../actions/constant';

const initialState = {
  userData: {},  // Store full user data here
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('Setting user data:', action.payload); // Debugging to check payload
      return {
        ...state,
        userData: action.payload,  // Store the full payload (user data) in userData
        isLoggedIn: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        userData: { 
          ...state.userData,
          ...action.payload,  // Update specific fields in the userData
        },
      };
    case LOGOUT_USER:
      return initialState; // Reset to the initial state on logout
    default:
      return state;
  }
};

export default userReducer;
