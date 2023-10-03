<template  >
  <div v-for="(ceo, index) in ceos" :key="index" class="      col-sm-12 col-md-6 col-lg-6 col-xl-6 card-deck d-flex flex-warp    ">
    <div class="card text-center  ">
      <img class="card-img-top img-fluid align-center text-center  align-self-center " :src="ceo.img"
        alt="Card image cap">

      <div class="card-body     ">
        <h5 class="card-title" :style="{ color: 'white' }">{{ ceo.name }}</h5>
        <h5 class="card-title">{{ ceo.position }}</h5>
        <p class="card-text  ">
          {{ ceo.msg }}
        </p>
        <footer class="card-text p-3  ">
          {{ ceo.footer }}
        </footer>

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
  methods: {
    cardFooterClickEvent(alertMessage: string) {
      alert(alertMessage)
    }
  }
  , computed: {

  }

};
</script>

<style>
.col * {
  margin-top: 18%;
}

.card-img-top {
  margin-top: -30%;
  max-width: 20rem;

}



.card {
  height: 1500px;
  background-color: #5B0AD9;
  border-radius: 200px;
  padding-bottom: 10%;
  margin-top: 30%;

}

.card-text {
  color: white;
  font-size: 29.17px;

}

.card-title {
  color: #6BDD6B;
  font-size: 2.3rem;

}

footer {
  font-size: 1.8rem;
}

.blockquote-footer {
  color: rgb(211, 217, 222);
}
</style>  
<style></style>
 
  