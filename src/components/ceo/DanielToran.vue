<template>
    <div class="col  ">
        <div class="card justify-content-center align-items-center align-content-center "
            style="border-style: none; background: rgba(255,255,255,0);">
            <div class="bg-light border rounded-circle border-5 border-light d-inline float-start justify-content-xxl-center align-items-xxl-center"
                style="width: 130px; border: 8.5px solid var(--bs-indigo); position: relative; margin-bottom: -50px; height: 130px;">
                <img alt="any"
                    class="rounded-circle img-fluid border border-5 justify-content-center align-items-center align-self-center order-2"
                    :src="DanielToranImg">
            </div>


            <div class=" card-body  " style="background-color: #5B0AD9; border-radius: 110px; padding: 10px;">
                <h4 class=" card-title" style="margin-top: 70px; color: white">Daniel Turan</h4>
                <h6 class=" card-subtitle" style="margin-top: 4px; color: #6BDD6B">Chief Digital Office</h6>
                <p class=" card-text   " style="color: white;  ">
                    {{ DanielToran }}
                    <br>



                </p>
                <h6>
                    Let us know what you <br>
                    thinkdigital@iq.zain.com

                </h6>
            </div>


        </div>
    </div>
</template>
  
<script lang="ts">

import DanielToranImg from '../../assets/img/DanielToran.png'

import { DanielToran, } from './../../dumpCeoDesc'
export default {
    data: function () {
        return {

            DanielToran: DanielToran,
            DanielToranImg: DanielToranImg,

        }

    }
    // Component logic here
};
</script>
  
<style scoped>
p,
h6 {
    color: white;
}

/* Small screens (up to 576px) */
@media (max-width: 576px) {
    .custom-text {
        font-size: 14px;
    }


}

/* Medium screens (577px to 768px) */
@media (min-width: 577px) and (max-width: 768px) {
    .custom-text {
        font-size: 16px;
    }
}

/* Large screens (769px to 992px) */
@media (min-width: 769px) and (max-width: 992px) {
    .custom-text {
        font-size: 18px;
    }
}

/* Extra-large screens (wider than 992px) */
@media (min-width: 993px) {
    .custom-text {
        font-size: 20px;
    }
}
</style>
  