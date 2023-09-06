<template>
    <div class="row text-center">
        <teamHeading />
        <br>
        <teamImageGrid />
    </div>
</template>

<script lang="ts">
import teamHeading from './teamHeading.vue';
import teamImageGrid from './teamImageGrid.vue';

export default {
    components: {

        teamHeading,
        teamImageGrid
    }
}
</script>