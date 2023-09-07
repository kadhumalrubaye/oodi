<template>
    <div class=" container" :style="{ 'background-image': 'url(' + layar7 + ') ' }">
        <PrHeainding />
        <prList />
    </div>
</template>



<script lang="ts">
import PrHeainding from './prHeainding.vue';
import prList from './prList.vue';
import layar7 from '../../assets/img/Layer 7.png'
export default {

    data() {
        return {
            layar7: layar7,
        }
    },
    components: {
        PrHeainding,
        prList
    }
}
</script>

<style scoped>
.container {
    background-repeat: no-repeat;
    background-size: contain;
}
</style>