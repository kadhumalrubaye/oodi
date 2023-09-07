<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 d-none d-md-block">
                <div class="container"><img :src="halfCircleWhite" style="margin-bottom: -196px;margin-left: 32px;" /><img
                        :src="halfCircleGreen" style="margin-bottom: -144px;margin-left: -236px;" />
                </div>
            </div>
            <div class="col-sm-12 d-md-none ">
                <div class="container"><img height="120" :src="halfCircleWhite"
                        style="margin-bottom: -100px;margin-left: -1px;" />
                    <img :src="halfCircleGreen" height="50" style="margin-bottom: -75px;margin-left: -100px;" />
                </div>
            </div>
        </div>

        <div class=" container " style="   background-color: #6BDD6B;">
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
    background-position: right;
}
</style>