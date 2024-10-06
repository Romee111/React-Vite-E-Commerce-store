import { SET_USER, UPDATE_USER, LOGOUT_USER } from './constant';
import axios from 'axios';

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  };
};

export const fetchUser = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:2900/userauth/getUser/${id}`);
    console.log('Fetched user data:', response.data); // Check what you get from backend
    dispatch(setUser(response.data));
  } catch (err) {
    console.error('Error fetching user data:', err);
  }
};

export const updateUser = (updatedData) => {
  return {
    type: UPDATE_USER,
    payload: updatedData,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
