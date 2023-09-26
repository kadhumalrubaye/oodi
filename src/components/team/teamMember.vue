<template>
    <div class="container  position-relative">
        <img class=" img-fluid" id="halfcircleBiggreennn" :src="halfcircleBiggreen" />
        <img id="halfcirctIndiago1" class=" img-fluid"  :src="halfcirctIndiago" />
        <img id="grenDots" class=" img-fluid"  :src="grenDots" alt="grenDots" />
    
    
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

  
}

#halfcirctIndiago1 {
 position: absolute;
left: 10%;
top: 13.5rem;

}
#grenDots{
    position: absolute;
    top: 17rem;
    z-index: -1;
}
</style>