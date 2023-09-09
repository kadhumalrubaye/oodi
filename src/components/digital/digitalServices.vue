<template>
    <div class="container align-content-center justify-content-center text-center align-self-center">
        <div class="row " style="margin-top: 50px">
            <div class="col-sm-12 col-md-6  ">

                <div>
                    <img class="img-fluid" :src="img1" width="500">
                    <p>Iraq’s first and only digital-native telco, on track to become the nation’s
                        leading superapp!</p>
                </div>

            </div>
            <div class="col-sm-12 col-md-6">
                <div>
                    <img class="img-fluid" :src="img2">
                    <p>Enabling mobile payments over carrier billing, across gaming, apps, entertainment and much
                        more!
                    </p>
                </div>

            </div>
            <div class="col-sm-12 col-md-6">
                <div><img class="img-fluid" :src="img3">

                </div>
                <p>Managing organizing local regional sport tournaments and
                    sponsoring Managing organizing local regional e-</p>
            </div>
            <div class="col-sm-12 col-md-6">
                <div>
                    <img class="img-fluid" :src="img4">

                </div>
                <p>Our superb, in-house team driving innovation across customer apps and operational
                    platforms!</p>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/4.png'

export default {
    data: function () {
        return {
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
        }
    }
}
</script>