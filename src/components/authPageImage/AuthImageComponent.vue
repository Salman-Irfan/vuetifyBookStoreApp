<template>
    <!-- Left Half - Image -->
    <v-col cols="6" class="left-image">
        <img src="../../assets/images/bookPicture.jpeg" alt="Book Image" />
    </v-col>
</template>

<script>
export default {
    name: "AuthImageComponent"
}
</script>

<style scoped>
.left-image img {
    border: 5px solid black;
    width: 100%;
    height: 75%;
    margin-top: 2.5%;
}
</style>