import axios from "axios";
import BASE_URL from "../baseUrl";
const endPoint = "/login";

export default class LoginUserApi {
    static async loginUser (userData) {
        try {
            const response = await axios.post(`${BASE_URL}${endPoint}`, userData);
            return response.data; // Return the response data to the Vue component
        } catch (error) {
            throw error;
        }
    }
}