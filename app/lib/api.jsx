import axios from "axios";



export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products?limit=100');
        return response.data
    } catch (error) {
        alert(error)
        return null;
    }
}