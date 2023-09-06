<template>
    <div class="row" style="text-align: left;">
        <div class="col-xl-12">
            <div class="row" style="padding: 4px;">
                <div class="col-xl-3 col-xxl-3">
                    <picture><img :src="img1" style="width: 354px;height: 228px;position: relative;" width="354"
                            height="228" /></picture>
                </div>
                <div class="col">
                    <h1 style="font-size: 27.083px;margin: 0px;margin-right: 10px;margin-left: 42px;">Launched
                        <strong>10+</strong> first-in-market products &amp; featureswith oodi <br>  application last
                        year <br>  Achieved significant customer base growth in the past year <br> Achieved a twofold
                        increase in
                        net revenues in the past year  <br> Achieved profitability in <strong>1.5 years</strong>
                    </h1>
                </div>
            </div>
            <div class="row" style="margin-bottom: -20px;">
                <div class="col-xl-8" style="text-align: left;">
                    <div class="row" style="padding: 4px;">
                        <div class="col-xl-3 col-xxl-3">
                            <picture><img class="d-xl-flex justify-content-xl-end align-items-xl-end" :src="img2"
                                    style="width: 354px;height: 228px;position: relative;transform: translate(-34px) translateY(-42px);"
                                    width="354" height="228" /></picture>
                        </div>
                        <div class="col">
                            <h1 style="font-size: 27.083px;margin: 0px;text-align: left;margin-left: 136px;">
                                Accomplished excellent growth in total <br> revenues during the past year <br> Significant
                                contribution to total revenues <br>Effective contribution to net revenues</h1>
                        </div>
                    </div>
                    <div class="row" style="padding: 4px;">
                        <div class="col-xl-3 col-xxl-3">
                            <picture><img :src="img3" style="width: 354px;height: 228px;position: relative;" width="354"
                                    height="228" /></picture>
                        </div>
                        <div class="col">
                            <h1
                                style="font-size: 27.083px;margin: 0px;margin-right: 10px;margin-left: 139px;text-align: left;">
                                Hosted 20+ tournaments <br> Welcomed 3k+ participants <br> Awarded $80k in prizes</h1>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h1 style="font-size: 63px;color: var(--bs-white);"><strong>..WE ARE ZAIN IRAQ&#39;S DIGITAL
                            FUTURE!</strong></h1>
                </div>
            </div>
            <div class="row" style="padding: 4px;">
                <div class="col-xl-3 col-xxl-3">
                    <picture><img :src="img4" style="width: 354px;height: 228px;position: relative;" width="354"
                            height="228" /></picture>
                </div>
                <div class="col">
                    <h1 style="font-size: 27.083px;margin: 0px;margin-right: 10px;margin-left: 42px;">Developed 4 new
                        Digital Assets in the last year <br>  Launched the Zain-Fi application enabling customers to
                        seamlessly <br>  manage their Zain-Fi accounts and devices</h1>
                </div>
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
<style scoped>
#weAreZainText {
    color: #FFF;
    font-family: Inter;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.col-8 {
    /* background-color: #5B0AD9; */

}

.col-4 {
    /* background-color: aqua; */
}



h1 {
    color: #5B0AD9;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>