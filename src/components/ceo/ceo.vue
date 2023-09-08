<template>
    <div id="ceoContainer" class="container" :style="{ 'background-image': 'url(' + background + ') ' }">
        <div class="row">
            <AliAliZahid />
            <DanielToran />
        </div>
    </div>
</template>
  
<script lang="ts">

import AliAliZahid from './AliAliZahid.vue';
import image from './../../assets/img/Group2276.png'
import DanielToran from './DanielToran.vue';




export default {
    data: function () {
        return {
            background: image,
        }
    },
    components: {

        AliAliZahid,
        DanielToran


    },
};
</script>
  
<style scoped>
#ceoContainer {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
}
</style>
  