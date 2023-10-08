<template>
    <div class="container  position-relative ">
        <img class=" img-fluid" id="halfcircleBiggreennn" :src="halfcircleBiggreen" :style="{ top: '-100px' }" />
        <img id="halfcirctIndiago1" class=" img-fluid" :src="halfcirctIndiago" />
        <img id="grenDots" class=" img-fluid" :src="grenDots" alt="grenDots" />
        <img id="grenDots2" class=" img-fluid" :src="grenDots" alt="grenDots" />


    </div>
    <section class=" row text-center">

        <teamHeading />

        <teamImageGrid />
    </section>
</template>

<script lang="ts">
import teamHeading from './teamHeading.vue';
import teamImageGrid from './teamImageGrid.vue';
import halfcircleBiggreen from './../../assets/img/halfcircleBiggreen.png'
import halfcirctIndiago from './../../assets/img/halfcirctIndiago.png'
import grenDots from '@/assets/img/dots.png'


export default {
    data: function () {
        return {
            halfcirctIndiago: halfcirctIndiago,
            halfcircleBiggreen: halfcircleBiggreen,
            grenDots,

        }
    },
    components: {

        teamHeading,
        teamImageGrid,

    }
}
</script>

<style scoped>
#halfcircleBiggreennn {

    position: absolute;
    z-index: -1;



}

#halfcirctIndiago1 {
    position: absolute;
    left: 10%;
    top: 109px;

}

#grenDots {
    position: absolute;
    top: 170px;
    left: -100px;
    z-index: -1;
}

#grenDots2 {
    position: absolute;
    right: -2px;
    top: 25rem;
    z-index: -1;
}
</style>

<style scoped>
@media(max-width: 768px) {
    #halfcircleBiggreennn {
        display: none;
        max-width: 30%;
        position: absolute;
        z-index: -1;



    }

    #halfcirctIndiago1 {
        display: none;
        position: absolute;
        max-width: 50%;
        left: 10%;
        top: 109px;

    }

    #grenDots {
        position: absolute;
        top: 170px;
        left: -100px;
        z-index: -1;
    }

    #grenDots2 {
        position: absolute;
        right: -2px;
        top: 25rem;
        z-index: -1;
    }

}
</style>