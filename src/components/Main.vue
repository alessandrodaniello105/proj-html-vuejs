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
import ClientOverview from './ClientOverview.vue';
import Blog from './Blog.vue';
import Contact from './Contact.vue';

export default {
  name: 'Main',
  components: {
    Button,
    About,
    Services,
    Missions,
    Showcase,
    ClientOverview,
    Blog,
    Contact
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

    <section>
      <ClientOverview :bgUrl="'/src/assets/img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg'" />
    </section>

    <!-- BLOG -->
    <section class="blog">
      <Blog />

      
    <!-- CONTACT -->
    <div class="contact">
      <Contact />
    </div>
    <!-- /CONTACT -->

    </section>
    <!-- /BLOG -->

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
    &:nth-child(odd) {
      background-color: var(--bg-main-primary);
    }
  }
  .services {
    margin: 200px 0;
  }
}
</style>