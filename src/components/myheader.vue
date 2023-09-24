



<template>
    <!-- <header :style="{backgroundImage:'url('+bgUpperWave+')'}" > -->
    <header>
        <img id="bgUpperWave" :src="bgUpperWave" alt="waves" class=" img-fluid">
        <img id="header_green_start" :src="header_green_start" alt="big start" class=" img-fluid">
        <img id="header_gren_dots" :src="header_gren_dots" alt="big start" class=" img-fluid">
        <img id="header_small_star" :src="header_small_star" alt="big start" class=" img-fluid">

        <h1>
            Zain Iraq Digital & oodi's <br>
            Qurterly Newsletter
        </h1>

        <section >
            <img id="header_ellips" :src="header_ellips" alt="big start" class=" img-fluid">
            <img id="header_green_ball" :src="header_green_ball" alt=" header_green_ball" class=" img-fluid">
            <img id="header_cutted_circule" :src="header_cutted_circule" alt=" header_cutted_circule" class=" img-fluid">
            <img id="header_white_half_circul" :src="header_white_half_circul" alt="header_white_half_circul" class=" img-fluid">
            <img id="header_small_green_half_circle" :src="header_small_green_half_circle" alt="header_small_green_half_circle" class=" img-fluid">
            <img id="header_white_dots" :src="header_white_dots" alt="header_white_dots" class=" img-fluid">
            <img id="header_white_start_series" :src="header_white_start_series" alt="header_white_start_series" class=" img-fluid">


           <div id="TheDigitalInsider" class=" container">
            <h2>
                The
            </h2>

            <h3>
                DIGITAL
            </h3>
            <h4>
                INSIDER
            </h4>
            
           </div>
        </section>
        <img id="zain_logo" :src="zain_logo" alt="zain_logo" class=" img-fluid">
       <span>&</span>
        <img id="header_oodi_logo" :src="header_oodi_logo" alt="header_oodi_logo" class=" img-fluid">

    </header>
</template>
  

<script lang="ts">
import bgUpperWave from '@/assets/img/header/green_upper_wave.png'
import header_green_start from '@/assets/img/header/header_green_start.png'
import header_gren_dots from '@/assets/img/header/header_gren_dots.png'
import header_small_star from '@/assets/img/header/header_small_star.png'
import header_ellips from '@/assets/img/header/header_ellips.png'
import header_green_ball from '@/assets/img/header/header_green_ball.png'
import header_cutted_circule from '@/assets/img/header/header_cutted_circule.png'
import header_small_green_half_circle from '@/assets/img/header/header_small_green_half_circle.png'
import header_white_half_circul from '@/assets/img/header/header_white_half_circul.png'
import header_white_dots from '@/assets/img/header/header_white_dots.png'
import header_white_start_series from '@/assets/img/header/header_white_start_series.png'
import zain_logo from '@/assets/img/header/zain_logo.png'
import header_oodi_logo from '@/assets/img/header/header_oodi_logo.png'



export default {
    data: function () {
        return {

            bgUpperWave: bgUpperWave,
            header_green_start,
            header_gren_dots,
            header_small_star,
            header_ellips,
            header_green_ball,
            header_cutted_circule,
            header_small_green_half_circle,
            header_white_half_circul,
            header_white_dots,
            header_white_start_series,
            zain_logo,
            header_oodi_logo,
        }

    },
    components: {

    }
}
</script>

<style scoped>
header {

    width: 100%;
    height: 861px;

    background-color: #5B0AD9;
    position: relative;
    z-index: -1;

}

#bgUpperWave {
    position: absolute;
    top: 0px;
    right: -1px;
    z-index: -1;

}

#header_green_start {
 
    position: absolute;
    top: 30%;
    right: -1px
}

#header_small_star {
    position: absolute;
    top: 61%;
    right: -1px;
    margin-right: 12%;


}

#header_gren_dots {
    position: absolute;
    top: 70%;
    right: -1px;
    margin-right: 50px;

}

h1 {
    font-style: italic;
    font-weight: lighter;
    color: white;
    position: absolute;
    top: 80%;
    right: -1px;
    margin-right: 5%;
}

section {
  
    max-width: 600px;
    height: 600px;

    position: relative;
   
    margin-left: 5%;
    top: 100px;
 

}
#TheDigitalInsider{
 
}

#header_ellips {

    max-width: 559.08px;
    position: absolute;
}

/* the */
h2 {

    color: #6BDD6B;
    font-size: 100px;
    margin: 0rem;
    padding: 0rem;
    margin-left: 5rem;
    
    
}

/* digital */
h3 {
    color: white;
    font-size: 100px;
    margin: 0px;
    padding: 0px;
    margin-left: 5rem;
}

/* insider */
h4 {
    color: #6BDD6B;
    font-weight: bold;
    font-size: 100px;
    margin: 0px;
    padding: 0px;
    margin-left: 10rem;
}
#header_green_ball{
    position: absolute;
  
    right: -73px;
    top:75px;
    z-index: -1;
}
#header_cutted_circule{
    position: absolute;
  
  right: -73px;
  top:75px;
  z-index: 0; 
}
#header_small_green_half_circle{
    width: 12%;
    position: absolute; 
    top:2.5rem;
    right: 8.5rem;        
    
}
#header_white_half_circul{
    position: absolute; 
    top:4rem;
    right: 6rem;
}
#header_white_dots{
    position: absolute;
    bottom: 10rem;
    left: 1rem;
}
#header_white_start_series{
   position: absolute;
   right: 1rem;
   top:-2rem;
}
#zain_logo{
    position: absolute;
    top: 83%;
    
    margin-left: 5rem;
}
#header_oodi_logo{
    position: absolute;
    top: 82%;
    
    margin-left: 25rem;
}
span{
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 83%;
    font-style: italic;
    margin-left: 22rem; 
}
</style>  
<style></style>