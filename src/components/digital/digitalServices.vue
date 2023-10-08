<template>
  <div class="container position-relative mt-5">
    <img id="indiagoDots" class="img-fluid" :src="indiagoDots" alt="indiagoDots" />
    <img id="catedGreenCircult" class="img-fluid" :src="catedGreenCircult" alt="catedGreenCircult" />
    <img id="catedGreenCircult2" class="img-fluid" :src="catedGreenCircult" alt="catedGreenCircult" />
    <img id="smallGreenStar" class="img-fluid" :src="smallGreenStar" alt="smallGreenStar" />
    <img id="greenDots" class="img-fluid" :src="greenDots" alt="greenDots" />
    <img id="bigHalfGrenCircul" class="img-fluid" :src="bigHalfGrenCircul" alt="bigHalfGrenCircul" />
    <div class="row text-center">
      <div class="col-sm-12 col-md-6">
        <div class=" ">
          <img class="img-fluid im" :src="img1" width="500" />
          <p>
            Iraq’s first and only digital-native telco, on <br />
            track to become the nation’s leading <br />
            superapp!
          </p>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div>
          <img class="img-fluid" :src="zainDigitalServiceImg" />
          <p>
            Enabling mobile payments over carrier <br />
            billing, across gaming, apps, entertainment <br />
            and much more!
          </p>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div><img class="img-fluid" :src="img3" /></div>
        <p>
          Managing organizing local regional <br />
          e- sport tournaments and sponsoring <br />
          professional teams to continue nourishing <br />
          strong ties with the Iraqi gaming <br />
          community! <br />
        </p>
      </div>
      <div class="col-sm-12 col-md-6">
        <div>
          <img class="img-fluid" :src="img4" />
        </div>
        <p>
          Our superb, in-house team driving <br />
          innovation across customer apps and <br />
          operational platforms!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import img1 from '../../assets/img/1.png'
import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/4.png'
import indiagoDots from '@/assets/img/dots.png'
import catedGreenCircult from '@/assets/img/greenCutedCircul.png'
import smallGreenStar from '@/assets/img/greenstart.png'
import { greenDots, bigHalfGrenCircul, zainDigitalServiceImg } from '@/models/assets_modul'


export default {
  data: function () {
    return {
      zainDigitalServiceImg,
      img1: img1,

      img3: img3,
      img4: img4,
      indiagoDots,
      catedGreenCircult,
      smallGreenStar,
      greenDots,
      bigHalfGrenCircul
    }
  }
}
</script>

<style scoped>
.row {
  margin-top: 10%;
  overflow-x: hidden;
}

#bigHalfGrenCircul {
  position: absolute;
  max-width: 20%;
  transform: rotate(130deg);
  right: -15%;
  bottom: 30%;
}

#catedGreenCircult2 {
  position: absolute;
  max-width: 25%;
  bottom: 20%;
  left: -25%;
}

#greenDots {
  position: absolute;
  max-width: 20%;
  right: 40%;
  top: 60%;
}

#smallGreenStar {
  position: absolute;
  max-width: 62px;
  right: 10%;
}

#catedGreenCircult {
  position: absolute;
  max-width: 25%;
  left: 37%;
  top: -5%;
}

#indiagoDots {
  position: absolute;
  max-width: 15%;
}

p {
  font-size: 27.08px;
  color: #5b0ad9;
}
</style>  
<style scoped>
@media(max-width: 768px) {


  .row {
    margin-top: 10%;
    overflow-x: hidden;
  }

  #bigHalfGrenCircul {
    display: none;
    position: absolute;
    max-width: 20%;
    transform: rotate(130deg);
    right: -15%;
    bottom: 30%;
  }

  #catedGreenCircult2 {
    display: none;
    position: absolute;
    max-width: 25%;
    bottom: 20%;
    left: -25%;
  }

  #greenDots {
    position: absolute;
    max-width: 20%;
    right: 40%;
    top: 60%;
  }

  #smallGreenStar {
    display: none;
    position: absolute;
    max-width: 62px;
    right: 10%;
  }

  #catedGreenCircult {
    display: none;
    position: absolute;
    max-width: 25%;
    left: 37%;
    top: -1px;
  }

  #indiagoDots {
    position: absolute;
    max-width: 15%;
    bottom: 15%
  }

  p {
    font-size: 1rem;
    color: #5b0ad9;
  }
}
</style>