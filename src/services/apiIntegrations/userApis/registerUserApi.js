import axios from "axios";
import BASE_URL from "../baseUrl";
const endPoint = "/register";

export default class RegisterUserApi {
    static async registerUser(userData) {
        try {
            const response = await axios.post(`${BASE_URL}${endPoint}`, userData);
            return response.data; // Return the response data to the Vue component
        } catch (error) {
            throw error;
        }
    }
}
