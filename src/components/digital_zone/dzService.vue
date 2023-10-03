<template>
    <div class=" overflow-hidden position-relative">
        <div class="row  gx-0 align-items-center  ">
            <div id="oodImgCol" class=" col-sm-12 col-md-3">
                <img class="image-fluid" :src="img1" />

            </div>
            <div id="oodImgText" class=" col-sm-12 col-md-8  ">
                <p class="text-justify">
                    Launched
                    <strong>10+</strong>
                    first-in-market products &amp; featureswith oodi <br> application last year<br>
                    Achieved significant customer base growth in the past year<br>
                    Achieved a twofold increase in
                    net revenues in the past year<br> Achieved profitability in <strong>1.5 years</strong>
                </p>
            </div>

            <div id="digitalServiceImg" class=" col-sm-12 col-md-3">
                <img class=" " :src="zainDigitalServiceImg" />

            </div>
            <div class=" col-sm-12 col-md-8 ">
                <p>
                    Accomplished excellent growth in total <br>
                    revenues during the past year <br>
                    Significant contribution to total revenues<br>
                    Effective contribution to net revenues</p>
            </div>

            <div id="eSportsImgCol" class=" col-sm-12 col-md-3">
                <img :src="img3" />

            </div>
            <div class=" col-sm-12 col-md-8 ">
                <p>
                    Hosted <strong>20+</strong> tournaments<br>
                    Welcomed <strong>3k+</strong> participants <br> Awarded <strong>$80k</strong> in prizes</p>
            </div>
            <div id="eSportsImgCol" class=" col-sm-12 col-md-3">
                <img :src="img4" />

            </div>
            <div class=" col-sm-12 col-md-8 ">

                <p>Developed <strong>4</strong> new
                    Digital Assets in the last year <br>
                    Launched the Zain-Fi application enabling customers to
                    seamlessly <br>
                    manage their Zain-Fi accounts and devices</p>
            </div>


        </div>

        <div id="weAreZainText">
            <h1 :style="{ fontSize: '94.46px',lineHeight:'0.8' }">
                <strong>..WE ARE <br> ZAIN <br>
                    IRAQ&#39;S <br>
                    DIGITAL
                    <br>
                    FUTURE!</strong>
            </h1>
        </div>

    </div>
</template>

<script lang="ts">
import img1 from '../../assets/img/1.png'

import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/4.png'
import { zainDigitalServiceImg } from '@/models/assets_modul'

export default {
    data: function () {
        return {
            img1: img1,
            zainDigitalServiceImg,
            img3: img3,
            img4: img4,
        }
    }
}
</script>
<style scoped>
 img{
    max-width: 354px;
 }
#weAreZainText {
    
    position: absolute;
    color: #FFF;
    font-weight: 700;
    top: 30%;
    right: 100px;

}


p {
    color: #5B0AD9;
    font-size: 27.08px;


}
</style>  
<style></style>
 
