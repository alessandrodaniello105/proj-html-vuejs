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
      <div class="special-text"><p>{{ card.text }}</p></div>
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

.card.service {
  margin: 30px 0;
  margin-left: 40px;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  border-radius: 10px;
  .img-box {
    width: 75px;
  }

}
</style>