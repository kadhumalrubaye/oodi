<template>
    <div class="  position-relative  pt-5 ">

        <!-- row 1 -->
        <div class="row flex-row-reverse align-items-center">
         
            <div class=" col-sm-12 col-md-6">
                <h2>
                    FIFA competition at ZINC Baghdad
                </h2>
                <h3>
                    February 2023
                </h3>
                <p>
                    Zain Iraq recently hosted an e-sports
                    tournament on FIFA (PS) for individuals with
                    disabilities at ZINC Baghdad. This initiative
                    aimed to showcase the capabilities and
                    skills of 22 individuals with disabilities in the
                    field of e-sports and create a competitive
                </p>
            </div>
            <div class=" col-sm-12 col-md-6">
                <img class=" img-fluid"  id="eventImage1" :src="eventImage1" alt="eventImage1">
                <img id="eventXo" :src="eventXo" alt=" event xo " class=" position-absolute img-fluid  " :style="{ left: '35%', top: '0%' }" >
            </div>
        </div>
        <!-- row 2 -->
         <div class="row align-items-center">
            <div class="col-sm-12 col-md-6   ">
                <h2 class=" position-relative">
                    Native Platform Vs Cross-Platform Session
                    <img id="eventHalfCirculWithBlackStork" :src="eventHalfCirculWithBlackStork" alt=" eventHalfCirculWithBlackStork "
                        class=" position-absolute " :style="{ bottom: '0px', right: '-10%' }">
                    <img id="smallHalfIndiagoCircult" :src="smallHalfIndiagoCircult" alt=" smallHalfIndiagoCircult " class=" position-absolute "
                        :style="{ bottom: '0px', right: '-1%', transform: 'rotate(-60deg)' }">
                </h2>
                <h3>
                    March 2023
                </h3>


                <p>
                    The GDSC of Al-Iraqia University partnered
                    with Zain Youth to organize a development disabilities at ZINC Baghdad. This initiative
                    Masterclass on the university campus. The skills of 22 individuals with disabilities in the
                    objective of the session was to educate
                    young students about several mobile app


                    development topics. Experienced developers

                </p>

            </div>
            <div class="col-sm-12 col-md-6 ">
                <img class=" img-fluid"  :src="eventImage2" alt="">
            </div>
         </div>
    
    <!-- row3 -->
         
         <div class="row flex-row-reverse align-items-center">
            <div class="col-sm-12 col-md-6">
                <h2>
                    Iraqi Journalist Syndicate event
                </h2>
                <h3>
                    June 2023
                </h3>
                <p>
                    oodi was thrilled to sponsor the recent event organized by the Iraqi Journalists Syndicate. With
                    anaudience of around 400 people, it was an excellent platform to showcase oodi services and support
                    thecommunity.
                    <br>
                    <br>
                    <br>
                    
                    The fantastic sponsorship package included5 vanity numbers for the management
                    team,with a free balance of up to 35k IQD and Hi5access for one month. Oodi also showed
               
                </p>

            </div>
            <div class="col-sm-12 col-md-6">
                <img class=" img-fluid"  :src="eventImage3" alt="eventImage3">
            </div>
         </div>
 
        <img id="indiagoDots" width="286" :src="indiagoDots" alt="">
        <!-- row4 -->
           <div class="row  align-items-center   ">
            <div class="col-sm-12 col-md-6 ">
                <h2 class=" position-relative">

                    E-Sports: PUBG Regional Tournament
                    <img  id="eventSinglCup" width="" :src="eventSinglCup" alt=" eventSinglCup " class=" img-fluid position-absolute"
                        :style="{ bottom: '-70%', right: '-10%' }">
                </h2>
                <h3>
                    July 2023
                </h3>
                <p>
                    Zain Iraq recently sponsored the participation
                    of an Iraqi team in the PUBG Mobile Regional
                    Clash tournament, held in Saudi Arabia on
                    July 20th. As part of the brand’s commitment
                    to supporting local talents, this sponsorship
                    allowed the team to compete on a global


                </p>

            </div>
            <div class="col-sm-12 col-md-6 position-relative">
                <img id="eventGreenHalfStra" width="150" :src="eventGreenHalfStra" alt="" class=" img-fluid position-absolute z-n1"
                    :style="{ top: '-10%', left: '5%' }">
                <img id="indiagoDots" width="286" :src="indiagoDots" alt="" class=" img-fluid position-absolute"
                    :style="{ top: '-15%', right: '10%' }">
                <img id="eventHalfCirculStorkOnly" :src="eventHalfCirculStorkOnly" alt="" class=" position-absolute"
                    :style="{ top: '-30%', right: '-1%' }">

                <img class=" img-fluid"  id="eventImage4" :src="eventImage4" alt="eventImage4">
            </div>
           </div>


        </div>
   
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { indiagoDots, eventSinglCup, eventImage1, eventImage2, eventImage3, eventImage4, eventXo, eventHalfCirculWithBlackStork, smallHalfIndiagoCircult, eventHalfCirculStorkOnly, eventGreenHalfStra } from '../../models/assets_modul';


export default defineComponent({
    setup() {


        return {
            eventGreenHalfStra,
            eventHalfCirculStorkOnly,
            eventSinglCup,
            indiagoDots,
            smallHalfIndiagoCircult,
            eventHalfCirculWithBlackStork,
            eventXo,
            eventImage1,
            eventImage2,
            eventImage3,
            eventImage4,

        }
    }
})
</script>

<style scoped>
h2 {
    color: #5B0AD9;

    font-size: 41.6px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

h3 {
    color: #6BDD6B;
    margin: 0px;
    font-size: 33.3px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

p {
    color: #58595B;

    font-size: 29.17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>  
 
<style scoped>
@media(max-width: 768px) {

    #eventHalfCirculWithBlackStork{
        display: none;
    }
    #smallHalfIndiagoCircult{
        display: none;
    }
    #eventSinglCup{
        display: none;
    }
    #indiagoDots{
        display: none;
    }
#eventHalfCirculStorkOnly{
    display: none;
}
#eventXo{
    display: none;
}

#eventImage1{
   
}

#eventGreenHalfStra{

    display: none;
}
    h2 {
        color: #5B0AD9;

        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    h3 {
        color: #6BDD6B;
        margin: 0px;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        color: #58595B;

        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>  