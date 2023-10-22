<script>
import Divider from './partials/Divider.vue';
import Button from './partials/Button.vue';
import Box from './partials/Box.vue';
import projects from '../data/projects';


export default {
  name: 'Showcase',
  props: {
    lorem: String
  },
  components: {
    Divider,
    Box,
    Button
  },
  data() {
    return {
      projects
    }
  },
  methods: {
    getImagePath(path) {
      return new URL(path, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div class="container d-flex-column">
    
    
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

    <div class="bottom align-self-center">
      <div class="boxes-wrapper d-flex">

        <Box v-for="project in projects" :key="project.name" :src="`/src/assets/img/${project.image}`" />

      </div>
      
      <Button :text="'READ MORE'" :type="'green'" />

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

  .bottom {
    text-align: center;

    .boxes-wrapper {
      width: 100%;
      flex-wrap: wrap;
    }
    .btn_ctm {
      margin: 115px 0 176px;
    }
  }
}
</style>