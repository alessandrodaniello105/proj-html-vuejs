<script>
import projects from '../../data/projects';

export default {
  name: 'Box',
  props: {
    src: String,
    date: String,
    author: String,
    title: String,
    name: String,
    tags: Array,
  },
  data() {
    return {
      projects
    }
  }
}
</script>

<template>
<div class="col">
  
  <div class="card box">
    <img :src="src" alt="">
  </div>

  <div class="back" v-show="name">
    <p>{{ name }}</p>
    <p>{{ tags }}</p>
  </div>

  <div class="post-info" v-show="date">
    <div class="card post">
      <p>{{ `${date} - ${author}` }}</p>
      <ul>
        <li><span>{{ title }}</span></li>
      </ul>
    </div>
  </div>

</div>
</template>

<style lang="scss" >
@use '../../scss/partials/vars' as *;



.swiper-slide {
  margin: 64px;
  width: fit-content !important;
}
.swiper-slide > .col {
  width: 500px;
  height: 400px;
  .box {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20px rgba($color: #424242, $alpha: .3);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .post-info {
    .card {
      position: relative;
      bottom: 63px;
      width: 80%;
      background-color: $fill-white;
      padding: 35px 45px 20px;
      margin: 0 auto;
      text-align: left;
      box-shadow: 0 0 10px rgba($color: #5c5c5c, $alpha: .1);

      li {
        color: $green-primary;
        font-size: 22px;
        font-weight: 600;
        span {
          color: $bg-black-primary;
        }
      }
    }
  }
}


.col {
  flex-basis: 25%;
  position: relative;
  padding: 3px 3px;
  .card {
    width: 100%;
  }
  .box {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }

}
</style>