import axios from "axios";
import BASE_URL from "../baseUrl";
// BASE_URL = http://10.0.10.220:8080/api
const endpoint = "/book"

export default class GetAllBooks {
    static async getAllBooks() {
        const res = await axios.get(`${BASE_URL}${endpoint}`)
        return res.data
    }
}