<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h3 class="mb-3">Login Now</h3>
          <div class="bg-white shadow rounded">
            <div class="row">
              <div class="col-md-7 pe-0">
                <div class="form-left h-100 py-5 px-5">
                  <form class="row g-4" @submit.prevent="loginUser()">
                    <div class="col-12">
                      <label>Email<span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="bi bi-person-fill"></i>
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter Email"
                          v-model="email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <label>Password<span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="bi bi-lock-fill"></i>
                        </div>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Enter Password"
                          v-model="password"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineFormCheck"
                        />
                        <label class="form-check-label" for="inlineFormCheck"
                          >Remember me</label
                        >
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <a class="float-end">Forgot Password?</a>
                    </div>

                    <div class="col-12">
                      <button
                        class="btn custom-purple px-4 float-end mt-4"
                        @click="loginUser()"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-5 ps-0 d-none d-md-block">
                <div
                  class="form-right h-100 custom-purple text-white text-center pt-5"
                >
                  <div class="mt-1">
                    <img
                      src="../assets/img/Brand_Logos/logo.png"
                      style="height: 300px"
                      alt=""
                    />
                  </div>
                  <router-link class="float-center" to="/signup"
                    >Don't have an account? Sign up</router-link
                  >
                  <br /><br />
                  <h6 class="float-center text-danger" v-if="errorMessage">
                    {{ errorMessage }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-button-mobile">
      <button class="btn custom-purple px-4 mt-3" @click="loginUser()">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async loginUser() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      console.log(userData);
      try {
        const response = await axios.post(
          "http://15.207.223.189:8000/api/v1/auth/login",
          userData
        );
        const role = response.data.user.role;
        if (role == "USER") {
          console.log(role);
          const token = response.data.token;
          const userId = response.data.user._id;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          this.errorMessage = ""; // Reset error message
          this.$router.push("/");
        } else {
          console.log(role);
          const token = response.data.token;
          const userId = response.data.user._id;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          this.errorMessage = "";
          this.$router.push("/admin");
        }
      } catch (error) {
        console.log(error);
        this.errorMessage =
          error.response?.data?.message || "An error occurred.";
      }
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}

.login-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

.login-button-mobile {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: white;
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Adjust this media query as needed */
@media (min-width: 768px) {
  .login-button-mobile {
    display: none;
  }
}

/* Adjust styles for mobile responsiveness */
@media (max-width: 767px) {
  .login-page {
    padding: 0;
  }

  .form-left,
  .form-right {
    padding: 1rem;
  }

  .btn.custom-purple {
    width: 100%;
  }
}
</style>
