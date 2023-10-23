<script>
import Divider from './partials/Divider.vue'
import { store } from '../data/store';

import Button from './partials/Button.vue';

export default {
  name: 'Missions',
  components: {
    Divider,
    Button
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="container">

    <div class="img-box ">
      <!-- <img class="mask" src="../assets/img/busy-architect-PYVKWM4-1024x872.jpg" alt="busy architect"> -->
      <div class="green"></div>
      <img src="../assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="businesswoman analysing document">
    </div>

    <div class="text-box">

      <h2 class="title">
        learn more about our <span class="text-green">missions</span>
      </h2>

      <Divider />

      <p class="para">
        {{ store.lorem }}
      </p>

      <Button :text="'READ MORE'" :type="'green'" />


    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

.container {
  
  margin: 280px 0;

  .img-box {
    position: relative;
    width: 650px;
    height: 500px;
  
    z-index: 2;
    .green {
      position: absolute;
      z-index: 0;
      top: -125px;
      left: -125px;
      display: block;
      background: url('../assets/img/busy-architect-PYVKWM4-1024x872.jpg'), linear-gradient(#97E15F 7%, #00D9A6 100%);
      width: 650px;
      height: 100%;
      background-blend-mode: multiply;
      background-size: cover;
      border-radius: 25px;
      overflow: hidden;
    
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
      overflow: hidden;
      z-index: 2;
  
      &:last-child {
        position: relative;
        box-shadow: 0 0 10px $text-footer-primary;
      }
    }
  }
  
  .text-box {
    width: 43%;
    float: right;
  .divider {
    margin: 10px 0 20px;
  }
  }

  .btn_ctm {
    margin-top: 35px;
  }
  
  h2.title {
    font-weight: 500;
  }
}
</style>