<template>
  <div class="container-fluid p-1">
    <div class="row m-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 p-1"
        v-for="collection in collectionData"
        :key="collection.id"
      >
        <div class="card">
          <a @click="fetchProductData(collection._id, collection.name)">
            <img class="card-img" :src="collection.photo" alt="Bologna" />
            <div
              class="card-img-overlay text-white d-flex flex-column justify-content-center"
            >
              <h1
                class="card-title text-center"
                style="font-weight: bold; font-size: 50px"
              >
                {{ collection.name }}
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <Logo></Logo>
  <div class="container">
    <h1 class="mt-5">New Arrival</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3" v-for="product in productList" :key="product._id">
        <div
          class="dress-card"
          :class="{ 'out-of-stock': isProductOutOfStock(product) }"
        >
          <div
            class="dress-card-head"
            v-for="photo in product.photos"
            :key="photo.id"
          >
            <img class="dress-card-img-top" :src="photo.sucure_url" alt="" />
          </div>
          <div class="dress-card-body text-center">
            <h4 class="dress-card-title">{{ product.name }}</h4>
            <br />
            <p class="dress-card-para text-center">
              <span class="dress-card-price"
                >Rs {{ product.price }} &ensp;</span
              >
              <span
                v-if="isProductOutOfStock(product)"
                class="out-of-stock-message"
              >
                Out of Stock
              </span>
            </p>
            <div class="row">
              <div class="col-md-12 card-button">
                <a
                  ><div
                    class="card-button-inner bag-button custom-link"
                    @click="addToCard(product._id)"
                  >
                    {{
                      isProductOutOfStock(product)
                        ? "Out of Stock"
                        : "Add to Bag"
                    }}
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import Logo from "../components/brandLogoComp.vue";
import { useAppStore } from "../store/index.js";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      collectionData: [],
      productList: [],
    };
  },
  mounted() {
    this.GetcollectionApi();
    this.getProductList();
    this.store = useAppStore();
  },
  computed: {
    isProductOutOfStock() {
      return (product) => {
        const isOutOfStock = product.stock === 0;
        console.log(
          `Product ID ${product._id} is out of stock: ${isOutOfStock}`
        );
        return isOutOfStock;
      };
    },
  },

  methods: {
    async GetcollectionApi() {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: token,
          },
        };

        const response = await axios.get(
          "http://localhost:8000/api/v1/collection",
          config
        );
        for (let i = 0; i < response.data.collections.length; i++) {
          this.collectionData.push(response.data.collections[i]);
        }
      } catch (error) {
        console.log(error);
        this.errorMessage =
          error.response?.data?.message || "An error occurred.";
      }
    },
    async getProductList() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/product/"
        );
        const data = response.data.product;
        this.productList = data;
        this.errorMessage = ""; // Reset error message
      } catch (error) {
        console.log(error);
        this.errorMessage =
          error.response?.data?.message || "An error occurred.";
      }
    },
    fetchProductData(id, collectionName) {
      this.store.updateCurrentCollectionID();
      this.store.getCurrentCollectionId(id, collectionName);
      this.$router.push("/product_list");
    },
    addToCard(id) {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      };
      this.store.addTocardBag(id);
    },
  },
};
</script>
<style>
/* Card styles */
.card {
  position: relative;
  overflow: hidden;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}

.card-img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
  padding: 20px;
  transform: scale(0.9);
  transition: transform 0.6s;
}

.card:hover .card-img-overlay {
  opacity: 1;
  transform: scale(1);
}

.card-title {
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: slide-up 0.5s ease-in-out;
}

.overlay-title {
  transform: translateY(100%);
  transition: transform 0.6s;
}

.card:hover .overlay-title {
  transform: translateY(0%);
}

@keyframes slide-up {
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

.dress-card-img-top {
  width: 100%;
  border-radius: 7px 7px 0 0;
}

.dress-card-body {
  padding: 1rem;
  background: #fff;
  border-radius: 0 0 7px 7px;
}

.dress-card-title {
  line-height: 0.5rem;
}

.dress-card-crossed {
  text-decoration: line-through;
}

.dress-card-price {
  font-size: 1rem;
  font-weight: bold;
}

.dress-card-off {
  color: #000000;
}

.dress-card-para {
  margin-bottom: 0.2rem;
  font-size: 1rem;
  margin-bottom: 0rem;
}

.dress-card {
  border-radius: 14px;
}

.dress-card-heart {
  font-size: 1em;
  color: #db2763;
  margin: 4.5px;
  position: absolute;
  left: 4px;
  top: 0px;
}

.surprise-bubble {
  position: absolute;
  bottom: 12rem;
  right: 2rem;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #fff;
  padding: 1rem;
  color: white;
  -webkit-transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.surprise-bubble a {
  font-size: 0.65em;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  font-family: arial;
  text-decoration: none;
  position: absolute;
  top: 9px;
  left: 20px;
  opacity: 0;
  -webkit-transition-delay: 2s;
  /* Safari */
  transition-delay: 2s;
  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.surprise-bubble:hover {
  border-radius: 999rem;
  padding: 1rem;
  width: 26%;
  height: 30px;
  background: #db2763;
  color: white;
  -webkit-transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.surprise-bubble:hover a {
  opacity: 1;
  -webkit-transition-delay: 2s;
  /* Safari */
  transition-delay: 2s;
  -webkit-transition: opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.card-button {
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  padding: 9px;
}
.card-button a {
  text-decoration: none;
}

.card-button-inner {
  padding: 10px;
  border-radius: 3px;
}

.bag-button {
  background: #000000;
  color: white;
}

.bag-button:hover {
  background: #000000;
}

.wish-button {
  border: 1px solid #000000;
  color: #000000;
}
.card-img {
  height: 400px;
}
.custom-link:hover {
  text-decoration: underline;
}

/* Animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Text styling */
h1 {
  animation: fadeIn 6s;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Dim out-of-stock products */
.out-of-stock {
  opacity: 0.5;
  transition: opacity 0.3s; /* Add a transition for smoother change */
  pointer-events: none; /* Disable hover and click for out-of-stock products */
}

/* Style the "Out of Stock" message on hover */
.out-of-stock:hover .out-of-stock-message {
  opacity: 1; /* Show the message on hover */
}

/* Style the "Out of Stock" message */
.out-of-stock-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.7); /* Red background for the message */
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s;
}
</style>
