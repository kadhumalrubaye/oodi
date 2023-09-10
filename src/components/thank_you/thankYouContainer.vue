<template>
    <div class="container p-3" :style="{ 'background-image': 'url(' + thankYouImgBg + ') ' }">
        <h1>
            THANK YOU
        </h1>
        <!-- only on phone -->

        <!-- edn only on phone -->

        <p>
            Thank you for your ongoing commitment to our digital <br>
            transformation journey! Let's continue to work together to <br>
            achieve even greater success in the coming months. <br>
            We encourage you to share any thoughts, ideas, and <br>
            feedback you might have with us on the email: <br>
            digital@iq.zain.com <br>

        </p>


        <div class="row d-inline-flex mt-5">
            <div class="col ">
                <img class=" img-fluid" :src="zainLogo" alt=" zainLogo" width="194">
            </div>

            <div class="col ">
                <img class=" img-fluid" :src="zainSocilaMedia" alt=" zain social media">
            </div>
        </div>
        <br>
        <div class="row d-inline-flex mt-4">
            <div class="col ">
                <img id="oodiLogo" class=" img-fluid" :src="oodiLogo" alt=" oodiLogo" width="150">
            </div>
            <div class="col">
                <img class=" img-fluid" :src="zainSocilaMedia" alt=" zainLogo">
            </div>
        </div>

    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import thankYouImgBg from './../../assets/img/thank_you_bg.png'
import zainLogo from './../../assets/img/Zain_logo.png'
import zainSocilaMedia from './../../assets/img/social_media_icons.png'
import oodiLogo from './../../assets/img/oodi_logo.png'




export default defineComponent({
    setup() {
        return {
            thankYouImgBg: thankYouImgBg,
            oodiLogo: oodiLogo,
            zainLogo: zainLogo,
            zainSocilaMedia: zainSocilaMedia,


        };
    },

})
</script>

<style scoped>
.container {
    background-color: #5B0AD9;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
}


h1 {
    color: #FFF;

    font-size: 10vmin;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

p {
    color: #F9FDF9;


    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 3vmin;
}

/* Small screens (up to 576px) */
@media (max-width: 576px) {



    img {
        max-width: 60%;
    }
}

/* Medium screens (577px to 768px) */
@media (min-width: 577px) and (max-width: 768px) {




    img {
        max-width: 60%;
    }
}

/* Large screens (769px to 992px) */
@media (min-width: 769px) and (max-width: 992px) {


    img {
        max-width: 50%;
    }


}

/* Extra-large screens (wider than 992px) */
@media (min-width: 993px) {}
</style>