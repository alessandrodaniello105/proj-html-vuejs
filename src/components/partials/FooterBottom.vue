<script>
import socials from '../../data/socials';

export default {
  name: 'FooterBottom',
  data() {
    return {
      socials
    }
  },
}
</script>

<template>
  <div class="bottom-bar">

    <div class="container d-flex justify-between align-it-center">

      <div class="phone-numbers">
        <span>&copy; 2020 PHLOX BUSINESS THEME.</span>
      </div>

      <nav class="social-nav social-icons d-flex">

        <ul>

          <li v-show="social.icon" v-for="social in socials" :key="social.name">
            <a :href="social.href"><i class="fa-brands" :class="social.icon"></i></a>
          </li>

        </ul>
             
      </nav>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.bottom-bar {
  height: 107px;
  color: $text-footer-primary;
  background: linear-gradient(90deg, $bg-black-secondary 15%, $bg-black-primary 100%);
  .container {
    height: 100%;
    span {
      font-size: 14px;
    }
    
  }
}

</style>