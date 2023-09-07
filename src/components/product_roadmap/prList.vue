<template>
    <div class="row">
        <h1 style="font-size: 25px;color: var(--bs-indigo);"><strong>EXCITING NEWS! </strong><br />Some big product
            releases are planned in the upcoming months: an enhanced <br /><strong>oodi app with advanced lifestyle
                products and refreshed UI for efficient user</strong>experience, <strong>and a brand-new Zain&#39;s
                mobile self-care app</strong> with simplified and <br />modern customer experience.</h1>
    </div>
    <div class="row d-xl-flex align-items-xl-center">
        <div class="col">
            <picture><img class="img-fluid" :src="phone1" /></picture>
        </div>
        <div class="col">
            <h1 style="font-size: 22px;color: var(--bs-indigo);"><strong>New and enhanced features are coming…
                </strong>• Redesigned sign-up journey.<br />• In-depth event tracking. <br />• Clevertap integration for
                advanced <br />analytics, personalized messaging, and <br />engagement tools <strong>&amp;
                    More!</strong></h1>
        </div>
    </div>
    <div class="row d-xl-flex align-items-xl-center">
        <div class="col">
            <h1 style="font-size: 22px;color: var(--bs-indigo);"><strong>Refreshed self-care features including
                </strong><br /><strong>registration, subscription management, etc.</strong>• Next-best-action
                dashboard.<br />• Exclusive welcome gift.<br />• Embedded Imtiyaz.<br />• App referrals and in-app
                feedback<br /><strong>&amp; More!</strong></h1>
        </div>
        <div class="col"><img class="img-fluid" :src="phone2" /></div>
    </div>
    <div class="row">
        <h1 style="text-align: center;font-size: 100px;font-weight: bold;color: rgb(80,237,54);">…STAY TUNED!</h1>
    </div>
    <div class="row">
        <h1 style="font-size: 100px;font-weight: bold;font-family: 'Bungee Shade', serif;color: rgb(38,232,21);">THE
            DIGITAL</h1>
    </div>
    <div class="row">
        <h1 style="font-size: 83px;font-weight: bold;text-align: right;color: var(--bs-indigo);">KNOWLEDGE HUB</h1>
    </div>
    <div class="row">
        <h1 style="font-style: italic;color: rgb(77,244,63);">LEARN THE SKILLS OF THE FUTURE</h1>
    </div>
    <div class="row">
        <h1 style="font-size: 24px;font-family: Inter, sans-serif;color: var(--bs-indigo);">In today&#39;s rapidly
            evolving digital landscape,<strong> continuous learning and upskilling </strong>are <br />essential. Every
            newsletter, we will aim to bring top recommendations, so you stay <br />ahead of the curve: a collection of
            resources, courses, and insights to help you <br /><strong>expand yourdigital skills and broaden your
                knowledge.</strong><br />This quarter’s pick: LinkedIn and Coursera.</h1>
    </div>
    <div class="row">
        <h1 style="font-size: 24px;color: var(--bs-indigo);"><strong>What is LinkedIn Learning?</strong>LinkedIn
            Learning is an online platform with video courses taught by experts, offering<br />personalized, on-demand
            learning for career advancement. Integrated with LinkedIn, <br />it allows users to showcase completed
            courses and skills on their profiles. </h1>
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

<style scoped></style>