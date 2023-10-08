<template>
    <div id="container"
        :style="{ backgroundImage: `url(${awardBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top' }">
        <div class="container position-relative pb-5 pt-5 ">
            <img id="dizleeCup" width="280" class="  img-fluid position-absolute " :src="dizleeCup" alt=" dezlee cup"
                :style="{
                    right: '50px', bottom: '30%',

                }">
            <img id="awardCup" width="300" class=" img-fluid position-absolute" :src="awardCup" alt=" award cup" :style="{
                bottom: '30%',
            }">

            <div class="row text-center">
                <h1 class=" m-0">2023</h1>
                <h2 class=" m-0"> AWARDS</h2>
                <p :style="{  marginTop: '10px', paddingTop: '30px' }">
                    Zain Iraq Digital Services team won the award for the Most
                    <br>
                    <strong>
                        Disruptive Operator in Zain Group Annual Digital Forum 2023.
                    </strong>
                </p>
            </div>

        </div>
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
#container {
    background-color: #5B0AD9;
    ;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;



}

p {
    color: #FFF;

    font-size: 29.167px;

}

@supports (-webkit-text-stroke: 0.8vmin #6BDD6B) {
    h1 {
        -webkit-text-stroke: 2px #FFF;
        color: #5B0AD9;

        font-size: 110.402px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}

h2 {
    color: #FFF;

    font-size: 110.402px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>  
<style scoped>
@media(max-width: 768px) {
    #dizleeCup {
        max-width: 20%;
        left: 77%;
        top: 20%;
    }

    #awardCup {

        top: 20% !important;
        left: -1%;
        max-width: 30%;


    }

    #container {

        background-color: #5B0AD9;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right center;
     

      

    }

    p {
      
      margin-bottom: -9% !important;
        color: #FFF;
        font-size: 0.8rem;
    }

    @supports (-webkit-text-stroke: 0.8vmin #6BDD6B) {
        h1 {
            -webkit-text-stroke: 2px #FFF;
            color: #5B0AD9;

            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

    h2 {
        color: #FFF;

        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
</style>
