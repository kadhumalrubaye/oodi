<template>
    <div class="container mt-5">
        <EventHeading />
        <EventsList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventHeading from './eventHeading.vue';
import EventsList from './eventsList.vue';

export default defineComponent({
    setup() {
        return {};
    },
    components: { EventHeading, EventsList }
})
</script>

<style scoped></style>   
<style></style>