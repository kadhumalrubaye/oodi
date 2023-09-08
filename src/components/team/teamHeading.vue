<template>
    <div class="container  mt-5">

        <h1>

            INTRODUCING
        </h1>
        <h2>
            THE TEAM...
        </h2>


    </div>
</template>

<script lang="ts" >

export default {


}
</script>

<style scoped>
h1 {
    color: #5B0AD9;
    font-family: Inter;
    font-size: 110.402px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

h2 {
    -webkit-text-stroke: 5px #6BDD6B;
    /* WebKit browsers (Safari) */
    color: #fff;
    color: #5B0AD9;

    font-family: Inter;
    font-size: 110.402px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: right;
}



@media (max-width: 768px) {
    h1 {
        text-align: center;
        font-size: 40px;
    }

    h2 {
        text-align: center;
        -webkit-text-stroke: 2px #6BDD6B;
        /* WebKit browsers (Safari) */
        color: #fff;
        color: #5B0AD9;
        font-size: 38px;
    }
}

@media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {}
</style>