<script>
import Divider from './partials/Divider.vue';
import Button from './partials/Button.vue';
import Box from './partials/Box.vue';
import projects from '../data/projects';
import { store } from '../data/store';



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
      projects,
      store
    }
  },
  methods: {
    getImagePath(path) {
      return new URL(`../assets/img/${path}`, import.meta.url).href;
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

        <Box v-for="project in projects" :key="project.name" :src="store.getImagePath(project.image)" :name="project.name" :tags="project.tags" />

      </div>
      
      <Button :text="'READ MORE'" :type="'green'" />

    </div>

  </div>

</template>

<style lang="scss">
@use '../scss/partials/vars' as *;
.showcase {
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
        padding: 0 1%;
        .col {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          transition: all .5s;
          border-radius: 10px;
          overflow: hidden;
          padding: 3px;
          
          .back {
            position: absolute;
            width: 99%;
            aspect-ratio: 1 / 1;
            background-image: $gradient-services;
            padding: 3px;
            border-radius: 10px;
            height: 98.6%;
            .text-con {
              position: absolute;
              bottom: 10px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              margin-bottom: 30px;
              p:first-child {
                font-size: 20px;
              }
              p:last-child {
                font-size: 14px;
              }
            }
          }
          &:hover {
            scale: 1.1;
            z-index: 2;
            .back {
              bottom: 3px;
              color: white;
              overflow: hidden;
              
            }
          }
        }
      }
      .btn_ctm {
        margin: 115px 0 176px;
      }
    }
  }
}
</style>