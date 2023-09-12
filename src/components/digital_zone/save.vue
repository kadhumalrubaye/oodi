<template>
    <div>

        <div class="row  ">
            <div id="oodImgCol" class="col-xl-3 col-xxl-3 outSideCol">
                <picture><img class="image-fluid" :src="img1" style="position: relative;" width="354" />
                </picture>
            </div>
            <div id="oodImgText" class=" col ">
                <p>
                    Launched
                    <strong>10+</strong>
                    first-in-market products &amp; featureswith oodi <br> application last year<br>
                    Achieved significant customer base growth in the past year<br>
                    Achieved a twofold increase in
                    net revenues in the past year<br> Achieved profitability in <strong>1.5 years</strong>
                </p>
            </div>
        </div>

        <!-- middle part -->

        <div id="middleSection" class="row position-relative" style="margin-bottom: -20px;">
            <!-- middle part col 1 -->
            <div class="col">
                <div class="row">
                    <div id="digitalServiceImg" class="col-xl-3 col-xxl-3">
                        <picture><img class="d-xl-flex justify-content-xl-end align-items-xl-end" :src="img2"
                                style="width: 354px;height: 228px;position: relative;transform: translate(-34px) translateY(-42px);"
                                width="354" height="228" /></picture>
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
                        <picture><img :src="img3" style="width: 354px;height: 228px;position: relative;" width="354"
                                height="228" /></picture>
                    </div>
                    <div class="col digitalServiceText" id="digitalServiceText">
                        <p>
                            Hosted 20+ tournaments<br>
                            Welcomed 3k+ participants <br> Awarded $80k in prizes</p>
                    </div>
                </div>
            </div>
            <!-- middle part col2 -->
            <div class="col position-absolute text-end" id="weAreZainText">
                <h1 style="font-size: 63px;color: var(--bs-white);"><strong>..WE ARE <br> ZAIN <br> IRAQ&#39;S <br> DIGITAL
                        <br>
                        FUTURE!</strong></h1>
            </div>
        </div>
        <div class="row">
            <div id="digitalFactoryImgCol" class="col-xl-3 col-xxl-3 outSideCol">
                <picture><img id="digitalFactoryImg" :src="img4" style="width: 354px;height: 228px;position: relative; "
                        width="354" />
                </picture>
            </div>
            <div id="digitalFactoryTextCol" class="col">
                <p>Developed 4 new
                    Digital Assets in the last year Launched the Zain-Fi application enabling customers to
                    seamlessly manage their Zain-Fi accounts and devices</p>
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
img {
    margin-left: -50px;
}

.digitalServiceText {
    margin-left: 100px;
}

#weAreZainText {
    color: #FFF;

    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    float: right;
    margin-right: -80px;
}





p {
    color: #5B0AD9;
    font-size: 20px;
    margin-left: -20px;



}

#middleSection p {
    margin-left: -50px;
}


/* Styles for screens smaller than 768px (typically mobile devices) */

@media (max-width: 768px) {

    #dzRow {
        text-align: center;
        justify-content: center;

    }

    #weAreZainText {
        display: none;

    }

    .digitalServiceText {
        margin-left: 0px;

    }

    #middleSection p {

        margin-left: 10px;
    }

    p {

        color: #5B0AD9;
        text-align: left;

        font-size: medium;
        margin-top: -40px;
        margin-left: 5%;
    }



    /* Styles for screens between 768px and 991px (typically tablets) */
    @media (min-width: 768px) and (max-width: 991px) {
        #weAreZainText {
            display: none;

        }
    }

    /* Styles for screens 992px and larger (typically desktops) */
    @media (min-width: 992px) {}

    @media (max-width: 1200px)and (min-width: 1200px) {
        #weAreZainText {
            display: none;
        }
    }
}
</style>  
<style></style>