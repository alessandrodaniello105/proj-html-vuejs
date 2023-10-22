<script>
import projects from '../../data/projects';

export default {
  name: 'Box',
  props: {
    src: String
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
</div>
</template>

<style lang="scss" scoped>
.col {
  flex-basis: 25%;
  padding: 0 3px;
  .box {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

}
</style>