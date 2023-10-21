<script>
// COMPONENTS
import Button from './partials/Button.vue';

// DATA
import socials from '../data/socials';
import { store } from '../data/store';

// SECTIONS
import About from './partials/About.vue';
import Services from './partials/Services.vue';
import Missions from './Missions.vue';
import Showcase from './Showcase.vue';


export default {
  name: 'Main',
  components: {
    Button,
    About,
    Services,
    Missions,
    Showcase
  },
  data() {
    return {
      socials,
      store
    }
  },
  methods: {
    getAboutSocials() {
      store.aboutSocials = socials.slice(0,4);//.map(item => item['name']);
    },
    getUpperCase(text) {
      return text.toUpperCase();
    }
  },
  computed: {
    testSocials() {
      return  store.aboutSocials.join(' - ')
    }
  },
  mounted() {
    this.getAboutSocials()
  }
}
</script>

<template>
  <main class="">

    <section class="we-are">
      <About :list="store.aboutSocials" />
    </section>

    <!-- SERVICES -->
    <section class="services">
      <Services />
    </section>
    <!-- /SERVICES -->

    <!-- MISSIONS -->
    <section class="missions">
      <Missions />
    </section>
    <!-- /MISSIONS -->

    <!-- SHOWCASE -->
    <section class="showcase">
      <Showcase :lorem="store.lorem" />
    </section>
    <!-- /SHOWCASE -->

    <!-- BLOG -->
    <section class="blog">BLOG</section>
    <!-- /BLOG -->

    <!-- CONTACT -->
    <section class="contact">CONTACT</section>
    <!-- /CONTACT -->

    <!-- CLIENTS -->
    <section class="clients">CLIENTS</section>
    <!-- /CLIENTS -->

  </main>
</template>

<style lang="scss">
@use '../scss/partials/vars' as *;

main {
  img {
    height: 105%;
  }
  section {
    min-height: 200px;
    &:nth-child(odd) {
      background-color: var(--bg-main-primary);
    }
  }
  .services {
    margin: 200px 0;
  }
}
</style>