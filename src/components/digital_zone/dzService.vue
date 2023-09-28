<template>
    <div class="container">
        <div class="row position-relative">
            <div class="col">
                <div class="row">

                    <div class="row  ">
                        <div id="oodImgCol" class="col-xl-3 col-xxl-3">
                            <picture><img class="image-fluid" :src="img1" style="position: relative;" width="354" />
                            </picture>
                        </div>
                        <div id="oodImgText" class=" col  ">
                            <p class="text-justify">
                                Launched
                                <strong>10+</strong>
                                first-in-market products &amp; featureswith oodi <br> application last year<br>
                                Achieved significant customer base growth in the past year<br>
                                Achieved a twofold increase in
                                net revenues in the past year<br> Achieved profitability in <strong>1.5 years</strong>
                            </p>
                        </div>
                    </div>

                    <div class="row">
                        <div id="eSportsImgCol" class="col-xl-3 col-xxl-3">
                            <picture><img :src="img2" width="354" />
                            </picture>
                        </div>
                        <div class="col digitalServiceText" id="digitalServiceText">
                            <p>
                                Accomplished excellent growth in total <br>
                                revenues during the past year <br>
                                Significant contribution to total revenues<br>
                                Effective contribution to net revenues</p>
                        </div>
                    </div>
                    <div class="row">
                        <div id="eSportsImgCol" class="col-xl-3 col-xxl-3">
                            <picture><img :src="img3" width="354" />
                            </picture>
                        </div>
                        <div class="col digitalServiceText" id="digitalServiceText">
                            <p>
                                Hosted <strong>20+</strong> tournaments<br>
                                Welcomed <strong>3k+</strong> participants <br> Awarded <strong>$80k</strong> in prizes</p>
                        </div>
                    </div>
                    <div class="row">
                        <div id="eSportsImgCol" class="col-xl-3 col-xxl-3">
                            <picture><img :src="img4" width="354" />
                            </picture>
                        </div>
                        <div class="col digitalServiceText" id="digitalServiceText">

                            <p>Developed <strong>4</strong> new
                                Digital Assets in the last year <br>
                                Launched the Zain-Fi application enabling customers to
                                seamlessly <br>
                                manage their Zain-Fi accounts and devices</p>
                        </div>
                    </div>



                </div>

            </div>

            <div   id="weAreZainText">
                <h1 :style="{fontSize:'94.46px'}">
                    <strong>..WE ARE <br> ZAIN <br>
                        IRAQ&#39;S <br>
                        DIGITAL
                        <br>
                        FUTURE!</strong>
                    </h1>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/4.png'

export default {
    data: function () {
        return {
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
        }
    }
}
</script>
<style scoped>
 



#weAreZainText {
    position: absolute;
    color: #FFF;
    font-weight: 700;
    text-align: left;
    left: 65%;
    top: 15%;
    
}


p {
    color: #5B0AD9;
  font-size: 27.08px;


}


</style>  
<style></style>
 
