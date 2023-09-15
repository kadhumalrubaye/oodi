

<template>
    <div id="teamImageGridRow" class="row">
        <div v-for="img in imagesUrl" class="col-lg-2 col-md-2 col-sm-4 col-6 mb-4">


            <img class="img-fluid" :src="img">
        </div>
        <!-- <div v-for="img in ceoImages" class="col-sm-2" :style="{ margin: 100 + 'px', }">
                <img class="rig-column img" :src="img">
            </div> -->
    </div>
</template>
  
<script lang="ts">


import ceoImage1 from './../../assets/img/ava2.png'
import { desc } from '../../dumpCeoDesc'





let imagesUrl = import.meta.glob("@/assets/img/Profile_Pics/*.(jpg|JPG|png|PNG|svg)", { as: "url", eager: true });


export default {


    data: function () {
        return {
            imagesUrl: imagesUrl,
            ceoImage1: ceoImage1,
            ceoDesc: desc,

            images: [],


        }


    }, methods: {

        loadImages() {


        },
    }, computed: {

    }

};
</script>
  
<style scoped>
#teamImageGridRow {
    padding: 30px;
}

img {

    border-color: #6BDD6B;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
}

@media (max-width: 768px) {
    img {

        border-color: #6BDD6B;
        border-width: 3px;
        border-style: solid;
        border-radius: 50%;
    }
}
</style>  
<style></style>
  