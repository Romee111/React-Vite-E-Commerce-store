import axios from "axios";
function useProduct  ()  {

    const listProduct = async () => {
        try {
            const response = await axios.get("http://localhost:2900/product/getAllProducts");
            const  data=response.data.data;
            console.log(data);

            return data;
}

        catch (err) {
            console.log(err);
        }

    }
    const addProduct = async (productData) => {
        try {
            const response = await axios.post("http://localhost:2900/product/addProduct", productData);
            console.log(response.data);
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:2900/product/deleteProduct/${id}`);
            console.log(response.data);
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    const updateProduct = async (id, productData) => {
        try {
            const response = await axios.put(`http://localhost:2900/product/updateProduct/${id}`, productData);
            console.log(response.data);
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }
return {
    listProduct,
    addProduct,
    deleteProduct,
    updateProduct

}
  

}

export default useProduct