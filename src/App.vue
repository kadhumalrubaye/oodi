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
import gameOnContainer from './components/game_on/gameOnContainer.vue'
import thankYouContainer from './components/thank_you/thankYouContainer.vue'

</script>

<template>
  <main>
    <myheader />
    <ceo />

    <teamMember />

    <digitalContainer />

    <dzContainer />

    <prContainer />

    <wcContainer />
    <awards />
    <EvetnsContainer />
    <gameOnContainer />
    <thankYouContainer />

  </main>
</template>

<style scoped></style>
