<template>
    <div class="col-sm-12 col-md-6 text-center">
        <div class="card justify-content-center align-items-center align-content-center"
            style="border-style: none; background: rgba(255,255,255,0);">
            <div class="bg-light border rounded-circle border-5 border-light d-inline float-start justify-content-xxl-center align-items-xxl-center"
                style="width: 130px; border: 8.5px solid var(--bs-indigo); position: relative; margin-bottom: -50px; height: 130px;">
                <img alt="any"
                    class="rounded-circle img-fluid border border-5 border-primary justify-content-center align-items-center align-self-center order-2"
                    :src="ceoImage1">
            </div>
            <div style="background-color: #5B0AD9; border-radius: 110px; padding: 10px;">
                <h4 style="margin-top: 70px; color: white">Daniel Turan</h4>
                <h4 style="margin-top: 4px; color: #6BDD6B">Chief Digital Office</h4>
                <p style="color: white; font-size: 13px">
                    {{ ceoDesc }}
                </p>

            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import ceoImage1 from '../../assets/img/ava2.png'
import { desc } from '../../dumpCeoDesc'
export default {
    data: function () {
        return {
            ceoImage1: ceoImage1,
            ceoDesc: desc,
        }

    }
    // Component logic here
};
</script>
  
<style scoped>
img {}
</style>
  