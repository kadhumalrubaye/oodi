<template>
    <div style=" background-color: #6BDD6B;">
        <div :style="{ 'background-image': 'url(' + dzImage + ') ' }">
            <dzHeading />
            <br>
            <dzService />
        </div>
    </div>
</template>

<script lang="ts" >
import dzImage from '../../assets/img/Layer77.png'
import dzHeading from './dzHeading.vue';
import dzService from './dzService.vue'
export default {
    data: function () {
        return {
            dzImage: dzImage
        }
    },
    components: {
        dzHeading,
        dzService

    }

}
</script>

<style scoped>
div {

    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
</style>