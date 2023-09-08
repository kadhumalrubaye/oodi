<template>
    <div class="container">
        <!-- row 1 -->
        <div class="row">
            <div class="col">
                <img :src="eventImage1" alt="">
            </div>
            <div class="col">
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

        </div>
        <!-- row 2 -->
        <div class="row flex-column-reverse flex-lg-row flex-md-row flex-sm-row flex-xl-row">
            <div class="col ">
                <h2>
                    Native Platform Vs Cross-Platform Session
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
            <div class="col ">
                <img :src="eventImage2" alt="">
            </div>


        </div>
        <!-- row3 -->
        <div class="row">
            <div class="col">
                <img :src="eventImage3" alt="">
            </div>
            <div class="col">
                <h2>
                    Iraqi Journalist Syndicate event
                </h2>
                <h3>
                    June 2023
                </h3>
                <p>
                    oodi was thrilled to sponsor the recent event
                    organized by the Iraqi Journalists Syndicate.
                    MWith an audience of around 400 people, it
                    was an excellent platform to showcase oodi
                    services and support the community.
                    <br>
                    The fantastic sponsorship package included
                    5 vanity numbers for the management team,
                    with a free balance of up to 35k IQD and Hi5
                    access for one month. Oodi also showed

                </p>

            </div>

        </div>
        <!-- row4 -->
        <div class="row flex-column-reverse flex-lg-row flex-md-row flex-sm-row flex-xl-row">
            <div class="col">
                <h2>
                    E-Sports: PUBG Regional Tournament
                </h2>
                <h3>
                    July 023
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
            <div class="col">
                <img :src="eventImage4" alt="eventImage4">
            </div>


        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import eventImage1 from './../../assets/img/event_picture1.png'
import eventImage2 from './../../assets/img/event_img2.png'
import eventImage3 from './../../assets/img/event_img3.png'
import eventImage4 from './../../assets/img/event_img4.png'

export default defineComponent({
    setup() {


        return {
            eventImage1: eventImage1,
            eventImage2: eventImage2,
            eventImage3: eventImage3,
            eventImage4: eventImage4,
        }
    }
})
</script>

<style scoped>
h2 {
    color: #5B0AD9;
    font-family: Inter;
    font-size: 41.667px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

h3 {
    color: #6BDD6B;
    font-family: Inter;
    font-size: 33.333px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

p {
    color: #58595B;
    font-family: Inter;
    font-size: 29.167px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media only screen and (min-device-width: 768px) {}

@media only screen and (max-device-width: 768px) {
    h2 {
        font-size: 25px;
    }

    h3 {
        font-size: 15px;


    }

    p {
        font-size: 10px;
    }

    img {
        max-width: 300px;
    }
}
</style>