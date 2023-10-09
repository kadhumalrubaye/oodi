<template>
    <div class="    position-relative">


        <div class=" row " style="   background-color: #6BDD6B;">
            <div class=" container" :style="{ 'background-image': 'url(' + dzImage + ') ' }">
                <dzHeading />

                <dzService />
            </div>
        </div>
    </div>
</template>

<script lang="ts" >
import dzImage from '../../assets/img/Layer77.png'
import dzHeading from './dzHeading.vue';
import dzService from './dzService.vue'
import halfCircleWhite from '../../assets/img/halfcircle.png'
import halfCircleGreen from '../../assets/img/halfgreencircle.png'
export default {
    data: function () {
        return {
            halfCircleWhite: halfCircleWhite,
            halfCircleGreen: halfCircleGreen,
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
    background-position: right top;
}
</style> 
