<script>
import Button from './partials/Button.vue';

export default {
  name: 'Main',
  components: {
    Button
  }
}
</script>

<template>
  <main class="">

    <!-- WE ARE -->
    <section class="we-are">
      <div class="container d-flex justify-between">

        <div class="text-box align-self-center">

          <div class="">
            <p class="special-title bg green">17 YEARS OF EXPERIENCE</p>
          </div>

          <h2 class="title">We Are a <br>

          Web Design <span class="text-green">Agency</span></h2>

          <div class="divider d-flex">
            <div class="line short main"></div>
            <div class="line long main"></div>
          </div>

          <p class="para">Far far away, behind the the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>


          <Button :text="'READ MORE'" :type="'black'" />


          <div class="social-links">
            <ul>
              <li><a href="#">FACEBOOK</a></li>
              <!-- sostituisci i '-' con .join(' - ') -->
              <li>-</li> 
              <li><a href="#">INSTAGRAM</a></li>
              <li>-</li>
              <li><a href="#">YOUTUBE</a></li>
              <li>-</li>
              <li><a href="#">TWITTER</a></li>
            </ul>
          </div>


        </div>

        <div class="img-box">
          <img src="../assets/img/Group-36-2x.png" alt="Sitted woman using a tablet">
        </div>

      </div>


    </section>
    <!-- /WE ARE -->

    <!-- SERVICES -->
    <section class="services">

      <div class="container d-flex justify-between align-it-center">

        <div class="text-box">

          <h2 class="title">
            We Are Here To Make Your <span class="text-green">Website</span> Look More <span class="text-green">Elegant</span> And Stylish
          </h2>

          <div class="divider d-flex">
            <div class="line short main"></div>
            <div class="line long main"></div>
          </div>

          <div class="btn_ctm green">VIEW ALL</div>

        </div>

        <div class="cards-wrapper">

          <div class="row d-flex flex-wrap">

            <!-- SPEED OPTIMIZATION CARD -->
            <div class="col">
              
              <div class="card service">

                <div class="img-box">
                  <img src="../assets/img/optimization.svg" alt="">
                </div>

                <div class="text-box">
                  <h3>SPEED OPTIMIZATION</h3>
                  <div class="special-text"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p></div>
                </div>

              </div>
            
            </div>
            <!-- /SPEED OPTIMIZATION CARD -->


            <!-- CLOUD SOLUTION CARD -->
            <div class="col">
              
              <div class="card service">

                <div class="img-box">
                  <img src="./src/assets/img/optimization.svg" alt="">
                </div>

                <div class="text-box">
                  <h3>Titolo</h3>
                  <p>un poco di testo</p>
                </div>

              </div>
            
            </div>
            <!-- /CLOUD SOLUTION CARD -->


            <!-- WEBSITE DESIGN CARD -->
            <div class="col">
              
              <div class="card service">

                <div class="img-box">
                  <img src="./src/assets/img/optimization.svg" alt="">
                </div>

                <div class="text-box">
                  <h3>Titolo</h3>
                  <p>un poco di testo</p>
                </div>

              </div>
            
            </div>
            <!-- /WEBSITE DESIGN CARD -->

            <!-- /ONLINE MARKETING CARD -->
            <div class="col">
              
              <div class="card service">

                <div class="img-box">
                  <img src="./src/assets/img/optimization.svg" alt="">
                </div>

                <div class="text-box">
                  <h3>Titolo</h3>
                  <p>un poco di testo</p>
                </div>

              </div>
            
            </div>
            <!-- /ONLINE MARKETING CARD -->

          </div>
          
        </div>
      </div>

    </section>
    <!-- /SERVICES -->

    <!-- MISSIONS -->
    <section class="missions">MISSIONS</section>
    <!-- /MISSIONS -->

    <!-- SHOWCASE -->
    <section class="showcase">SHOWCASE</section>
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
    height: 200px;
    &:nth-child(odd) {
      background-color: var(--bg-main-primary);
    }
  }
  .we-are {
    height: 950px;
    p {
      display: inline-block;
      &.bg {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    
    .container {
      position: relative;
      max-width: 1600px;
      height: 100%;
      overflow: hidden;

      .text-box {
        z-index: 2;
        width: 50%;
        padding: 20px;
        margin-left: 100px;
        .special-title {
          margin-bottom: 15px;
        }
        .title {
          margin-bottom: 20px;
        }
        .para {
          padding-right: 30px;
          margin-top: 50px;
          margin-bottom: 60px;
        }
        .social-links {
          margin-bottom: 150px;
          ul li {
            display: inline-block;
            padding-right: 5px;
            margin-top: 85px;
          }
        }
      }

      .img-box {
        position: absolute;
        top: -40px;
        right: -250px;
        height: 950px;
        width: fit-content;
      }
    }
  }
}
</style>