<template>
    <div class=" container" :style="{ 'background-image': 'url(' + layar7 + ') ' }">
        <PrHeainding />
        <prList />
        <stay_tuned />
    </div>
</template>



<script lang="ts">
import PrHeainding from './prHeainding.vue';
import prList from './prList.vue';
import layar7 from '../../assets/img/layer7.png'
import stay_tuned from './stay_tuned.vue';
export default {

    data() {
        return {
            layar7: layar7,
        }
    },
    components: {
        stay_tuned,
        PrHeainding,
        prList
    }
}
</script>

<style scoped>
.container {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left top;


}
</style>