<script>
// COMPONENTS
import FooterTop from './partials/FooterTop.vue';
import FooterBottom from './partials/FooterBottom.vue';

// DATA
import footerMenu from '../data/footerMenu';
import { store } from '../data/store';

export default {
  name: 'Footer',
  components: {
    FooterTop,
    FooterBottom
  },
  data() {
    return {
      footerMenu,
      store
    }
  },
}
</script>

<template>
  <footer class="">
      
    <FooterTop :list="footerMenu" :logoPath="'/cropped-Group-39-2x.png'" :mapImage="store.getImagePath('map.png')" :text="store.lorem" />

    <FooterBottom />

  </footer>
</template>

<style lang="scss">
@use '../scss/partials/vars' as *;

footer {
  margin-top: 155px;
  height: 100%;
  /* box-shadow: 10px 0 24px 0 rgba(0,0,0,.2); */
  p {
    color: $text-footer-secondary;
    margin-bottom: 30px;
  }
  ul li a {
    width: fit-content;
  }
  
}

//footer .top-bar .box .divider {
//  margin-bottom: 30px;
//}

// footer .top-bar .box ul {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// }

// footer .top-bar .box .title {
//   font-size: 22px;
//   font-weight: 700;
//   letter-spacing: 1px;
//   font-family: 'Quicksand', sans-serif;
//   color: var(--text-footer-tertiary);
//   margin-bottom: 13px;
// }

// footer .top-bar .box .text-box {
//   margin-top: 10px;
// }

// footer .top-bar .box .img-box {
//   width: 100%;
//   height: fit-content;
// }

// footer .top-bar .box .img-box img {
//   width: 100%;
//   object-fit: cover;
// }


footer .bottom-bar {
  height: 107px;
  color: var(--text-footer-primary);
  background: linear-gradient(90deg, var(--bg-black-secondary) 15%, var(--bg-black-primary) 100%);
} 

footer .bottom-bar .container {
  height: 100%;
} 

footer .bottom-bar span {
  font-size: 14px;
}

footer .bottom-bar a {
  color: var(--text-footer-primary);
} 

footer .bottom-bar a:visited {
  color: var(--text-footer-primary);
} 

</style>