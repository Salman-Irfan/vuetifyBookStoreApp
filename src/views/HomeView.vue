<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="(product, index) in products.products" :key="index" md="3" sm="6">
            <v-card class="cardHeight">
              <!-- Display product image -->
              <v-img :src="product.images[0]" alt="Product Image" class="image"></v-img>
              <!-- title -->
              <v-card-title>Title: {{ product.title }}</v-card-title>
              <!-- Limit the description to 50 characters -->
              <v-card-text class="cardText">
                <!-- bold the description -->
                <strong> Description: </strong>
                {{ product.description.substring(0, 50) + "..." }}
              </v-card-text>
              <!-- category -->
              <v-card-text class="cardText"><strong> Category: </strong> {{ product.category }}</v-card-text>
              <!-- price -->
              <v-card-text class="cardText"><strong> Price: </strong> ${{ product.price }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import GetAllProducts from "../services/apiIntegrations/productsApis/getAllProducts"
export default {
  name: "HomeView",
  data() {
    return {
      products: [],
    };
  },
  async created() {
        this.products = await GetAllProducts.getAllProducts()
  },
};
</script>

<style scoped>
.cardHeight {
  height: 600px;
}

.cardText{
  padding: 0px 10px;
}
.image {
  height: 70%;
  box-shadow: 5px 5px 5px black;
}
</style>
