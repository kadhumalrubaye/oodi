<template>
    <div class="container " :style="{ backgroundImage: `url(${awardBg})` }">
        <img id="dizleeCup" width="200" class=" float-end img-fluid" :src="dizleeCup" alt=" dezlee cup">
        <img id="awardCup" width="200" class=" float-start img-fluid" :src="awardCup" alt=" award cup">
        <div class="row text-center">
            <h1>2023</h1>
            <h2>AWARDS</h2>
            <p>
                Zain Iraq Digital Services team won the award for the Most
                <br>
                <strong>
                    Disruptive Operator in Zain Group Annual Digital Forum 2023.
                </strong>
            </p>
        </div>
        <div class="row"></div>
    </div>
</template>

 
<script lang="ts">
import awardBg from './../../assets/img/2023_award_object.png'
import awardCup from './../../assets/img/2023_award_cup.png'
import dizleeCup from './../../assets/img/Dizlee_Award copy.png'
export default {
    data: function () {
        return {
            awardBg: awardBg,
            dizleeCup: dizleeCup,
            awardCup: awardCup,



        }
    }
}
</script>
<style scoped>
.container {
    background-color: #5B0AD9;
    ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;



}

img {
    margin-bottom: -25%;
}

p {
    color: #FFF;

    font-size: 29.167px;
    font-style: normal;
    line-height: normal;
}

h1 {
    -webkit-text-stroke: 2px #FFF;
    color: #5B0AD9;

    font-size: 110.402px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

h2 {
    color: #FFF;

    font-size: 110.402px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}


/* for phone */
@media only screen and (max-device-width: 768px) {
    img {
        max-width: 20%;
        margin-top: 35%;
        padding: 0%;
    }

    #awardCup {
        max-width: 20%;
        margin-top: 0%;
        padding: 0%;
    }

    #dizleeCup {
        max-width: 15%;
        margin-top: 0%;
        padding: 0%;
    }

    h1 {
        font-size: 50px;
    }

    h2 {
        font-size: 40px;
    }

    p {
        font-size: 10px;
        text-align: center;

    }
}

/* for tablet */
@media only screen and (min-device-width: 768px) {
    img {
        max-width: 20%;
        margin: 0%;

    }

    h1 {
        font-size: 100px;
    }

    h2 {
        font-size: 80px;
    }

    h5 {
        font-size: smaller;
    }
}
</style>
<style></style>