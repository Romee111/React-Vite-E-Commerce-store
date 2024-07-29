import axios from "axios";


function useSellers() {
    const AddSeller = async (sellerData) => {
        try {
            debugger
            const response = await axios.post("http://localhost:2900/seller/createSeller", sellerData);
            console.log(response.data);
            const data = response.data;
            return data;
            localStorage.setItem('user', JSON.stringify(data));
            console.log(data);
        } catch (err) {
            console.log(err);
        }   
    }

    return { AddSeller };
}

export default useSellers