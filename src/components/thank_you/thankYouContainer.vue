<template>
    <div :style="{ backgroundColor: '#5B0AD9' }" class=" position-relative pb-5   ">
        <img class="d-none d-lg-block d-xl-block" :src="whitDotes" alt="whitDotes" width="326"
            :style="{ marginTop: '0%', marginBottom: '2%', marginLeft: '5%' }">
        <div class="container    " :style="{ 'background-image': 'url(' + thankYouImgBg + ') ', paddingLeft: '5%' }">

            <h1>
                THANK YOU
            </h1>
            <!-- only on phone -->

            <!-- edn only on phone -->

            <p>
                Thank you for your <strong>ongoing commitment to our digital <br>
                    transformation journey! Let's continue to work together to</strong> <br>
                achieve even greater success in the coming months. <br>
                We encourage you to <strong>share any thoughts, ideas, and <br>
                    feedback you might have with us on the email: <br>
                    digital@iq.zain.com</strong> <br>

            </p>



            <img id="zainLogo" class=" img-fluid mt-5  " :src="zainLogo" alt=" zain social media">
            <a href="#">
                 <img id="zainSocilaMedia" class=" img-fluid mt-5   " :src="zainSocilaMedia" alt=" zain social media"
                    :style="{ marginLeft: '10%' }">
            </a>
            <br>
            <img id="oodiLogo" class=" img-fluid mt-5" :src="oodiLogo" alt=" zain social media">

            <a href="#">
                <img id="oodiSocialMediaAccountLogo" class=" img-fluid mt-5" :src="oodiSocialMediaAccountLogo" alt=" zain social media"
                    :style="{ marginLeft: '10%' }">
            </a>


        </div>


        <img :src="header_ellips" class=" position-absolute  d-none d-lg-block d-xl-block"
            :style="{ right: '-1px', top: '10%', filter: 'hue-rotate(75deg)' }">
        <img :src="header_green_ball" class="d-none d-lg-block d-xl-block position-absolute" :style="{ right: '-5%', bottom: '20%' }" width="340">
        <img :src="header_white_start_series" class="d-none d-lg-block d-xl-block position-absolute" :style="{ right: '5%', top: '20%' }" width="104">
        <img :src="header_cutted_circule" class="d-none d-lg-block d-xl-block position-absolute" :style="{ right: '-5%', bottom: '35%' }" width="239">
        <img :src="header_small_green_half_circle" class="d-none d-lg-block d-xl-block position-absolute" :style="{ right: '15%', bottom: '58%' }"
            width="124">
        <img :src="header_white_half_circul" class="d-none d-lg-block d-xl-block position-absolute" :style="{ right: '11%', bottom: '51%' }"
            width="133">
        <img :src="greenDots" class="d-none d-lg-block d-xl-block position-absolute"
            :style="{ right: '18%', bottom: '40%', transform: 'rotate(90deg)' }" width="178">


    </div>
</template>

<script lang="ts" setup>

import thankYouImgBg from './../../assets/img/thank_you_bg.png'
import zainLogo from './../../assets/img/Zain_logo.png'
import zainSocilaMedia from './../../assets/img/social_media_icons.png'
import oodiLogo from './../../assets/img/oodi_logo.png'
import { whitDotes, greenDots, oodiSocialMediaAccountLogo } from '../../models/assets_modul'
//group

import header_ellips from '@/assets/img/header/header_ellips.png'
import header_green_ball from '@/assets/img/header/header_green_ball.png'
import header_cutted_circule from '@/assets/img/header/header_cutted_circule.png'
import header_small_green_half_circle from '@/assets/img/header/header_small_green_half_circle.png'
import header_white_half_circul from '@/assets/img/header/header_white_half_circul.png'
import header_white_start_series from '@/assets/img/header/header_white_start_series.png'







</script>

<style scoped>
.container {

    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
}


h1 {
    color: #FFF;

    font-size: 110.4px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

p {
    color: #F9FDF9;


    line-height: 35.3px;
    font-weight: 400;

    font-size: 29.17px;
}
</style>  
<style scoped>
@media(max-width:768px){
#oodiLogo{
    max-width: 20% !important;
    margin-left: 10%;
}
    #zainLogo,#oodiLogo{
        margin-top: 5% !important;
        max-width: 30%;
    }
    #zainSocilaMedia,#oodiSocialMediaAccountLogo{
        max-width: 30%;
        margin-top: 5% !important;
    }
.container {

background-repeat: no-repeat;
background-size: contain;
background-position: bottom;
}


h1 {
color: #FFF;

font-size: 3rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

p {
color: #F9FDF9;

 
font-weight: 400;
font-size: 0.8rem;
line-height: 130%;
}
}
</style> 