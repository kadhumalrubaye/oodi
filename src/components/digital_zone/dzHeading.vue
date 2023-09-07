<template>
    <br>
    <div class="row">
        <h1 class="text-sm">
            <span>DIGITAL </span> @ ZAIN
        </h1>
        <h2 class="text-sm">
            DID YOU KNOW?
        </h2>


    </div>
</template>

<script lang="ts" >

export default {


}
</script>

<style scoped>
/* Default styles for larger screens */
h1,
h2,
h3,
h4 {
    color: #5B0AD9;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
}

h1 span,
h3 span {
    -webkit-text-stroke: 5px #ffff;
    color: #6BDD6B;
}

h1,
h2 {
    font-size: 80px;
}

h3,
h4 {
    font-size: 27.802px;
    margin-left: 50px;
}

/* Styles for tablet-sized screens (between 768px and 1024px) */
@media (max-width: 768px) {
    h1 {
        font-size: 30px;
        text-align: center;

    }

    h1 span {
        font-size: 30px;
        -webkit-text-stroke: 1px #6BDD6B;
        /* WebKit browsers (Safari) */
        color: #fff;
    }




    h2 {
        text-align: center;
        -webkit-text-stroke: 1px #6BDD6B;
        /* WebKit browsers (Safari) */
        color: #fff;
        color: #5B0AD9;
        font-size: 30px;
    }


}

@media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {}
</style>
