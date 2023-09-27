<template>
  <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <!-- Vertical Navbar -->
    <sidebar></sidebar>
    <!-- Main content -->
    <dashboardMain></dashboardMain>
  </div>
</template>
<script>
import sidebar from "../components/adminSideBar.vue";
import dashboardMain from "../components/dashboardMain.vue";

export default {
  components: {
    sidebar,
    dashboardMain,
  },
  mounted() {
    this.isAuthenticated();
  },
  methods: {
    isAuthenticated() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
@import "https://unpkg.com/@webpixels/css@1.1.5/dist/index.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css";
</style>
