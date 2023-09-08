<template>
    <div id="ceoContainer" class="container" :style="{ 'background-image': 'url(' + background + ') ' }">
        <div class="row ">
            <ProfileCard />
            <ProfileCard />
        </div>
    </div>
</template>
  
<script lang="ts">
import ProfileCard from './ceoCard.vue';
import image from './../../assets/img/Group2276.png'



export default {
    data: function () {
        return {
            background: image,
        }
    },
    components: {
        ProfileCard,
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
  