import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api';

export const getUsers = () => axios.get(REST_API_BASE_URL);

export const postUser = async (user) => {
    
        const response = await axios.post(REST_API_BASE_URL + '/signup', user)
        if(response.data===""){
            return false;
      }
        return true;
   
}

export const validateUserLogin = async (userData) => {
    try {
        const response = await axios.get(REST_API_BASE_URL + '/login', {
            params: {
                email: userData.email,
                password: userData.password
            }
        })

        return response.data
    } catch (error) {

        return null;
    }


};