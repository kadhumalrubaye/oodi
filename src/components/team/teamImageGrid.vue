

<template>
    <div id="teamImageGridRow" class="row">
        <div v-for="img in imagesUrl" class="col-lg-2 col-md-2 col-sm-4 col-6 mb-4">
            <v-progress-circular v-if="!img" indeterminate :size="67"></v-progress-circular>
            <img class="img-fluid" v-else :src="img" loading="lazy">


        </div>

    </div>
</template>
  
<script lang="ts">

 
import { desc } from '../../dumpCeoDesc'

import { VProgressCircular } from 'vuetify/components';




let imagesUrl = import.meta.glob("@/assets/img/Profile_Pics/*.(jpg|JPG|png|PNG|svg)", { as: "url", eager: true });


export default {


    data: function () {
        return {
            imagesUrl: imagesUrl,
          
            ceoDesc: desc,
            
        }


    }, methods: {

        loadImages() {
            return ""

        },
    }, computed: {

    },
    components: {
      
        VProgressCircular,
    }


};
</script>
  
<style scoped>
#teamImageGridRow {
    padding: 30px;
}

img {

    border-color: #6BDD6B;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
}

@media (max-width: 768px) {
    img {

        border-color: #6BDD6B;
        border-width: 3px;
        border-style: solid;
        border-radius: 50%;
    }
}
</style>  
<style></style>
  