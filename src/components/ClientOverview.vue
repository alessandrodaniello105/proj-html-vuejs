<script>
export default {
  name: 'ClientOverview',
  props: {
    bgUrl: String
  }
}
</script>

<template>
  <div :style="`background-image: url(${bgUrl});`" class="container-special">

    <!-- <img class="bg" src="../assets/img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg" alt=""> -->

    <div class="quote-container d-flex-column">

      <p class="quote"></p>

      <p class="para">When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!</p>

      <div class="client">

        <div class="photo">
          <img class="thumbnail" src="../assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
        </div>

        <div class="text">

          <h3>LISSA DURBIN</h3>

          <span>Client</span>

        </div>

      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
.container-special {
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
  backdrop-filter: blur(1px) brightness(15%) opacity(74%) contrast(97%);
  -webkit-backdrop-filter: blur(1px) brightness(15%) opacity(74%) contrast(97%);
  -moz-backdrop-filter: blur(1px) brightness(15%) opacity(74%) contrast(97%);
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(to top, rgba(69, 69, 69, 0.876), rgba(55, 50, 23, 0.4));
    
  }
  img.bg {
    width: 100%;
    height: 99%;
    object-fit: cover;

  }
  .quote-container {
    position: relative;
    align-items: center;
    justify-content: center;
    height: 99%;
    text-align: center;
    padding: 0 80px;
    p.quote {
      height: 58px;
      margin-top: 200px;
    }
    p.para {
      font-style: italic;
      font-size: 1.7rem;
      color: $bg-main-primary;
      line-height: 2.7rem;
      padding: 0 40px;
      width: 50%;
      margin: 60px 0 100px;
    }

    .client{
      margin-bottom: 260px;
      .photo {
        background-color: $bg-black-primary;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid white;
        margin: 0 auto;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .text {
        margin-top: 25px;
        h3 {
          color: $green-primary;
          font-size: 23px;
          font-weight: normal;
        }
        span {
          color: $bg-main-primary;
          font-size: 18px;
        }
      }
    }
  }

}
</style>