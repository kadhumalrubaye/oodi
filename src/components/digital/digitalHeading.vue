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