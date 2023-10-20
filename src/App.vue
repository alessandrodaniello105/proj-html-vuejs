<script>
import Hello from './components/Hello.vue';

import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Hello,
    Header
  }
}
</script>

<template>

  <Header />

</template>

<style lang="scss">
@use './components/scss/main.scss' as *;
</style>