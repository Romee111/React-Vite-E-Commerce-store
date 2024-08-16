import axios from "axios";

export function useUser() {
    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:2900/user/getAllUsers");
            const data = response.data; 
            console.log(data);
            return data;    
        } catch (err) {
            console.log(err);
        }

    }

    return { getUser }

}
 