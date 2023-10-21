<script>
import headerMenu from '../data/headerMenu';
import Button from './partials/Button.vue';
import {store} from '../data/store'
import socials from '../data/socials';

export default {
  name: 'Header',
  components: {
    Button
  },
  data() {
    return {
      headerMenu,
      store,
      socials
    }
  },
  methods: {
    getActive(item) {
      store.isActive = {};
      store.isActive = item;
      if (store.isActive == item) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    },
    getUpperCase(text) {
      return text.toUpperCase();
    }
  
  },
  mounted() {
    store.isActive = headerMenu[0]
  }
}
</script>

<template>
  <header>
      
    <div class="top-bar">

      <div class="container d-flex justify-between">

        <div class="phone-numbers">
          <a href="tel:+1 88451234" class="tel-num"> (001) 88451234 </a>
          <a href="tel:+1 88455438" class="tel-num"> 88455438 </a>
        </div>

        <nav class="social-nav social-icons d-flex">

          <ul>

            <!-- <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li> -->

            <li v-show="social.icon" v-for="social in socials" :key="social.name"><a :href="social.href"><i class="fa-brands" :class="social.icon"></i></a></li>

          </ul>
               
        </nav>

      </div>

    </div>

    <div class="bottom-bar">
      <div class="container d-flex justify-between align-it-center">

        <div class="left">
          <div class="logo">
            <img src="/cropped-Group-39-2x.png" alt="">
          </div>  
        </div>

        <div class="center align-self-center">
          <nav class="menu ">
            <ul>
              <li @click="getActive(link)" v-for="link in headerMenu" :key="link.text" :class="{'active': store.isActive == link && link.isActive}">
                <a href="#">{{ getUpperCase(link.text) }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="right">
          
          <Button :text="'PURCHASE'" :type="'green'" />

          <a href="#">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>

        </div>

      </div>

    </div>

  </header>
</template>

<style lang="scss" scoped>

header{
  
  .top-bar {
    height: 39px;
    background-color: var(--bg-header-primary);
    .container {
      padding-left: 30px;
      .phone-numbers a {
        margin-right: 10px;
      }
    }
  }

  .bottom-bar {
    height: 104px;
    background-color: var(--text-header-primary);
    .container {
      height: 100%;

      .left,
      .right {
        flex-basis: 20%;
        height: 50%;
      }

      .left {
        .logo {
          height: 100%;
          line-height: 52px;
          img {
            height: 85%;
            vertical-align: middle;
          }
        }
      }


      .center {
        /* flex-grow: 1; */
        nav.menu ul {
          display: flex;
          justify-content: space-between;
          column-gap: 35px;
          li {
            display: inline-block;
          }
        }
      }


      .right {
        .btn_ctm {
          margin-right: 30px;
        }
      }
    }
  }
} 

</style>