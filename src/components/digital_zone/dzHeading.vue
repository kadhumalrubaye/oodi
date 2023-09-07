<template>
    <br>
    <div class="row">
        <div class="col-md-12 d-none d-md-block">
            <h1 class="text-sm">
                <span>DIGITAL </span> @ ZAIN
            </h1>
            <h2 class="text-sm">
                DID YOU KNOW?
            </h2>
        </div>
        <div class="col-sm-12 d-md-none">
            <h3>
                <span>DIGITAL </span> @ ZAIN
            </h3>
            <h4>
                DID YOU KNOW?
            </h4>
        </div>
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
@media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {


    h1,
    h2 {
        font-size: 60px;
        /* Adjust font size for tablets */
        text-align: center;
    }

    h3 {
        font-size: 27.802px;
        /* Leave the font size unchanged for h3 */
        text-align: center;
    }

    h4 {
        font-size: 27.802px;
        /* Leave the font size unchanged for h4 */
        text-align: center;
        margin-left: 50px;
    }
}
</style>
