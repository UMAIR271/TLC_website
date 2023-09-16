<template>
  <div id="wrap">
    <div id="columns" class="columns_4">
      <h1>Products</h1>
      <br /><br />
      <figure v-for="product in productList" :key="product._id">
        <a
          v-for="photo in product.photos"
          @click="redirectSingleProduct(product._id)"
          :key="photo"
        >
          <img :src="photo.sucure_url" />
        </a>
        <figcaption>
          {{ product.name }}
          <span class="price">PKR{{ product.price }}</span>
        </figcaption>
        <a class="button" @click="addToCard(product._id)">Add To Bag</a>
        <a class="button" @click="redirectCheckOut(product._id)">Buy Now</a>
      </figure>
    </div>
  </div>
</template>
<script>
import { useAppStore } from "../store/index.js";
import axios from "axios";
export default {
  mounted() {
    this.store = useAppStore();
    this.fetchAllProducts();
  },
  data() {
    return {
      productList: null,
      collectionName: null,
    };
  },
  methods: {
    async fetchAllProducts() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/product/"
        );
        this.productList = response.data.product;
        console.log("response", response);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    redirectSingleProduct(productId) {
      this.store.singleProduct(productId);
      this.addToCard(productId);
      this.$router.push("/singleProduct");
    },
    redirectCheckOut(productId) {
      this.store.singleProduct(productId);
      this.addToCard(productId);
      this.$router.push("/checkOut");
    },
    addToCard(id) {
      this.store.addTocardBag(id);
    },
  },
};
</script>
<style>
#wrap {
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
}
.columns_2 figure {
  width: 49%;
  margin-right: 1%;
}
.columns_2 figure:nth-child(2) {
  margin-right: 0;
}
.columns_3 figure {
  width: 32%;
  margin-right: 1%;
}
.columns_3 figure:nth-child(3) {
  margin-right: 0;
}
.columns_4 figure {
  width: 24%;
  margin-right: 1%;
}
.columns_4 figure:nth-child(4) {
  margin-right: 0;
}
.columns_5 figure {
  width: 19%;
  margin-right: 1%;
}
.columns_5 figure:nth-child(5) {
  margin-right: 0;
}
#columns figure:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
}
#columns:hover figure:not(:hover) {
  opacity: 0.4;
}
div#columns figure {
  display: inline-block;
  background: #fefefe;
  border: 2px solid #fafafa;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 0px 15px;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  column-break-inside: avoid;
  padding: 15px;
  padding-bottom: 5px;
  background: -webkit-linear-gradient(45deg, #fff, #f9f9f9);
  opacity: 1;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

div#columns figure img {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  height: 60px;
  font-weight: 600;
  text-overflow: ellipsis;
}

a.button {
  padding: 10px;
  background: rgb(0, 0, 0);
  margin: 10px;
  display: block;
  text-align: center;
  color: #fff;
  transition: all 1s linear;
  text-decoration: none;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  border-bottom: 3px solid #000000;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
a.button:hover {
  background: #ff6536;
  border-bottom: 3px solid salmon;
  color: #f1f2f3;
}
@media screen and (max-width: 960px) {
  #columns figure {
    width: 24%;
  }
}
@media screen and (max-width: 767px) {
  #columns figure {
    width: 32%;
  }
}
@media screen and (max-width: 600px) {
  #columns figure {
    width: 49%;
  }
}
@media screen and (max-width: 500px) {
  #columns figure {
    width: 100%;
  }
}
</style>
