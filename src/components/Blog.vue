<script>
import posts from '../data/posts';
import Divider from './partials/Divider.vue';
import SwiperT from './partials/SwiperT.vue';
import Button from './partials/Button.vue';



export default {
  name: 'Blog',
  components: {
    Divider,
    SwiperT,
    Button
  },
  data() {
    return {
      posts
    }
  },
}
</script>

<template>
<div class="container  d-flex-column">
  <div class="text-box">

    <h2 class="title">Latest News & Our <span class="text-green">Blog</span></h2>

    <Divider />

  </div>

  <div class="posts-wrapper">
    <div class="container">

      <SwiperT :list="posts" />

    </div>
  </div>

  <Button :text="'VIEW ALL POST'" :type="'black'" />

</div>

  
</template>

<style lang="scss">
.blog > .container {
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  //max-width: none !important;
  .text-box {
    margin-top: 240px;
    .divider {
      padding-top: 30px;
      width: fit-content;
      margin: 0 auto;
    }
  }
  .posts-wrapper {
    width: 1800px;
  }
  
  .btn_ctm {
    margin: 50px 0;
  }
}



//  .posts-wrapper {
//    .container {
//      width: 100vw !important;
//    }
//  }
</style>