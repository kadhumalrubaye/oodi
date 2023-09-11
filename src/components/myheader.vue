



<template>
    <header>
        <img class="img-fluid object-fit-cover" :src="headerImage" width="1740.61px" alt="header" />
    </header>
</template>
  

<script lang="ts">
import image from "../assets/img/header.png"
import VueLazyload from "vue-lazyload";




export default {
    data: function () {
        return {

            headerImage: image
        }

    },
    components: {
        VueLazyload,
    }
}
</script>

<style scoped>
img {
    width: 1740.61px;
}
</style>  
<style></style>