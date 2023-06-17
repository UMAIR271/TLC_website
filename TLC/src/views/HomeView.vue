<template>
  <Header></Header>
  <carsoule></carsoule>
  <Slider></Slider>
  <service></service>
  <Footer></Footer>
</template>
<script>
import Header from "../components/HeaderComp.vue";
import carsoule from "../components/carsouleComp.vue";
import Slider from "../components/cardSliderComp.vue";
import service from "../components/serviceComp.vue";
import Footer from "../components/footerComp.vue";

export default {
  components: {
    Header,
    carsoule,
    Footer,
    Slider,
    service,
  },
};
</script>
