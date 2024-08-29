import axios from "axios";


export function useCategories() {
    const getCat = async () => {
        try {
            const response = await axios.get("http://localhost:2900/category/getallCategory");
            const data = response.data.Category;
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }


    }
    const deleteCategory = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:2900/category/deleteCategory/${id}`);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const updateCat = async (id) => {
        try {
            const response = await axios.put(`http://localhost:2900/category/updateCategory/${id}`);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return { getCat, deleteCategory, updateCat }

}

export default useCategories