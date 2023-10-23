<script>
import Divider from './Divider.vue';

export default {
  name: 'FooterTop',
  components: {
    Divider
  },
  props: {
    text: String,
    logoPath: String,
    mapImage: String,
    list: Array
  }
}
</script>

<template>
  <div class="top-bar">
    <div class="container d-flex justify-between">

      <!-- INFOS -->
      <div class="box">

        <div class="logo">
          <img :src="logoPath" alt="Phlox Logo">
        </div> 

        <div class="text-box">
          <p class="para">While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees. While the lovely valley teems with vapour around me.</p>
        </div>

      </div>
      <!-- /INFOS -->

      <!-- QUICk LINKS -->
      <div class="box">

        <h4 class="title">QUICk LINKS</h4>

        <Divider />

        <nav class="menu quick-links">
          <ul class="">
            <li v-for="element in list" :key="element.text">
              <a :href="element.href">{{ element.text }}</a>
            </li>
          </ul>
        </nav>

      </div>
      <!-- /QUICk LINKS -->

      <!-- CONTACT -->
      <div class="box">

        <h4 class="title">CONTACT</h4>

        <Divider />

        <p>
          Patricia C. Amedee 4401 Waldeck Street <br>
          Grapevine Nashville, TX 76051
        </p>

        <p>
          <a href="email:info@yourdomain.com">info@yourdomain.com</a>
        </p>

        <p>
          <a href="email:info@yourdomain.com">+99 (0) 101 0000 888</a>
        </p>

      </div>
      <!-- /CONTACT -->

      <!-- LOCATION -->
      <div class="box">

        <h4 class="title">LOCATION ON MAP</h4>

        <Divider />

        <div class="img-box">
          <img :src="mapImage" alt="Google Maps Location">
        </div>
        
      </div>
      <!-- /LOCATION -->

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.top-bar {
  width: 100%;
  margin-bottom: 115px;
  .box {
    position: relative;
    height: 300px;
    width: 370px;
    .title {
      margin-bottom: 13px;
    }
    nav {
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .divider {
      margin-bottom: 30px;
    }
    .text-box {
      margin-top: 10px;
    }
    .img-box {
      width: 100%;
      height: fit-content;
      img {
        width: 100%;
        object-fit: cover;
      }      
    }
    
  }

}
</style>