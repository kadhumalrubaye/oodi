<template>
    <div class="container position-relative mb-5">
        <img id="bigHalfWhiteCircul" :src="bigHalfWhiteCircul" alt="bigHalfWhiteCircul">
        <img id="smallHalfGreenCircul" :src="smallHalfGreenCircul" alt="smallHalfGreenCircul">

        <h1>
            <span>DIGITAL </span> @ ZAIN
        </h1>
        <h2>
            DID YOU KNOW?
        </h2>
    </div>
</template>

<script lang="ts" >
import { smallHalfGreenCircul, bigHalfWhiteCircul } from '@/models/assets_modul'
export default {
    data: function () {
        return {
            smallHalfGreenCircul,
            bigHalfWhiteCircul,
        }

    }

}
</script>

<style scoped>
#smallHalfGreenCircul {
    position: absolute;
    max-width: 100px;
    top: -30px;
}

#bigHalfWhiteCircul {
    position: absolute;
    max-width: 20%;
    top: -24%;
}

h1,
h2 {
    color: #5B0AD9;

    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 110.4px;
    text-align: center;

}

h2 {
    margin-left: 10%;
}

h1 {
    font-style: italic;
    color: white;
}


@supports (-webkit-text-stroke: 4px #6BDD6B) {
    h1 span {
        -webkit-text-stroke: 4px #ffff;
        color: #6BDD6B;
    }
}
</style>  
<style></style>
