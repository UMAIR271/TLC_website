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
                  <h2 class="fs-1" style="padding-top: 100px">
                    Welcome Back!!!
                  </h2>
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
          "https://tlcbackend-production-22a0.up.railway.app/api/v1/auth/login",
          userData
        );

        console.log(response);
        this.errorMessage = ""; // Reset error message
        this.$router.push("/home");
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
  display: inline-block;
  display: flex;
  align-items: center;
}
.form-right i {
  font-size: 100px;
}
.custom-purple {
  background-color: #000000;
  color: white;
}
</style>
