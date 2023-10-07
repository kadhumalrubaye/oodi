<template>
    <div class="container position-relative">

        <img id="halfBigGreenCircle" :src="halfBigGreenCircle" alt="halfBigGreenCircle" width="271">
        <img id="halfcirctIndiago" :src="halfcirctIndiago" alt="halfcirctIndiago" width="119">


        <h1 :style="{ marginLeft: '5%', }">
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

    bottom: 30%;
    left: 1%;
}

#halfcirctIndiago {
    position: absolute;
    transform: rotate(90deg);
    top: -43%;
    left: 10%;
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
    text-align: right;

}
</style>  

<!-- mobile view -->
<style scoped> @media (max-width: 425px) {
     #halfBigGreenCircle {
         display: none;
         max-width: 30%;
         position: absolute;
         transform: rotate(90deg);

         bottom: 30%;
         left: 1%;
     }

     #halfcirctIndiago {
         display: none;
         position: absolute;
         transform: rotate(90deg);
         top: -43%;
         left: 10%;
     }

     span {
         color: #6BDD6B;
         font-size: 2rem;


     }

     h1 {
         font-size: 2rem;
         color: #5B0AD9;
         text-align: left;
     }

     h2 {

         color: #5B0AD9;


         font-size: 2rem;
         font-style: normal;
         font-weight: 700;
         line-height: normal;
         text-align: right;

     }


 }
</style>