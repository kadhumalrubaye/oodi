
<template>
    <div>
        <div class="container p-5 " :style="{ 'background-image': 'url(' + gameOnBg + ') ' }">

            <div class="row">
                <h1>
                    GAME ON!
                </h1>

                <p>
                    <strong>
                        What is Cross-word?
                    </strong>
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
            <br>
            <p>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gameOneImg from './../../assets/img/gameone.png'
import gameOnBg from './../../assets/img/gameon_background.png'

export default defineComponent({
    setup() {
        return {
            gameOneImg: gameOneImg,
            gameOnBg: gameOnBg,
        };
    },

})
</script>

<style scoped>
.container {
    background-color: #6BDD6B;
    background-repeat: no-repeat;
    background-position: left top;
}

h1 {
    color: #5B0AD9;

    font-size: 10vmin;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

h3 {
    color: #5B0AD9;

    font-size: 5vmin;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

p {
    color: #5B0AD9;

    font-size: 3vmin;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media only screen and (min-device-width: 768px) {}

@media only screen and (max-device-width: 768px) {



    .container {
        background-size: contain;
    }
}
</style>  
<style></style>