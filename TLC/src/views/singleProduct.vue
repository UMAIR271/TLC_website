<template>
  <Header></Header>
  <single-product></single-product>
</template>
<script>
import Header from "../components/HeaderComp.vue";
import singleProduct from "../components/single_product.vue";

export default {
  components: {
    Header,
    singleProduct,
  },
};
</script>
