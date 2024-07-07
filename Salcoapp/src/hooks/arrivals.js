import axios from "axios";

export function useArrivals() {
    const getArrivals = async () => {
        try {
            const response = await axios.get("http://localhost:2900/product/newArrivals");
            console.log(response.data);
            const data = response.data.data.slice(0, 16);
            console.log(data);  
            return data;
        } catch (err) {
            console.log(err);
        }
    };  

    return { getArrivals };
}