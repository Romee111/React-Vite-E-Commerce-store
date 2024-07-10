import axios from "axios";


export function useAuth() {
    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:2900/userauth/login", { email, password });
            console.log(response.data);
            const data = response.data;
            localStorage.setItem('user', JSON.stringify(data));
            return data;
            console.log(data);
        } catch (err) {
            console.log(err);   

        }
        }

    return { login };

}