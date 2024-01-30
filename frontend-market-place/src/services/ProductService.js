import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/products';

export const getProducts = async () => {
    const response = await axios.get(REST_API_BASE_URL);

    return response.data;
}
