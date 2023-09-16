<template>
  <Header></Header>
  <product></product>
</template>
<script>
import Header from "../components/HeaderComp.vue";
import product from "../components/AllProductsComp.vue";
export default {
  components: { Header, product },
};
</script>
