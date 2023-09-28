<template>
  <v-container>
    <!-- Search bar -->
    <v-text-field v-model="searchText" label="Search" outlined dense class="mt-4" @input="show = true"></v-text-field>

    <!-- Products Grid -->
    <v-row v-if="show">
      <v-col v-for="(book, index) in filteredAndGroupedProducts" :key="index" cols="12" sm="6" md="4" lg="3">
        <!-- dynamic routing -->
        <v-card class="mb-4 custom-card">
          <!-- Book Cover Image -->
          <v-img :src="book.cover_image" height="200"></v-img>
          <!-- title -->
          <v-card-title class="red-text">
            <!-- Book Title -->
            Title:
            {{ book.title }}
          </v-card-title>

          <v-card-text>
            <!-- Book Author -->
            <v-card-subtitle class="subheading"> Author: {{ book.author }}</v-card-subtitle>
            <!-- Book Description -->
            <p class="caption">{{ book.description.substr(0, 50) }}... </p>
          </v-card-text>
          <!-- price -->
          <v-card-actions>
            <!-- Book Price -->
            <div class="body-2">{{ 'Price: $' + book.price }}</div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GetAllBooks from "../services/apiIntegrations/booksApis/getAllBooks";

export default {
  name: "HomeView",
  data: () => ({
    show: false,
    products: [],
    searchText: "",
  }),
  computed: {
    // Filtered and grouped products based on search text
    filteredAndGroupedProducts() {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  async created() {
    try {
      // Call the getAllBooks method to fetch books data
      const response = await GetAllBooks.getAllBooks();
      this.products = response.books;
      this.show = true;
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  },
};
</script>

<style scoped>
.v-card-text {
  padding: 8px;
  /* Add padding for spacing inside each card */
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

.red-text {
  color: #FF0C49;
}
</style>
