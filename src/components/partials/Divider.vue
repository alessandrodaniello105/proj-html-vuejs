<script>
export default {
  name: 'Divider'
}
</script>

<template>
  <div class="divider d-flex">
    <div class="line short main"></div>
    <div class="line long main"></div>
  </div>
</template>

<style lang="scss">
@use '../../scss/partials/vars' as *;



.line::before {
  /* margin-left: 2px; */
  display: inline-block;
  content: '';
  height: 5px;
  border-radius: 25px;
  overflow: hidden;
  /* background-color: red; */
  background-image: linear-gradient(#97E15F 0% 26%, #0a8a6c 80% 100%);
  //margin: 22px 0;
}
.line.short::before {
  width: 8px;
  margin-right: 10px;
}

.line.long::before {
  width: 48px;
}

.main::before {
  background-image: $gradient-primary;
  color: $gradient-primary;
}

</style>