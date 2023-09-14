<template>
    <div class="container">
        <!-- <img class="float-start img-fluid" id="halfcircleBiggreennn" :src="halfcircleBiggreen" />
        <img id="halfcirctIndiago1" class="float-start img-fluid"  :src="halfcirctIndiago" /> -->
    </div>
    <section class=" container text-center">

        <teamHeading />

        <teamImageGrid />
    </section>
</template>

<script lang="ts">
import teamHeading from './teamHeading.vue';
import teamImageGrid from './teamImageGrid.vue';
import halfcircleBiggreen from './../../assets/img/halfcircleBiggreen.png'
import halfcirctIndiago from './../../assets/img/halfcirctIndiago.png'


export default {
    data: function () {
        return {
            halfcirctIndiago: halfcirctIndiago,

            halfcircleBiggreen: halfcircleBiggreen,
        }
    },
    components: {

        teamHeading,
        teamImageGrid
    }
}
</script>

<style scoped>
#halfcircleBiggreennn {


    width: 100px;
}

#halfcirctIndiago1 {
    margin-left: -10%;
    margin-top: 10%;
    max-width: 8%;
    float: left;

}

@media (min-width: 320px) {
    #halfcircleBiggreennn {


        width: 50px;
    }

    #halfcirctIndiago1 {
        margin-left: -10%;
        margin-top: 10%;
        max-width: 8%;
        float: left;

    }

}

@media (min-width: 425px) {}

@media (min-width: 768px) {}

@media (min-width: 992px) {}

@media (min-width: 1024px) {}


@media (min-width: 1200px) {}
</style>