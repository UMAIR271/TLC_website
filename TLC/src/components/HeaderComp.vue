<template>
  <header class="sticky-header">
    <!-- Header Start -->

    <nav class="navbar navbar-expand-md navbar-light bg-white p-4">
      <div class="container-fluid p-0">
        <router-link class="navbar-brand text-uppercase fw-800 pe-5" to="/">
          <span class="pe-2">
            <img
              src="../assets/img/Brand Logos/logo.png"
              style="height: 110px"
              alt=""
            />
          </span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNav"
          aria-controls="myNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNav">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="#">All</a>
            <!-- <a class="nav-link" href="#">Women's</a> -->
            <router-link class="nav-link" to="/Men">Men</router-link>
            <router-link class="nav-link" to="/women">Women</router-link>
            <router-link class="nav-link" to="/kid">Kid</router-link>
            <router-link class="nav-link" to="/shoes">Shoes</router-link>
            <router-link class="nav-link" to="/shopingCart"
              >({{ addToCard }})<i class="fa-solid fa-cart-shopping fa-2xl"></i
            ></router-link>
            <router-link class="nav-link" to="/login" @click="logout()"
              >Logout</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <!-- Header End -->
  </header>
</template>
<script>
import { useAppStore } from "../store/index.js";
import { ref, watch } from "vue";

export default {
  setup() {
    const store = useAppStore();
    const addToCard = ref(store.addToCounter);

    // Watch for changes in store.addToCounter and update addToCard
    watch(
      () => store.addToCounter,
      (newValue) => {
        addToCard.value = newValue;
      }
    );

    return {
      addToCard,
    };
  },

  methods: {
    logout() {
      // Clear the authentication token from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      // Redirect the user to the login page (replace with your login route)
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.container {
  margin: 30px auto;
}

.navbar-nav .nav-link {
  color: #000 !important;
  padding: 0.5rem 0rem !important;
  border-color: transparent;
  margin-left: 1.5rem;
  transition: none;
}

.navbar .navbar-toggler:focus {
  box-shadow: none;
}
.sticky-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  /* Your other styling */
}

.navbar-nav .nav-link.active,
.border-red {
  border-bottom: 3px solid #6366f1;
}

.navbar-nav .nav-link:hover {
  border-bottom: 3px solid #6366f1;
}

@media (max-width: 767.5px) {
  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link:hover {
    background-color: #6366f1;
    color: #fff !important;
  }

  .navbar-nav .nav-link {
    border: 3px solid transparent;
    margin: 0.8rem 0;
    display: flex;
    border-radius: 10px;
    justify-content: center;
  }
}
</style>
