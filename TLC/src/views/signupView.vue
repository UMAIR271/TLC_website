<template>
  <div class="signup-form">
    <div class="container">
      <div class="header">
        <h1>Create an Account</h1>
        <p>Get started for free!</p>
      </div>
      <form @submit.prevent="Signup()">
        <div class="input">
          <i class="fa-solid fa-user"></i>
          <input type="text" placeholder="Username" v-model="userName" />
        </div>
        <div class="input">
          <i class="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email" v-model="email" />
        </div>
        <div class="input">
          <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <div class="input">
          <i class="fa-solid fa-lock"></i>
          <input type="tel" placeholder="Phone Number" v-model="phoneNumber" />
        </div>
        <input class="signup-btn" type="submit" value="SIGN UP" />
      </form>
      <p>{{ errorMessage }}</p>
      <!--       
      <div class="social-icons">
        <i class="fab fa-facebook"></i>
        
        <i class="fab fa-twitter"></i>
       
        <i class="fab fa-google"></i>
      </div> -->
      <p>
        Already have an account
        <router-link class="float-center" to="/login">Sign In</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",
      errorMessage: "",
    };
  },
  methods: {
    async Signup() {
      const userData = {
        name: this.userName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        Role: "USER",
      };
      console.log(userData);
      try {
        const response = await axios.post(
          "http://15.207.223.189:8000/api/v1/auth/signup",
          userData
        );

        console.log(response);
        this.errorMessage = ""; // Reset error message
        this.$router.push("/login");
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
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  outline-color: #a5b4fc;
}

body {
  background-color: #e2e8f0;
}

p {
  font-size: 14px;
  color: #6b7280;
}

.signup-form {
  display: grid;
  place-items: center;
  min-height: 100vh;
  max-width: 480px;
  padding: 32px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 8px #6b728040;
  text-align: center;
  margin: 0 auto; /* Add this line to center the form horizontally */
}

.header {
  margin-bottom: 48px;
}

.header h1 {
  font-weight: bolder;
  font-size: 28px;
  color: #6366f1;
}

.input {
  position: relative;
  margin-bottom: 24px;
}

.input input {
  width: 100%;
  border: none;
  padding: 8px 40px;
  border-radius: 4px;
  background-color: #f3f4f6;
  color: #1f2937;
  font-size: 16px;
}

.input input::placeholder {
  color: #6b7280;
}

.input i {
  top: 50%;
  width: 36px;
  position: absolute;
  transform: translateY(-50%);
  color: #6b7280;
  font-size: 16px;
}

.signup-btn {
  width: 100%;
  border: none;
  padding: 8px 0;
  margin: 24px 0;
  border-radius: 4px;
  background-color: #04aa6d;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}

.signup-btn:active {
  background-color: #04aa6d#4f46e5;
  transition: all 0.3s ease;
}

.social-icons i {
  height: 36px;
  width: 36px;
  line-height: 36px;
  border-radius: 50%;
  margin: 24px 8px 48px 8px;
  background-color: gray;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}

i.fa-facebook {
  background-color: #3b5998;
}

i.fa-twitter {
  background-color: #1da1f2;
}

i.fa-google {
  background-color: #dd4b39;
}

a {
  color: #6366f1;
  text-decoration: none;
}
</style>
