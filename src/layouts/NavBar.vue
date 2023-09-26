<template>
    <v-app>
        <v-app-bar app color="black">
            <v-toolbar-title>
                <v-icon>mdi-library</v-icon>
                LiteraryVue
            </v-toolbar-title>

            <!-- search bar -->
            <v-spacer></v-spacer>
            <!-- Search Bar -->
            <v-text-field v-model="searchQuery" placeholder="Search..." prepend-inner-icon="mdi-magnify"
                class="pa-4"></v-text-field>

            <!-- cart -->
            <v-spacer></v-spacer>
            <v-btn color="yellow" to="/cart">
                <v-icon>mdi-cart</v-icon>
            </v-btn>
            <!-- login -->
            <v-btn color="yellow" to="/login">
                <v-icon>mdi-login</v-icon> Login
            </v-btn>
            <!-- sign up -->
            <v-btn color="yellow" to="/signup">
                <v-icon>mdi-account-plus</v-icon> Sign Up
            </v-btn>

        </v-app-bar>

        <v-main>
            <!-- Your main content goes here -->
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'NavBar', // Enclosed in quotes
    data() {
        return {
            drawer: false, // Controls the navigation drawer
        };
    },
};
</script>
