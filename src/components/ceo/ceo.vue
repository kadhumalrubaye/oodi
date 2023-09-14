<template>
    <div id="ceoContainer" class="container   " :style="{ 'background-image': 'url(' + background + ') ', }">
        <div class="row text-center">
            <div class="row mt-5">
                <ceoCard />
            </div>
        </div>
        <div style="position: absolute;float:right; z-index: 2;">
            <img class="img-fluid " :src="greenStarImg" style="text-align: right;" width="78" height="80" />

        </div>
    </div>
</template>
  
<script lang="ts">


import image from './../../assets/img/Group2276.png'
import ceoCard from './ceoCard.vue';
import greenStarImg from './../../assets/img/greenstart.png'




export default {
    data: function () {
        return {
            background: image,
            greenStarImg: greenStarImg,
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
    background-position: right;

}
</style>  
<style></style>

 
  