<template>
    <div class="container">
        <div class="col">
            <img :src="latptopImg" alt=" laptop img" width="300">
        </div>
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
            <h3><strong>How does it work:</strong></h3> <br>
            <p>

                1. Go to www.coursera.org
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

            <h1>HAPPY LEARNING</h1>
        </div>
    </div>
</template>

 
<script lang="ts">
import latptopImg from './../../assets/img/Laptop.png'


export default {
    data: function () {
        return {
            latptopImg: latptopImg

        }
    }
}
</script>
<style scoped>
img {

    margin-right: 20%;
    margin-top: 5%;

    float: right;

}

@media (max-width: 768px) {}

img {
    display: none;
}

h3 {
    color: #5B0AD9;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

div p {


    color: #5B0AD9;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

h1 {
    text-align: center;
    -webkit-text-stroke: 1px #5B0AD9;
    /* WebKit browsers (Safari) */
    color: #fff;

    font-size: 40px;
}

@media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {
    img {
        margin: 0;
        display: block;
        padding: 10px;
    }

    h1 {
        font-size: 50px;
    }

    h3 {
        font-size: 20px;
    }
}

.container {
    background-color: #6BDD6B;
}
</style>