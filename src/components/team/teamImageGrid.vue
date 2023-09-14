

<template>
    <div id="teamImageGridRow" class="row">
        <div v-for="img in imgs" class="col-lg-2 col-md-2 col-sm-4 col-6 mb-4">

            <img class="img-fluid" :src="img">
        </div>
        <!-- <div v-for="img in ceoImages" class="col-sm-2" :style="{ margin: 100 + 'px', }">
                <img class="rig-column img" :src="img">
            </div> -->
    </div>
</template>
  
<script lang="ts">
//imgs
import profileImag1 from './../../assets/img/CompressJPEG.online_512x512_image.png'
import profileImag2 from './../../assets/img/profile-pic-10.png'
import profileIma3 from './../../assets/img/profile-pic-11.png'
import profileIma4 from './../../assets/img/profile-pic-13.png'
import profileIma5 from './../../assets/img/profile-pic-12.png'
import profileIma6 from './../../assets/img/profile-pic-16.png'
import profileIma7 from './../../assets/img/profile-pic-18.png'
import profileIma8 from './../../assets/img/profile-pic-2.png'
import profileIma9 from './../../assets/img/profile-pic-20.png'
import profileIma10 from './../../assets/img/profile-pic-22.png'
import profileIma11 from './../../assets/img/profile-pic-24.png'
import profileIma12 from './../../assets/img/profile-pic-26.png'
import profileImag13 from './../../assets/img/profile-pic-27.png'
import profileImag14 from './../../assets/img/profile-pic-28.png'
import profileImag15 from './../../assets/img/profile-pic-29.png'
import profileImag16 from './../../assets/img/profile-pic-30.png'
import profileImag17 from './../../assets/img/profile-pic-31.png'
import profileImag18 from './../../assets/img/profile-pic-32.png'
import profileImag19 from './../../assets/img/profile-pic-33.png'
import profileImag20 from './../../assets/img/profile-pic-34.png'
import profileImag21 from './../../assets/img/profile-pic-35.png'
import profileImag22 from './../../assets/img/profile-pic-36.png'
import profileImag23 from './../../assets/img/profile-pic-35.png'
import profileImag24 from './../../assets/img/profile-pic-38.png'
import profileImag25 from './../../assets/img/profile-pic-39.png'
import profileImag26 from './../../assets/img/profile-pic-40.png'
import profileImag27 from './../../assets/img/profile-pic-41.png'
import profileImag28 from './../../assets/img/profile-pic-42.png'
import profileImag29 from './../../assets/img/profile-pic-43.png'
import profileImag30 from './../../assets/img/profile-pic-44.png'
import profileImag31 from './../../assets/img/profile-pic-45.png'
import profileImag32 from './../../assets/img/profile-pic-46.png'
import profileImag33 from './../../assets/img/profile-pic-48.png'
import profileImag34 from './../../assets/img/profile-pic-49.png'
import profileImag35 from './../../assets/img/profile-pic-50.png'
import profileImag36 from './../../assets/img/profile-pic-51.png'
import profileImag37 from './../../assets/img/profile-pic-52.png'
import profileImag38 from './../../assets/img/profile-pic-53.png'
import profileImag39 from './../../assets/img/profile-pic-54.png'
import profileImag40 from './../../assets/img/profile-pic-56.png'
import profileImag41 from './../../assets/img/profile-pic-60.png'
import profileImag42 from './../../assets/img/profile-pic-62.png'
import profileImag43 from './../../assets/img/profile-pic-66.png'
import profileImag44 from './../../assets/img/profile-pic-9.png'


const imgs: string[] = [profileImag1, profileImag2, profileIma3, profileIma4, profileIma5, profileIma6, profileIma7, profileIma8, profileIma9,

    profileIma10, profileIma11, profileIma12, profileImag13, profileImag14, profileImag15, profileImag16, profileImag17, profileImag18, profileImag19,
    profileImag20, profileImag21, profileImag22, profileImag23, profileImag24, profileImag25, profileImag26, profileImag27, profileImag28, profileImag29,
    profileImag30, profileImag31, profileImag32, profileImag33, profileImag34, profileImag35, profileImag36, profileImag37, profileImag38, profileImag39, profileImag40,
    profileImag40, profileImag41, profileImag42, profileImag43, profileImag44


]

import ceoImage1 from './../../assets/img/ava2.png'

import { desc } from '../../dumpCeoDesc'


const imgsPath = import.meta.glob('@/assets/img/Profile_Pics/*.png')
console.log(imgsPath)



const ceoImages: string[] = [];
for (const img in imgs) {
    console.log(img);

    ceoImages.push(img)

}



export default {


    data: function () {
        return {
            ceoImage1: ceoImage1,
            ceoDesc: desc,
            ceoImages: ceoImages,
            images: [],
            imgs: imgs

        }


    }, methods: {
        loadImages() {

        }, created() {
            this.loadImages();
        },
    }
    // Component logic here
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
  