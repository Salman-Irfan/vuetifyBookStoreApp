// /src/services/apiIntegrations/productsApis/getSingleProduct.js
import axios from "axios";
import BASE_URL from "../baseUrl";

const endpoint = "/products";

export default class GetSingleProducts {
    static async getSingleProduct(productId) {
        try {
            const res = await axios.get(`${BASE_URL}${endpoint}/${productId}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
}
