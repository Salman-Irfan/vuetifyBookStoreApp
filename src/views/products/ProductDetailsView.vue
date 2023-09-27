<template>
    <v-container>
        <h1 class="text-center my-4 px-4">Product Details</h1>
        <v-row>
            <v-col cols="12" md="6">
                <!-- Product Images -->
                <div class="text-center">
                    <div v-if="product.images && product.images.length > 0" v-for="(image, index) in product.images"
                        :key="index" class="images">
                        <v-img :src="image" alt="Product Image" width="250" height="200" />
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <!-- Product Metadata -->
                <div>
                    <h3>Product Information</h3>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>ID: {{ product.id }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Title: {{ product.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Category: {{ product.category }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Description: {{ product.description }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Rating: {{ product.rating }}%</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Price: ${{ product.price }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Stock: {{ product.stock }}%</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import GetSingleProducts from '../../services/apiIntegrations/productsApis/getSingleProduct';
export default {
    name: "ProductDetailsView",
    data() {
        return {
            product: {}, // Initialize an empty object to store the product details
        };
    },
    async mounted() {
        const productId = this.$route.params.id;
        try {
            const productData = await GetSingleProducts.getSingleProduct(productId);
            this.product = productData;
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    },
};
</script>

<style scoped>
.images {
    display: inline-block;
    padding: 10px;
    border: 2px solid black;
    margin: 5px;
}

@media (max-width: 767px) {
    .images {
        display: block;
        /* Display each image on a new line */
        text-align: center;
        /* Center-align the image */
        margin: 0 auto;
        /* Center-align the image horizontally */
        padding: 10px;
        border: 2px solid black;
        margin: 5px;
        width: 100%;
        position: relative;
        left: 50%;
    }
}
</style>
