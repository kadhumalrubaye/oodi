

<template>
    <div id="teamImageGridRow" class="row position-relative">
        <div id="scrollContainer" v-for="img in imagesUrl" class=" col-4 col-md-2 ">
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
    position: absolute;

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
<!-- mobile view -->
<style scoped>
@media(max-width: 768px) {
    #indigoBigHalfStart {
        display: none;
        position: absolute;
        max-width: 10%;
        right: -1px;
        bottom: 50px;

    }

    #teamImageGridRow {
        overflow: auto; 
        
 max-height: 500px;
        padding: 8%;
        padding-left: 10%;
        padding-right: 10%;
       
    }
    ::-webkit-scrollbar {
    width: 12px; /* Adjust the width */
}

/* This targets the thumb (the draggable part) */
::-webkit-scrollbar-thumb {
    background-color: #5B0AD9; /* Color of the thumb */
    border-radius: 6px; /* Roundness of the thumb */
}

/* This targets the track (the non-draggable part) */
::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of the track */
}

    #profileImage {

        border-color: #6BDD6B;
        padding: 1%;
        border-style: solid;
        border-radius: 50%;
    }

}

</style>
  