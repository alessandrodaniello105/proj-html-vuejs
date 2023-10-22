<script>

// import Card from './Card.vue'; // import posts!!
import Box from './Box.vue';
import { store } from '../../data/store';

import { Swiper, SwiperSlide } from 'swiper/vue';

import { Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

export default {
 name: 'SwiperT',
 components: {
    Swiper,
    SwiperSlide,
    Box
  },
  props: {
    list: Array
  },
  methods: {
    
  },
  data() {
    return {
      store
    }
  },
  setup() {
    return {
      modules: [Pagination, Mousewheel]
    };
  },
  
}
</script>

<template>

  <swiper
    :direction="'horizontal'"
    :mousewheel="true"
    :slidesPerView="3"
    :spaceBetween="20"
    :loop="true"
    :pagination="false"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="element in list" :key="element.id" > <Box :src="`/src/assets/img/${element.image}`" :date="element.date" :author="element.author" :title="element.title" :name="element.name" :tags="element.tags" /> </swiper-slide>
  </swiper>
  
</template>

<style lang="scss" scoped>

.swiper {
  width: 100%;
  .swiper-wrapper {
    margin: 150px auto;
  }
}
</style>