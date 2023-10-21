<script>
import Divider from './partials/Divider.vue';

export default {
  name: 'Showcase',
  props: {
    lorem: String
  },
  components: {
    Divider
  }
}
</script>

<template>
  <div class="container">
    
    
    <div class="top">

      <div class="title-box">
        <Divider />
      
        <h2 class="title">
          Our recent <span class="text-green">web designs</span> & some examples of past <span class="text-green">projects</span>
        </h2>
        
        <Divider />
      </div>

      <div class="paragraph-box">
        <p class="para"> {{ lorem }}</p>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
.container {
  padding: 215px 0 50px;
  .top {
    display: flex;
    position: relative;
    .title-box,
    .paragraph-box {
      padding: 20px;
    }
    .paragraph-box {
      height: fit-content;
      flex-basis: 100%;
      align-self: flex-end;
      margin-bottom: 30px;
    }
  }
}
</style>