<template>
    <div class="container position-relative">

        <img id="halfBigGreenCircle" :src="halfBigGreenCircle" alt="halfBigGreenCircle">
        <img id="halfcirctIndiago" :src="halfcirctIndiago" alt="halfcirctIndiago">


        <h1>
            WHEN WE SAY
        </h1>
        <h2>
            <span>DIGITAL</span>, WE MEAN…
        </h2>
    </div>
</template>

<script lang="ts" >
import halfBigGreenCircle from '@/assets/img/halfcircleBiggreen.png'
import halfcirctIndiago from '@/assets/img/halfcirctIndiago.png'
export default {

    data: function () {
        return {

            halfBigGreenCircle,
            halfcirctIndiago
        }

    },
}
</script>

<style scoped>
#halfBigGreenCircle {
    position: absolute;
    transform: rotate(90deg);

    bottom: 20%;
    left: -5%;
}

#halfcirctIndiago {
    position: absolute;
    transform: rotate(90deg);
    top: -35%;
    left: 5%;
}

span {
    color: #6BDD6B;


}

h1 {
    color: #5B0AD9;


    font-size: 110.4px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
}

h2 {

    color: #5B0AD9;


    font-size: 110.4px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
}
</style>  
<style></style>