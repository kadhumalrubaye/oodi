

<template>
    <div id="teamImageGridRow" class="row position-relative">
        <div v-for="img in imagesUrl" class="col-lg-2 col-md-2 col-sm-4 col-6 mb-4">
            <v-progress-circular v-if="!img" indeterminate :size="67"></v-progress-circular>
            <img id="profileImage" class="img-fluid" v-else :src="img" loading="lazy" placeholder=" loadding ">


        </div>
        <img id="indigoBigHalfStart" class="img-fluid" :src="indigoBigHalfStart" loading="lazy">

    </div>
</template>
  
<script lang="ts">




import { VProgressCircular } from 'vuetify/components';
import indigoBigHalfStart from '@/assets/img/indiago_half_big_star.png'




let imagesUrl = import.meta.glob("@/assets/img/Profile_Pics/*.(jpg|JPG|png|PNG|svg)", { as: "url", eager: true });


export default {
    data: function () {
        return {
            imagesUrl: imagesUrl,

            indigoBigHalfStart,

        }


    }, methods: {

        loadImages() {
            return ""

        },
    }, computed: {

    },
    components: {

        VProgressCircular,
    }


};
</script>
  
<style scoped>
#indigoBigHalfStart {
    position: absolute;
    max-width: 10%;
    right: -1px;
    bottom: 20px;

}

#teamImageGridRow {
    padding: 8%;
    padding-left: 10%;
    padding-right: 10%;
}

#profileImage {

    border-color: #6BDD6B;

    border-style: solid;
    border-radius: 50%;
}
</style>  
<style></style>
  