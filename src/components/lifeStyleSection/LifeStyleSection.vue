<template>
    <div :style="{
        backgroundImage: `url(${lifeStyleBackground})`, position: 'relative',
    }">

        <img class=" img-fluid position-absolute d-flex  " :style="{ right: '15%', bottom: '25%' }" :src="full_header_start"
            alt="">
        <div class="container " :style="{ height: '1042px' }">
            <h1 :style="{ color: 'white', fontSize: '110.41px' }">
                LIFESTYLE STRATEGY
            </h1>
            <h2
                :style="{ WebkitTextStroke: '1px white', fontSize: '8rem', color: 'transparent', textAlign: 'center', fontFamily: 'serif' }">
                VS TODAY
            </h2>
            <h1
                :style="{ color: '#6BDD6B', fontSize: '787px', textAlign: 'center', left: '25%', lineHeight: '60%', position: 'absolute' }">
                O
            </h1>

            <div
                :style="{ height: '112px', width: '222px', backgroundColor: 'white', position: 'absolute', border: ' solid none ', borderRadius: '10%', right: '35%' }">
                <h1 :style="{ paddingLeft: '5%', marginTop: '5%' }">
                    long term
                </h1>
                <h3 :style="{ paddingLeft: '5%', paddingTop: '0s%' }">
                    plans
                </h3>
                <span :style="{ position: 'absolute', left: '60%', top: '60%' }">
                    <img width="150" height="100" src="@/assets/img/1.png" alt=" img">
                </span>
            </div>

            <div class=" row rounded-5 g-0 align-center justify-center align-items-center justify-content-center"
                :style="{ height: '112px', width: '300px', backgroundColor: 'white', position: 'absolute', left: '20%' }">
                <h1 class=" col-6" :style="{ paddingLeft: '5%', marginTop: '5%' }">
                    hi five
                </h1>

                <span class=" col-6 " :style="{ position: 'absolute', left: '-30%', top: '20%' }">
                    <img width="150" height="100" src="@/assets/img/1.png" alt=" img">
                </span>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { lifeStyleBackground, full_header_start } from './../../models/assets_modul';
</script>

<style scoped></style>