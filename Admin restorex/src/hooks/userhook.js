import axios from "axios";

export function useUser() {
    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:2900/userauth/getAllUser");
            const data = response.data.data; 
            console.log(data);
            return data;    
        } catch (err) {
            console.log(err);
        }

    }

    return { getUser }

}
 