



<template>
    <header>


        <v-lazy-image src="http://lorempixel.com/400/200/" />

    </header>
</template>
  

<script lang="ts">
import image from "../assets/img/header.png"
import imageLazyLoading from "./util/imageLazyLoading.vue";




export default {
    data: function () {
        return {

            headerImage: image
        }

    },
    components: {
        imageLazyLoading,
    }
}
</script>

<style scoped>
img {
    width: 1740.61px;
}
</style>  
<style></style>