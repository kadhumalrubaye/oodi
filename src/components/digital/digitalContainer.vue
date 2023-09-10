<template>
    <div class="container">
        <digitalHeading />

        <digitalServices />

    </div>
</template>

<script lang="ts" >
import digitalHeading from './digitalHeading.vue';
import digitalServices from './digitalServices.vue';
export default {
    components: {
        digitalHeading,
        digitalServices
    }

}
</script>


<style scoped></style>