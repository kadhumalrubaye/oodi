<template>
    <div class="col-sm-12 col-md-6 ">
        <div class="card justify-content-center align-items-center align-content-center "
            style="border-style: none; background: rgba(255,255,255,0);">
            <div class=" bg-light border rounded-circle border-5 border-light d-inline float-start justify-content-xxl-center align-items-xxl-center"
                style="width: 130px; border: 8.5px solid var(--bs-indigo); position: relative; margin-bottom: -50px; height: 130px;">
                <img alt="any"
                    class=" rounded-circle img-fluid border border-5   justify-content-center align-items-center align-self-center order-2"
                    :src="DanielToranImg">
            </div>


            <div class=" card-body  " style="background-color: #5B0AD9; border-radius: 110px; padding: 10px;">
                <h4 class=" card-title text-light mt-5"> Daniel Turan</h4>
                <h5 class=" card-subtitle mt-2 mb-3">Chief Digital Officer</h5>
                <p class=" card-text ps-2 pe-2   ">
                    {{ DanielToran }}

                </p>
                <h6>
                    Wishing you all afantastic quarter ahead!

                </h6>
            </div>


        </div>
    </div>
</template>
  
<script lang="ts">

import DanielToranImg from '../../assets/img/DanielToran.png'
import { DanielToran } from '../../dumpCeoDesc';

export default {
    data: function () {
        return {

            DanielToranImg: DanielToranImg,
            DanielToran: DanielToran,
        }

    }
    // Component logic here
};
</script>
  
<style scoped>
h5 {
    color: #6BDD6B;
}

p,
h6 {
    color: white;
}

p {
    text-align: justify;
}

/* Small screens (up to 576px) */
@media (max-width: 576px) {

    p,
    h6 {
        font-size: 12px;
    }
}

/* Medium screens (577px to 768px) */
@media (min-width: 577px) and (max-width: 768px) {

    p,
    h6 {
        font-size: 16px;
    }

    h6 {
        margin-bottom: 20%;
    }
}

/* Large screens (769px to 992px) */
@media (min-width: 769px) and (max-width: 992px) {

    p,
    h6 {
        font-size: 18px;
    }
}

/* Extra-large screens (wider than 992px) */
@media (min-width: 993px) {

    p,
    h6 {
        font-size: 20px;
    }
}
</style>
  