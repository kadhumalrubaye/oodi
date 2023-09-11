<template>
    <div id="ceoContainer" class="container" :style="{ 'background-image': 'url(' + background + ') ' }">
        <div class="row text-center">
            <div class="row mt-5">
                <ceoCard />
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">


import image from './../../assets/img/Group2276.png'

import ceoCard from './ceoCard.vue';



export default {
    data: function () {
        return {
            background: image,
        }
    },
    components: {

        ceoCard,



    },
};
</script>
  
<style scoped>
#ceoContainer {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 1000px;
}
</style>  
<style></style>

 
  