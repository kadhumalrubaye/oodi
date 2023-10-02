<template>
    <div class="container position-relative z-n1 mt-5">

        <img class=" img-fluid position-absolute    " :src="whiteCutedCircul" alt=" laptop img"
            :style="{ right: '30px', top: '-56px' }">
        <img class=" img-fluid  position-absolute" :src="latptopImg" alt=" laptop img"
            :style="{ right: '50px', top: '-56px' }">


        <img class=" img-fluid position-absolute z-n1    " :src="whiteCutedCircul" alt=" laptop img"
            :style="{ right: '-100px', bottom: '-200px', zIndex: '0' }">
        <img class=" img-fluid  position-absolute" :src="smallHalfIndiagoCircult" alt=" smallHalfIndiagoCircult img"
            :style="{ right: '150px', bottom: '100px', transform: 'rotate(-80deg)' }">




        <div class="  pt-5">
            <h3>
                What is <strong>Coursera?</strong> <br>

            </h3>
            <p>

                Coursera is an online learning platform that offers a <br>
                wide range of paid as well as free courses and<br>
                programs from top universities and institutions<br>
                worldwide, accessible to learners globally.<br>

            </p>
            <h3 class=" pt-5">
                <strong>How does it work:</strong>
            </h3>
            <p>

                1. Go to www.coursera.org <br>
                2. Sign in or create an account. <br>
                3. Use the search bar to find specific topics or browse through the catalog of available courses. <br>
                4. Select the desired course. <br>
                5. Enroll in the Course: Some courses may require payment to enroll, while <br>
                others might be available for free. If there is a cost associated with the <br>
                course, you will be prompted to make the payment. If the course is free, you <br>
                can click on the "Enroll for Free" button. <br>
                6. Start the course after enrolling. <br>
                7. Complete the course by participating in lectures, quizzes, assignments, <br>
                and any other course requirements. <br>
                8. Upon completion, you may receive a certificate or other recognition <br>
                depending on the course's settings. <br>
            </p>

            <h1 :style="{ fontSize: '110.4px' }">HAPPY LEARNING</h1>
        </div>
    </div>
</template>

   
<script lang="ts">
import latptopImg from './../../assets/img/Laptop.png'
import { whiteCutedCircul, smallHalfIndiagoCircult } from '@/models/assets_modul'


export default {
    data: function () {
        return {
            latptopImg: latptopImg,
            whiteCutedCircul,
            smallHalfIndiagoCircult,


        }
    }
}
</script>
<style scoped>
h3 {
    color: #5B0AD9;

    font-size: 41.67px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

div p {


    color: #5B0AD9;

    font-size: 29.17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

@supports (-webkit-text-stroke: 3px #6BDD6B) {
    h1 {
        text-align: center;
        -webkit-text-stroke: 3px #5B0AD9;
        /* WebKit browsers (Safari) */
        color: #fff;
        margin: 0%;
        font-size: 110.4px;
    }
}


.container {
    background-color: #6BDD6B;
}
</style>  
<style></style>
