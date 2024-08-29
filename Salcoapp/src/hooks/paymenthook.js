import axios from "axios";

const usePayment = () => {

    const createPayment = async ( paymentDatails ) => {
        try {
            const response = await axios.post("http://localhost:2900/payment/create", paymentDatails);
            console.log(response.data);
            const data = response.data;
            return data;

        } catch (err) {
            console.log(err);
        }   
    }
    const webhook = async ( webhookData ) => {
        try {
            const response = await axios.post("http://localhost:2900/payment/webhook", webhookData);
            console.log(response.data); 
            const data = response.data;
            return data;

        } catch (err) {
            console.log(err);
        }
    }

    return {
        createPayment,
        webhook
    }
}

export default usePayment