<template  >
 
  <div v-for="ceo in ceos" class="card text-center align-items-center col-sm-12 col-md-6 col-lg-6 col-xl-6"  >
  <img class="card-img-top img-fluid" :src="ceo.img" alt="Card image cap">
  <div class="card-body  ">
    <h5 class="card-title">{{ ceo.name }}</h5>
    <h5 class="card-title">{{ ceo.position }}</h5>
    <p class="card-text p-2">
      {{ ceo.msg }}
    </p>
    <footer    class="blockquote-footer " >  
         {{ ceo.footer }} 
         <cite title="Source Title"> 
          {{ ceo.footer }} 
        </cite>
    </footer>
 
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
  methods:{
    cardFooterClickEvent(alertMessage:string){
      alert(alertMessage)
    }
  }
  ,computed: {

  }

};
</script>

<style>
 
.card-img-top{
  margin-top: -30%;
  max-width: 21.3rem;
}
dev[card]{
  background-color: #6BDD6B;
}
.card{
  
  background-color: #5B0AD9;
  margin-top: 18%;
  border-radius: 200px;
  padding-bottom: 10%;
  max-width: 623px;
  

  
  
}
.card-text{
  color: white;
  text-align: justify;
  font-size: 1.8rem;

}

.card-title{
  color: #6BDD6B;
  font-size: 2.3rem;
  
}
footer{
  font-size: 1.8rem;
}
.blockquote-footer{
  color: rgb(211, 217, 222);
}
 

</style>  
<style></style>
 
  