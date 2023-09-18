<template >
  <div v-for="ceo in ceos" class="col-sm-12  col-md-6 col-lg-6 ">
    <div class="card justify-content-center align-items-center align-content-center "
      style="border-style: none; background: rgba(255,255,255,0);">
      <div
        class=" bg-light border rounded-circle border-5 border-light d-inline float-start justify-content-xxl-center align-items-xxl-center"
        style="width: 130px; border: 8.5px solid var(--bs-indigo); position: relative; margin-bottom: -50px; height: 130px;">
        <img alt="any"
          class=" rounded-circle img-fluid border border-5   justify-content-center align-items-center align-self-center order-2"
          :src="ceo.img">
      </div>


      <div class=" card-body   " style="background-color: #5B0AD9; border-radius: 100px;">
        <h4 class=" card-title text-light mt-5">{{ ceo.name }}</h4>
        <h5 class=" card-subtitle mb-3">{{ ceo.position }}</h5>
        <p class=" card-text ps-2 pe-2   ">
          {{ ceo.msg }}

        </p>
        <h6>
          {{ ceo.footer }}

        </h6>
      </div>


    </div>
  </div>
</template>
<script lang="ts">

import AliAlZahidImg from '@/assets/img/AliAl-Zahid.png'
import DanielToranImg from '@/assets/img/DanielToran.png'
import { DanielToranModel, aliAliZahidModel } from '@/models/employee';
DanielToranModel.img = DanielToranImg
aliAliZahidModel.img = AliAlZahidImg
const ceos = {
  aliAliZahidModel,
  DanielToranModel,
};

export default {

  data: function () {
    return {

      ceos: ceos,
    }

  },
  computed: {

  }

};
</script>

<style scoped>
h4 {
  font-size: 6vmin;
}

h5 {
  color: #6BDD6B;
  font-size: 4vmin;
}

p,
h6 {
  color: white;
  text-align: justify;
  font-size: 3vmin;

}



h6 {

  text-align: center;

}




@media (min-width: 320px) {}

@media (min-width: 425px) {}

@media (min-width: 768px) {
  h4 {
    font-size: 3vmin;
  }

  h5 {
    font-size: 2.5vmin;
  }

  p,
  h6 {

    font-size: 2vmin;

  }

}

@media (min-width: 992px) {}

@media (min-width: 1024px) {
  h4 {
    font-size: 3vmin;
  }

  h5 {
    font-size: 2.5vmin;
  }

  p,
  h6 {

    font-size: 2vmin;

  }
}


@media (min-width: 1200px) {
  h4 {
    font-size: 3vmin;
  }

  h5 {
    font-size: 2.5vmin;
  }

  p,
  h6 {

    font-size: 2vmin;

  }
}
</style>  
<style></style>
 
  