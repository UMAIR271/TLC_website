<template>
  <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <!-- Vertical Navbar -->
    <sidebar></sidebar>
    <category> </category>
    <!-- Main content -->
  </div>
</template>
<script>
import sidebar from "../components/adminSideBar.vue";
import category from "../components/catagerieComp.vue";
export default {
  components: {
    sidebar,
    category,
  },
};
</script>
<style scoped>
@import "https://unpkg.com/@webpixels/css@1.1.5/dist/index.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css";
</style>
