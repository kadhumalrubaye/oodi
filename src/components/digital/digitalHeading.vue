<template>
    <div class="container">
        <h1>
            WHEN WE SAY
        </h1>
        <h2>
            <span>DIGITAL</span>, WE MEAN…
        </h2>
    </div>
</template>

<script lang="ts" >

export default {


}
</script>

<style scoped>
span {
    color: #6BDD6B;
}

h1 {
    color: #5B0AD9;
    font-family: Inter;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

h2 {

    color: #5B0AD9;

    font-family: Inter;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: right;
}



@media (max-width: 768px) {
    h1 {
        font-size: 40px;
        text-align: center;
    }



    h2 {
        text-align: center;
        -webkit-text-stroke: 1px #6BDD6B;
        /* WebKit browsers (Safari) */
        color: #fff;
        color: #5B0AD9;
        font-size: 25px;
    }

    h2 span {
        font-size: 30px;
    }
}

@media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {}
</style>