<template>
    <br>
    <div class="   container ">
        <h1>
            <span>DIGITAL </span> @ ZAIN
        </h1>
        <h2>
            DID YOU KNOW?
        </h2>


    </div>
</template>

<script lang="ts" >

export default {


}
</script>

<style scoped>
h1,
h2 {
    color: #5B0AD9;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 80px;

}

h1 {
    text-align: center;
}

h2 {
    text-align: right;

}

h1 span {
    -webkit-text-stroke: 5px #ffff;
    color: #6BDD6B;
}





/* Styles for tablet-sized screens (between 768px and 1024px) */
@media (max-width: 768px) {
    .container {}

    h1 {
        font-size: 35px;
        text-align: center;
        margin-left: 0px;

    }

    h1 span {
        font-size: 35px;


        -webkit-text-stroke: 2px #fff;
        /* WebKit browsers (Safari) */
        color: #6BDD6B;

    }




    h2 {
        text-align: right;
        -webkit-text-stroke: 1px #6BDD6B;
        /* WebKit browsers (Safari) */
        color: #fff;
        color: #5B0AD9;
        font-size: 30px;
    }


}

@media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {}
</style>
