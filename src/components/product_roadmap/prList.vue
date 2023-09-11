<template>
    <div class="row">
        <p><strong>EXCITING NEWS! </strong><br />Some big product
            releases are planned in the upcoming months: an enhanced <br /><strong>oodi app with advanced lifestyle
                products and refreshed UI for efficient user</strong>experience, <strong>and a brand-new Zain&#39;s
                mobile self-care app</strong> with simplified and <br />modern customer experience.</p>
    </div>
    <div class="row ">
        <div class="col-md-4 col-sm-12">

            <img class="img-fluid" :src="phone1" />

        </div>
        <div class="col-md-8 col-sm-12">
            <p s><strong>New and enhanced features are coming…
                </strong> <br />• Redesigned sign-up journey.<br />• In-depth event tracking. <br />• Clevertap integration
                for
                advanced <br />analytics, personalized messaging, and <br />engagement tools <strong>&amp;
                    More!</strong></p>
        </div>
    </div>
    <div class="row ">
        <div class=" col-md-8 col-sm-12">
            <p><strong>Refreshed self-care features including
                </strong><br /><strong>registration, subscription management, etc.</strong><br />• Next-best-action
                dashboard.<br />• Exclusive welcome gift.<br />• Embedded Imtiyaz.<br />• App referrals and in-app
                feedback<br /><strong>&amp; More!</strong></p>
        </div>
        <div class="col-md-4 col-sm-12">
            <img class="img-fluid" :src="phone1" />
        </div>
    </div>
</template>
<script lang="ts">
import phone1 from './../../assets/img/phone1.png'
import phone2 from './../../assets/img/phone2.png'
export default {


    data() {
        return {
            phone1: phone1,
            phone2: phone2
        }
    }

}
</script>

<style scoped>
p {
    color: #5B0AD9;
    font-family: Inter;

    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 3vmin;



}

img {
    flex-shrink: 0;
}
</style>  
<style></style>