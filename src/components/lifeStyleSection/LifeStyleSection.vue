<template>
    
    <section :style="{backgroundImage:`url(${lifeStyleBackground})`}"  >
    <h1>LIFESTYLE STRATEGY</h1>
    <h2>VS TODAY</h2>
<article>
    <h3>O</h3>
    <div id="hiFive">
    <h4>Hi Five</h4>
    <img :src="full_header_start" alt="">
 </div>
</article>
    </section>
   
</template>

<script setup lang="ts">
import { lifeStyleBackground, full_header_start } from './../../models/assets_modul';
</script>

<style scoped>
img{
    position: absolute;
   
}
section{
    background-color:#5B0AD9;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    
}
section h1{
    flex:1 0;
    
    max-width: 100%;
    font-size: 10vmin;
    color: white;
}
section h2{
    font-size: 10em;
    max-width: 100%;
    -webkit-text-stroke: 5px white;
    color: transparent;
    font-style: italic;

}

article {
    max-width: 100% !important;
    flex: 1 0;
    display: inline;
  
    position: relative;
}
article h3 {
    
    color: #6BDD6B;
    font-size: 50em;
    height: 100%;
 position: absolute;
   
}
 

</style>