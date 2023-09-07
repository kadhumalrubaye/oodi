<script setup lang="ts">
import ceo from './components/ceo/ceo.vue';
import myheader from './components/myheader.vue'
import teamMember from './components/team/teamMember.vue'
import digitalContainer from './components/digital/digitalContainer.vue';
import dzContainer from './components/digital_zone/dzContainer.vue';
import prContainer from './components/product_roadmap/prContainer.vue'


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
  </main>
</template>

<style scoped></style>
