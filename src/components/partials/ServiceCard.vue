<script>
// DATA
import servicesCards from '../../data/servicesCards';

export default {
  name: 'ServiceCard',
  props: {
    card: Object
  },
  data() {
    return {
      servicesCards
    }
  },
}
</script>

<template>
       
  <div class="card service">

    <div class="img-box">
      <img :src="`/src/assets/img/${card.src}`" :alt="`${card.title} icon`">
    </div>

    <div class="text-box">

      <h3>{{ card.title }}</h3>

      <div class="special-text">
        <p>{{ card.text }}</p>
      </div>

    </div>

  </div>

</template>

<style lang="scss">
.special-text p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.col > {
  .card.service {
    width: 95%;
    border-radius: 10px;
    padding: 40px;
    margin: 20px auto;
    margin-left: 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
    .img-box {
      width: 75px;
      margin-bottom: 20px;
    }
    .text-box {
      h3 {
        font-size: 26px;
        font-weight: 500;
      }
      .special-text {
        margin: 15px 0 20px;
      }
    }
  
  }
}
</style>