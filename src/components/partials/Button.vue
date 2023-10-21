<script>
export default {
  name: 'Button',
  props: {
    text: String,
    green: String
  }
}
</script>

<template>
  <div :class="green" class="btn_ctm">{{ text }}</div>
</template>

<style>

</style>