<script>
export default {
  name: 'Button',
  props: {
    text: String,
    type: String
  }
}
</script>

<template>
  <div :class="type" class="btn_ctm">{{ text }}</div>
</template>

<style>

</style>