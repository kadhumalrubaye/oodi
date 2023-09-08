<script setup lang="ts">
import ceo from './components/ceo/ceo.vue';
import myheader from './components/myheader.vue'
import teamMember from './components/team/teamMember.vue'
import digitalContainer from './components/digital/digitalContainer.vue';
import dzContainer from './components/digital_zone/dzContainer.vue';
import prContainer from './components/product_roadmap/prContainer.vue'
import wcContainer from './components/whatis_coursera/wcContainer.vue'
import awards from './components/awards/awardsContainer.vue'
import EvetnsContainer from './components/events/evetnsContainer.vue';





</script>

<template>
  <myheader />
  <br>
  <main>
    <ceo />
    <br>
    <teamMember />
    <br>
    <digitalContainer />
    <br>
    <dzContainer />
    <br>
    <prContainer />
    <br>
    <wcContainer />
    <awards />
    <EvetnsContainer />

  </main>
</template>

<style scoped></style>
