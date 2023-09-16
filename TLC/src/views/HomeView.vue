<template>
  <Header></Header>
  <carsoule></carsoule>
  <Slider></Slider>
  <service></service>
  <whatUp></whatUp>
  <Footer></Footer>
  <div
    v-if="isUserSignedUp"
    class="custom-model-main"
    v-bind:class="{ 'model-open': showModal }"
  >
    <div class="custom-model-inner">
      <div class="close-btn" @click="closeModal">×</div>
      <div class="custom-model-wrap">
        <div class="pop-up-content-wrap">
          <h3 class="text-center">Awesome!</h3>
          <h4 class="text-center">
            Do signup To claim<br /><Span>your 5% off</Span>
          </h4>
          <div class="button-container">
            <router-link to="/login">
              <button class="btn btn-primary btn-lg btn-block">Login</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-overlay" @click="closeModal"></div>
  </div>
</template>
<script>
import Header from "../components/HeaderComp.vue";
import carsoule from "../components/carsouleComp.vue";
import Slider from "../components/cardSliderComp.vue";
import service from "../components/serviceComp.vue";
import Footer from "../components/footerComp.vue";
import whatUp from "../components/whatUpIComp.vue";

export default {
  components: {
    Header,
    carsoule,
    Footer,
    Slider,
    service,
    whatUp,
  },
  data() {
    return {
      showModal: false,
      isUserSignedUp: true,
    };
  },
  mounted() {
    this.checkUserLoggedIn();
  },
  methods: {
    checkUserLoggedIn() {
      // Replace this with your actual authentication check logic
      // For now, let's assume the user is logged in if a token is present
      const token = localStorage.getItem("token");
      if (token) {
        this.isUserSignedUp = true;
      } else {
        this.openModal();
      }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
.custom-model-main {
  text-align: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; /* z-index: 1050; */
  -webkit-overflow-scrolling: touch;
  outline: 0;
  opacity: 0;
  -webkit-transition: opacity 0.15s linear, z-index 0.15;
  -o-transition: opacity 0.15s linear, z-index 0.15;
  transition: opacity 0.15s linear, z-index 0.15;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: auto;
}

.model-open {
  z-index: 99999;
  opacity: 1;
  overflow: hidden;
}
.custom-model-inner {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: -webkit-transform 0.3s ease-out;
  -o-transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  display: inline-block;
  vertical-align: middle;
  width: 300px;
  margin: 30px auto;
  max-width: 97%;
}
.custom-model-wrap {
  display: block;
  width: 100%;
  position: relative;
  background-color: #000000;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
  text-align: left;
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  color: white;
  box-sizing: border-box;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
}
.model-open .custom-model-inner {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  position: relative;
  z-index: 999;
}

.custom-model-wrap .text-center {
  color: white;
}
.model-open .bg-overlay {
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
}
.bg-overlay {
  background: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-transition: background 0.15s linear;
  -o-transition: background 0.15s linear;
  transition: background 0.15s linear;
}
.close-btn {
  position: absolute;
  right: 0;
  top: -30px;
  cursor: pointer;
  z-index: 99;
  font-size: 30px;
  color: #fff;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust this margin as needed */
}

@media screen and (min-width: 800px) {
  .custom-model-main:before {
    content: "";
    display: inline-block;
    height: auto;
    vertical-align: middle;
    margin-right: -0px;
    height: 100%;
  }
}
@media screen and (max-width: 799px) {
  .custom-model-inner {
    margin-top: 45px;
  }
}
</style>
