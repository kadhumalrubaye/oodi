<template>
    <div class="row  mt-5">

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


/* xs */
@media (min-width: 475px) {}

/* sm */
@media (width<=640px) {

    h1,
    h2 {
        font-size: 2.5rem;
    }
}

/* md */
@media (min-width: 768px) {

    h1,
    h2 {
        font-size: 4rem;
    }
}

/* lg */
@media (min-width: 1024px) {

    h1,
    h2 {
        font-size: 5rem;
    }
}

/* xl */
@media (width>=1280px) {

    h1,
    h2 {
        font-size: 7rem;
    }
}
</style>