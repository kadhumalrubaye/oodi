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


/* xs */
/* xs */
@media (max-width: 475px) {

    h1,
    h2 {
        font-size: 2rem;
    }

    h1 span {
        -webkit-text-stroke: 2px #ffff;
        color: #6BDD6B;
    }
}

/* sm */
@media (min-width:640px) {

    h1,
    h2 {
        font-size: 2rem;
    }

    h1 span {
        -webkit-text-stroke: 2px #ffff;
        color: #6BDD6B;
    }
}

/* md */
@media (min-width: 768px) {

    h1,
    h2 {
        font-size: 3.5rem;
    }
}

/* lg */
@media (min-width: 1024px) {

    h1,
    h2 {
        font-size: 4rem;
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
