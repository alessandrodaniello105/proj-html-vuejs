<script>
import Button from './Button.vue';

export default {
  name: 'WeAreSec',
  props: {
    list: Array
  },
  components: {
    Button
  }
}
</script>

<template>
  <div class="container">

    <div class="text-box align-self-center">

      <div class="">
        <p class="special-title bg green">17 YEARS OF EXPERIENCE</p>
      </div>

      <h2 class="title">We Are a <br>

      Web Design <span class="text-green">Agency</span></h2>

      <div class="divider d-flex">
        <div class="line short main"></div>
        <div class="line long main"></div>
      </div>

      <p class="para">Far far away, behind the the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>


      <Button :text="'READ MORE'" :type="'black'" />


      <div class="social-links">
        <ul>
          <li v-for="social in list" :key="social"><a :href="social.href">{{ social.name }}</a></li>
        </ul>
      </div>


    </div>

    <div class="img-box">
      <img src="../../assets/img/Group-36-2x.png" alt="Sitted woman using a tablet">
    </div>
  </div>
</template>

<style lang="scss">
.we-are {
  height: 950px;
  p {
    display: inline-block;
    &.bg {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  .container {
    position: relative;
    // max-width: 1600px;
    height: 100%;
    overflow: hidden;

    .text-box {
      z-index: 2;
      width: 50%;
      padding: 20px;
      margin-left: 100px;
      .special-title {
        margin-bottom: 15px;
      }
      .title {
        margin-bottom: 20px;
      }
      .para {
        padding-right: 30px;
        margin-top: 50px;
        margin-bottom: 60px;
      }
      .social-links {
        margin-bottom: 150px;
        ul li {
          display: inline-block;
          padding-right: 5px;
          margin-top: 85px;
        }
      }
    }

    .img-box {
      position: absolute;
      top: -40px;
      right: -250px;
      height: 950px;
      width: fit-content;
    }
  }
}
</style>