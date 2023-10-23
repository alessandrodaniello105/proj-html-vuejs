<script>
import contactCards from '../../data/contactCards';
import Button from './Button.vue';

export default {
  name: 'SpecialBox',
  components: {
    Button
  },
  data() {
    return {
      contactCards
    }
  },
}
</script>

<template>
  <div class="row d-flex">

    <div v-for="element in contactCards" :key="element.title" class="col">

      <div class="card d-flex-column align-it-center justify-center" :class="element.type">

        <p class="question">{{ element.question }}</p>

        <h2 class="cta">{{ element.title }}</h2>

        <div  v-if="element.type == 'black'" class="input-box">
          <input id="email-input" :type="element.input" placeholder="Enter Your Email Address">
          <button class="btn_outline">SUBMIT</button>
        </div>

        <Button v-else :text="'START NOW'" :type="'black'" />

      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;


.row {
  margin: 40px;
  .col {
    position: relative;
    bottom: -200px;
    min-height: 200px;
    flex-basis: 50%;
    padding: 17px;
    .card {
      color: $text-header-primary;
      height: 350px;
      border-radius: 15px;
      &.green {
        background-image: $gradient-secondary;
        box-shadow: $box-shadow-green;
      }
      &.black {
        box-shadow: $box-shadow-secondary;
      }
      p.question {
        color: $text-white-secondary;
        font-size: 18px;
        font-weight: 300;
      }
      h2.cta {
        font-size: 40px;
      }

      .cta {
        margin: 20px 0 50px;
      }

      .input-box {
        width: 60%;
        #email-input {
          width: calc(100% - 95px);
          vertical-align: middle;
          padding: 0 40px;
          border-radius: 30px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border: 0;
          background-color: $bg-header-primary;
          ::placeholder{
            color: white;
            opacity: 1;
          }
          &:focus,
          &:focus-visible,
          &:focus-within,
          &:active,
          &:target {
            box-shadow:none;
          }
        }
        .btn_outline {
          background-color: $bg-header-primary;
          vertical-align: middle;
          border: 0;
          line-height: 56px;
          padding: 0 20px;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          &:active {
            background-color: lighten($bg-header-primary, 10%);
          }
        }
      }

    }
  
  }
}

</style>