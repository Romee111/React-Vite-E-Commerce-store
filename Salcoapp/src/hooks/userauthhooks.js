import axios from "axios";
import { useState } from "react";


export function useAuth() {
    const [user, setUser] = useState(null);

    const loginApi = async (email, password, isAdmin, isSeller) => {
        try {
            debugger
            console.log("login damaged", email, password, isAdmin, isSeller);
            // const isAdmin = true;
            const body = { email, password }

            const response = await axios.post("http://localhost:2900/userauth/login", body);
            console.log("login damaged", response.data);
            const data = response.data;
            localStorage.setItem('user', JSON.stringify(data));
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    const forgetPassword = async (email) => {
        try {
           debugger
            const response = await axios.post("http://localhost:2900/userauth/forgetPassword" ,{ email })
            debugger
        
            const data = response.data
            console.log(data)
            return data
        }
        catch (err) {
             throw new Error(err.response?.data?.message || 'Password reset failed');
        }
    };
    const register = async (data) => {
        try {
            debugger
            data.image = "1.png"
            const response = await axios.post(`http://localhost:2900/userauth/register`, data);
            console.log(response.data);

            //   const data=response.data;
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(data);
            return data
        }
        catch (err) {
            console.log(err)
        }
    };

    const logout = async () => {
        const response = await axios.get("http://localhost:2900/userauth/logout")
        console.log(response.data)
        const data = response.data
        return data
    };
    const resetPassword = async (token, password) => {
        try {
            const response = await axios.post("http://localhost:2900/userauth/resetPassword", { token, password })
            console.log(response.data)
            const data = response.data
            return data
        } catch (err) {
            console.log(err)
        }
    };

    const userbyId = async (id) => {
        try {
            const response = await axios.get(`http://localhost:2900/userauth/getUser/${id}`)
            console.log(response.data)
            const data = response.data
            return data
        }
        catch (err) {
            console.log(err)
        }
    };
    return { loginApi, forgetPassword, register, logout, resetPassword, userbyId, user, setUser };

}

