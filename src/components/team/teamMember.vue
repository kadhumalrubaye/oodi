<template>
    <!-- <div class="container">
        <img class="float-start" :src="halfcircleBiggreen" style="text-align: right;margin-top: -169px;" width="266px"
            height="278px" />
        <img class="float-end" :src="greenStarImg" style="text-align: right;margin-top:-30px;" width="78" height="80" />
    </div> -->
    <div class="row text-center">
        <teamHeading />
        <br>
        <teamImageGrid />
    </div>
</template>

<script lang="ts">
import teamHeading from './teamHeading.vue';
import teamImageGrid from './teamImageGrid.vue';
import greenStarImg from './../../assets/img/greenstart.png'
import halfcircleBiggreen from './../../assets/img/halfcircleBiggreen.png'

export default {
    data: function () {
        return {
            greenStarImg: greenStarImg,
            halfcircleBiggreen: halfcircleBiggreen,
        }
    },
    components: {

        teamHeading,
        teamImageGrid
    }
}
</script>