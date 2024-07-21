import axios from "axios";

function useCart() {
    const addCart = async () => {
        try {
            const response = await axios.get("http://localhost:2900/addtocart/createCart");
            const data = response.data;
            return data;
        } catch (err) {
            console.log(err);
        }
    };


    return { addCart };


}

export default useCart