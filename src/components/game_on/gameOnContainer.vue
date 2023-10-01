
<template>
    <div class="  pt-5"
        :style="{ backgroundColor: ' #6BDD6B', 'background-image': 'url(' + gameOnBg + ') ', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: 'contain' }">
        <div class="container pt-5  " :style="{ paddingLeft: '10%', paddingRight: '10%', paddingBottom: '5%', }">

            <div class="row position-relative pt-5">
                <h1>
                    <img :src="indiagoDots" alt="" class=" img-fluid position-absolute " width="300"
                        :style="{ right: '10%', top: '15%' }">
                    <img :src="bigHalfWhiteCircul" alt="" class=" img-fluid position-absolute "
                        :style="{ right: '5%', top: '-5%' }">


                    GAME ON!
                </h1>
                <h3 class=" mt-5">
                    What is Cross-word? <br>
                </h3>
                <p>

                    A crossword puzzle is a word game that consists of a grid of squares,
                    with each square corresponding to a letter in a word. The goal is to fill
                    the squares with words that intersect horizontally and vertically that
                    match the clues provided, and lead to the <strong>KEY</strong> word.



                </p>
                <h3>
                    How to play?
                </h3>
                <p>
                    <strong>
                        Complete the cross-word and send the KEY to the email
                    </strong>

                    <strong>

                        digital@iq.zain.com to get a chance to win 100 USD!
                    </strong>

                    <br>

                    <strong>
                        Last submissions will be accepted until August 31st, and the winner will
                    </strong>
                    <strong>
                        be announced on September 7th.
                    </strong>
                </p>
            </div>

            <div class="row">
                <img class=" img-fluid" :src="gameOneImg" alt=" game on">
            </div>

            <p class=" position-relative pt-4">
                <span class=" position-absolute" :style="{ right: '10%', top: '-20px' }">
                    <strong>KEY</strong><br>
                    <img :src="gameOneColorCell" alt=" gameOneColorCell">
                </span>
                1 - Our newsletter will keep us informed, … and <br>
                prepared to lead in the industry. <br>
                2 - Iraq’s first and only digital-native provider. <br>
                3 - Iraq's leading operator. <br>
                4 - The FIFA tournament category. <br>
                5 - The city where the FIFA PS tournament happened. <br>
                6 - The nature of our wonderful world. <br>
                7 - A popular online learning platform. <br>



            </p>

        </div>

    </div>
    <footer class="  position-relative">
        <img :src="gameOneBigIndiagoStat" alt=" gameOneColorCell" class=" position-absolute"
            :style="{ bottom: '-100px', right: '-1px', }">


    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gameOneImg from './../../assets/img/gameone.png'
import gameOnBg from './../../assets/img/gameon_background.png'
import {
    indiagoDots, bigHalfWhiteCircul, gameOneBigIndiagoStat, gameOneColorCell,
} from '../../models/assets_modul'

export default defineComponent({
    setup() {
        return {
            indiagoDots, bigHalfWhiteCircul,
            gameOneImg,
            gameOnBg,
            gameOneBigIndiagoStat,
            gameOneColorCell


        };
    },

})
</script>

<style scoped>
h1 {
    color: #5B0AD9;

    font-size: 110.4px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

h3 {
    color: #5B0AD9;

    font-size: 41.67px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

p {
    color: #5B0AD9;

    font-size: 29.17px;
    font-style: normal;
    font-weight: 400;
    line-height: 35.3px;

}
</style>  
<style></style>