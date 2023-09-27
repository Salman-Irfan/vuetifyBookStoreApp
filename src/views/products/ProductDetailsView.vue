<template>
    <div>
        <h1 class="text-center my-4 px-4">Product Details</h1>
        <div class="container mt-4 py-4 px-4">
            <!-- Display product details here -->
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Discount Percentage</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Brand</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ product.id }}</td>
                            <td>{{ product.title }}</td>
                            <td>{{ product.description }}</td>
                            <td>${{ product.price }}</td>
                            <td>{{ product.category }}</td>
                            <td>{{ product.discountPercentage }}%</td>
                            <td>{{ product.rating }}%</td>
                            <td>{{ product.stock }}%</td>
                            <td>{{ product.brand }}%</td>
                            <td>{{ product.category }}%</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Images</h3>
                <div class="text-center">
                    <div v-if="product.images && product.images.length > 0" v-for="(image, index) in product.images"
                        :key="index" class="images">
                        <img :src="image" alt="Product Image" width="250" height="200" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDetailsView",
    data() {
        return {
            product: {}, // Initialize an empty object to store the product details
        };
    },
    mounted() {
        // Get the product ID from the route parameters
        const productId = this.$route.params.id;

        // Fetch product details from the API using the product ID
        fetch(`https://dummyjson.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                // Assign the product details to the data property
                this.product = data;
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
            });
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
