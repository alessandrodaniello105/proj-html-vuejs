<script>
import Box from './partials/Box.vue';
import customersPath from '../data/customersPath';
import { store } from '../data/store';

export default {
  name: 'Customers',
  components: {
    Box,
  },
  data() {
    return {
      customersPath,
      store
    }
  },
}
</script>

<template>
<div class="container">
  <div class="customers-wrapper d-flex justify-between">
    <Box v-for="item in customersPath" :key="item.customer" :src="store.getImagePath(item.src)" />
  </div>
</div>
</template>

<style lang="scss">

.customers-wrapper {
  width: 100%;
  .col {
    display: flex;
    justify-content: center;
    flex-basis: calc(100% / 7);
    margin: 0 auto;
    .card.box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 250px 0 100px;
      width: 150px;
      height: 150px;
    }
  }
  img {
    width: initial !important;
    height: initial !important;
  }

}

</style>