import axios from "axios";
import BASE_URL from "../baseUrl";
// BASE_URL = https://dummyjson.com
const endpoint = "/products"

export default class GetAllProducts {
    static async getAllProducts () {
        const res = await axios.get(`${BASE_URL}${endpoint}`)
        return res.data
    }
}