<template>
  <v-layout>
    <v-main>
      <v-container>
        <!-- search bar row -->
        <v-row>
          <v-col cols="12">
            <!-- search bar -->
            <v-text-field v-model="searchText" variant="outlined" label="Search"
              prepend-icon="mdi-magnify"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <!-- Display filtered Products in a horizontal scrollable container -->
      <!-- Product Slider -->
      <v-carousel show-arrows="hover">
        <!-- Display filtered Products in a carousel -->
        <!-- to display 4 products at a time -->
        <template v-for="(productGroup) in groupedProducts" :key="index">
          <v-carousel-item class="carousel-item">
            <v-row>
              <!-- to loop through products -->
              <v-col v-for="product in productGroup" :key="product.id" cols="12" md="3" sm="6">
                <!-- dynamic route to that product detail -->
                <v-card class="mx-2 custom-card">
                  <!-- product thumbnail -->
                  <router-link class="tdNone" :to="'/products/details/' + product.id">
                    <v-img :src="product.thumbnail" height="200px" cover></v-img>
                    <!-- title -->
                    <v-card-title>title: {{ product.title }}</v-card-title>
                  </router-link>
                  <!-- price, ratings, and stars -->
                  <v-card-subtitle class="flex-container">
                    <div class="left-content">
                      <!-- price -->
                      <v-btn color="red">Price$: {{ product.price }}</v-btn>
                    </div>
                    <div class="right-content">
                      <!-- ratings -->
                      <p class="yellow-star">Ratings:</p>
                      <!-- stars -->
                      <div class="star-container yellow-star" v-html="ratingStars(product.rating)"></div>
                    </div>
                  </v-card-subtitle>
                  <!-- card actions => cart / show description -->
                  <v-card-actions>
                    <!-- pending to add cart page route -->
                    <router-link to="/login">
                      <!-- cart -->
                      <router-link class="tdNone" :to="'/products/addcart/' + product.id">
                        <v-btn color="yellow-lighten-1" variant="text" prepend-icon="mdi-cart"> Add to Cart </v-btn>
                      </router-link>
                    </router-link>
                    <!-- description -->
                    <v-spacer></v-spacer>
                    <v-btn color="yellow-lighten-2" @click="show = !show" >Description
                      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        ></v-btn>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <!-- show = true show description -->
                    <v-container v-show="show">
                      <v-divider></v-divider>
                      <v-card-text v-model="description">
                        <strong>Description:</strong>{{ product.description }}
                      </v-card-text>
                    </v-container>
                  </v-expand-transition>
                </v-card>

              </v-col>
            </v-row>
          </v-carousel-item>
        </template>
      </v-carousel>
      <!-- End of Product Slider -->
      <!-- End of horizontal scrollable container -->
    </v-main>
  </v-layout>
</template>

<script>
import GetAllProducts from "../services/apiIntegrations/productsApis/getAllProducts"
export default {
  name: "HomeView",
  data: () => ({
    show: false,
    products: [],
    searchText: "",
  }),
  // computed
  computed: {
    filteredProducts() {
      // Filter products based on searchText (title or description)
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    groupedProducts() {
      // Group filteredProducts into arrays of 4 products each
      const grouped = [];
      for (let i = 0; i <= this.filteredProducts.length; i += 4) {
        grouped.push(this.filteredProducts.slice(i, i + 4));
      }
      return grouped;
    },
    ratingStars() {
      return (rating) => {
        const starsHTML = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
          starsHTML.push('<i class="mdi mdi-star yellow-star"></i>');
        }

        if (halfStar) {
          starsHTML.push('<i class="mdi mdi-star-half yellow-star"></i>');
        }

        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        for (let i = 0; i < emptyStars; i++) {
          starsHTML.push('<i class="mdi mdi-star-outline yellow-star"></i>');
        }

        return starsHTML.join('');
      };
    },

  },
  async created() {
    const response = await GetAllProducts.getAllProducts();
    this.products = response.products; // Access the 'products' property
    console.log(this.products);
  },
};
</script>
<style scoped>
.v-card-text {
  padding: 8px;
  /* Add padding for spacing inside each card */
}

.d-flex {
  display: inline-block;
  border: 1px solid #000;
  overflow-x: scroll;
  width: 10000px;
}

.custom-card {
  border: 1px solid #000;
  background-color: black;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0px;
  margin: 0px;
  max-width: 300px;
  /* You can adjust this value as needed */
  margin-right: 20px;
}
.tdNone{
  text-decoration: none;
}
.red-text {
  color: #FF0C49;
}

.blue-text {
  color: blue;
}

.yellow-star {
  color: #ffea29;
  font-size: 18px;
  /* Adjust the size of the stars */
}

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-content {
  flex: 1;
}

.right-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.star-container {
  display: inline-block;
  /* Display stars horizontally */
}

.overflow-x-auto {
  overflow-x: auto;
  /* Enable horizontal scrolling */
  overflow-y: hidden;
  /* Disable vertical scrolling */

}
</style>