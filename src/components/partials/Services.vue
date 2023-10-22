<script>
import servicesCards from '../../data/servicesCards';
import Button from './Button.vue';

import ServiceCard from './ServiceCard.vue';

export default {
  name: 'Services',
  components: {
    Button,
    ServiceCard
  },
  data() {
    return {
      servicesCards
    }
  },
}
</script>

<template>
  <div class="container d-flex justify-between align-it-center">

    <div class="text-box">

      <h2 class="title">
        We Are Here To Make Your <span class="text-green">Website</span> Look More <span class="text-green">Elegant</span> And Stylish
      </h2>

      <div class="divider d-flex">
        <div class="line short main"></div>
        <div class="line long main"></div>
      </div>

      <Button :type="'green'" :text="'VIEW ALL'" />

    </div>

    <div class="cards-wrapper">

      <div class="row d-flex flex-wrap">

        <!-- SERVICE CARDS -->
        <div class="col" v-for="card in servicesCards" :key="card.title">
          
          <ServiceCard :card="card" />
        
        </div>
        <!-- /SERVICE CARDS -->

      </div>
      
    </div>

  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1600px;
  & > .text-box {
    width: 38%;
    font-size: 37px;
    .btn_ctm {
      margin-top: 30px;
    }
    
  }
  .cards-wrapper {
    width: 62%;
    .row .col {
      flex-basis: 50%;
      
    }
  }
}
h2.title {
  font-weight: 600;
}
</style>