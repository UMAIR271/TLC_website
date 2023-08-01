<template>
  <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <!-- Vertical Navbar -->
    <sidebar></sidebar>
    <ProductView> </ProductView>
    <!-- Main content -->
  </div>
</template>
<script>
import sidebar from "../components/adminSideBar.vue";
import ProductView from "../components/catagerieComp.vue";
export default {
  components: {
    sidebar,
    ProductView,
  },
};
</script>
<style scoped>
@import "https://unpkg.com/@webpixels/css@1.1.5/dist/index.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css";
</style>
