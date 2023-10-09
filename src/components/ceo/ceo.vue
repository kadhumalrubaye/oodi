<template>
    <div id="ceoContainer" class="   position-relative mb-5  ">
        <img id="ceo_background" class="  img-fluid " :src="ceo_background" alt=" bg imag" width="970" height="1444">
        <img id="big_green_ball" class=" img-fluid " :src="big_green_ball" alt=" big_green_ball">
        <img id="header_gren_dots" class=" img-fluid " :src="header_gren_dots" alt=" header_gren_dots">
        <img id="bottom_ceo_inidago_wave" class=" img-fluid " :src="bottom_ceo_inidago_wave" alt=" bottom_ceo_inidago_wave">
        <img id="_element_design_purpl" class="  img-fluid " :src="_element_design_purpl" alt=" _element_design_purpl">
        <div class="container ">
            <div class="row gx-5 flex-row-reverse">
                <ceoCard />
            </div>
        </div>
        <div style="position: absolute; z-index: 2; right: -1px;">
            <img class="img-fluid " :src="greenStarImg" width="78" height="80" />
        </div>
    </div>
</template>
  
<script lang="ts">


import image from './../../assets/img/Group2276.png'
import ceoCard from './ceoCard.vue';
import greenStarImg from './../../assets/img/greenstart.png'
import ceo_background from './../../assets/img/ceo_background.png'
import big_green_ball from '@/assets/img/header/header_green_ball.png'
import header_gren_dots from '@/assets/img/header/header_gren_dots.png'
import bottom_ceo_inidago_wave from '@/assets/img/bottom_ceo_inidago_wave.png'
import _element_design_purpl from '@/assets/img/_element-design_purpl.png'





export default {
    data: function () {
        return {
            background: image,
            greenStarImg: greenStarImg,
            ceo_background,
            big_green_ball,
            header_gren_dots,
            bottom_ceo_inidago_wave,
            _element_design_purpl
        }
    },
    components: {
        ceoCard,
    },
};
</script>
  
<style scoped>
#_element_design_purpl {
    position: absolute;
    top: 50%;
    z-index: -1;
}

#bottom_ceo_inidago_wave {
    position: absolute;
    bottom: -10%;



}

#header_gren_dots {
    position: absolute;
    margin: 40px 20px;
}

#big_green_ball {
    position: absolute;
    right: 35%;
    top: -100px;
    z-index: -3;

}

#ceo_background {
    position: absolute;
    right: -1px;
    max-width: 100%;
    z-index: -4;

}

#ceoContainer {

    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

}
</style>  
