<template>
    <div class="col-md-6  col-sm-12 ">
        <div class="card justify-content-center align-items-center align-content-center "
            style="border-style: none; background: rgba(255,255,255,0);">
            <div class="card-img-top bg-light border rounded-circle border-5 border-light d-inline float-start justify-content-xxl-center align-items-xxl-center"
                style="width: 130px; border: 8.5px solid var(--bs-indigo); position: relative; margin-bottom: -50px; height: 130px;">
                <img alt="any"
                    class="card-img-top rounded-circle img-fluid border border-5   justify-content-center align-items-center align-self-center order-2"
                    :src="AliAlZahidImg">
            </div>


            <div class=" card-body card-body p-5" style="background-color: #5B0AD9; border-radius: 110px; padding: 10px;">
                <h5 class=" card-title" style="margin-top: 70px; color: white">Daniel Turan</h5>
                <h6 class=" card-subtitle" style="margin-top: 4px; color: #6BDD6B">Chief Digital Office</h6>
                <p class=" card-text mt-3">
                    {{ AliAliZahid }}
                    <br>
                </p>
                <h6>
                    Wishing you all afantastic quarter ahead!

                </h6>
            </div>


        </div>
    </div>
</template>
  
<script lang="ts">

import AliAlZahidImg from '../../assets/img/AliAl-Zahid.png'
import { AliAliZahid } from './../../dumpCeoDesc'
export default {
    data: function () {
        return {

            AliAlZahidImg: AliAlZahidImg,
            AliAliZahid: AliAliZahid,
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
</style>
  