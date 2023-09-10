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
                                Hosted 20+ tournaments<br>
                                Welcomed 3k+ participants <br> Awarded $80k in prizes</p>
                        </div>
                    </div>
                    <div class="row">
                        <div id="eSportsImgCol" class="col-xl-3 col-xxl-3">
                            <picture><img :src="img4" width="354" />
                            </picture>
                        </div>
                        <div class="col digitalServiceText" id="digitalServiceText">

                            <p>Developed 4 new
                                Digital Assets in the last year Launched the Zain-Fi application enabling customers to
                                seamlessly manage their Zain-Fi accounts and devices</p>
                        </div>
                    </div>



                </div>

            </div>

            <div class="col position-absolute text-end " id="weAreZainText">
                <h1 style=" color: var(--bs-white);"><strong>..WE ARE <br> ZAIN <br>
                        IRAQ&#39;S <br>
                        DIGITAL
                        <br>
                        FUTURE!</strong></h1>
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
img {}



#weAreZainText {
    color: #FFF;
    font-family: Inter;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;

    text-align: left;
    justify-content: start;

    margin-top: 20%;




}

p {
    color: #5B0AD9;
    font-size: 3vmin;


}

@media (min-width: 320px) {
    #weAreZainText {
        display: none;

    }

    img {
        max-width: 75%;
    }
}

@media (min-width: 425px) {
    #weAreZainText {
        display: none;
    }
}

@media (min-width: 768px) {

    #weAreZainText {
        display: block;
        margin-top: 60%;
    }

    #weAreZainText h1 {
        font-size: 8vmin;
    }

    p {

        color: #5B0AD9;
        text-align: left;
        font-size: 2vmin;


    }

    img {
        max-width: 50%;
    }
}

@media (min-width: 992px) {
    #weAreZainText {
        margin-top: 55%;
        display: block;

    }

    #weAreZainText h1 {
        font-size: 70px;
    }

    p {

        color: #5B0AD9;
        text-align: left;
        font-size: 3vmin;



    }

}

@media (min-width: 1024px) {
    #weAreZainText {
        margin-top: 50%
    }

    p {}

    #weAreZainText h1 {
        font-size: 70px;
    }
}


@media (min-width: 1200px) {
    #weAreZainText {
        margin-top: 130px;
    }

    #weAreZainText h1 {
        font-size: 60px;
    }

    p {

        margin-left: -50px;
    }

    img {
        max-width: 100%;
    }
}
</style>
 
