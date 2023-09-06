<script setup lang="ts">
import ceo from './components/ceo/ceo.vue';
import myheader from './components/myheader.vue'
import teamMember from './components/team/teamMember.vue'
import digitalContainer from './components/digital/digitalContainer.vue';
import dzContainer from './components/digital_zone/dzContainer.vue';

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
  </main>
</template>

<style scoped></style>
