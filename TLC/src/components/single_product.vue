<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-5">
        <div
          class="main-img"
          v-for="photo in singleProductIdData.photos"
          :key="photo"
        >
          <img class="img-fluid" :src="photo.sucure_url" alt="ProductS" />
          <div class="row my-3 previews">
            <div class="col-md-3">
              <img class="w-100" :src="photo.sucure_url" alt="Sale" />
            </div>
            <div class="col-md-3">
              <img class="w-100" :src="photo.sucure_url" alt="Sale" />
            </div>
            <div class="col-md-3">
              <img class="w-100" :src="photo.sucure_url" alt="Sale" />
            </div>
            <div class="col-md-3">
              <img class="w-100" :src="photo.sucure_url" alt="Sale" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="main-description px-2">
          <div class="category text-bold">Category: {{ collectionName }}</div>
          <div class="product-title text-bold my-3">
            {{ singleProductIdData.name }}
          </div>

          <div class="price-area my-4">
            <!-- <p class="old-price mb-1"> -->
            <!-- <del>PKR{{ singleProductIdData.price }}</del> -->
            <!-- <span class="old-price-discount text-danger">(20% off)</span> -->
            <!-- </p> -->
            <p class="new-price text-bold mb-1">
              PKR{{ singleProductIdData.price }}
            </p>
            <p class="text-secondary mb-1">
              (Additional tax may apply on checkout)
            </p>
          </div>

          <div class="buttons d-flex my-5">
            <div class="block">
              <button class="shadow btn custom-btn" @click="addToCard()">
                Add to cart
              </button>
            </div>

            <!-- <div class="block quantity">
              <input
                type="number"
                class="form-control"
                id="cart_quantity"
                value="1"
                min="0"
                max="5"
                placeholder="Enter email"
                name="cart_quantity"
              />
            </div> -->
          </div>
        </div>

        <div class="product-details my-4">
          <p class="details-title text-color mb-1">Product Details</p>
          <p class="description">
            {{ singleProductIdData.description }}
          </p>
        </div>

        <div class="row questions bg-light p-3">
          <div class="col-md-1 icon">
            <i class="fa-brands fa-rocketchat questions-icon"></i>
          </div>
          <div class="col-md-11 text">
            Have a question about our products at E-Store? Feel free to contact
            our representatives via live chat or email.
          </div>
        </div>

        <div class="delivery my-4">
          <p class="font-weight-bold mb-0">
            <span><i class="fa-solid fa-truck"></i></span>
            <b>Delivery done in 3 days from date of purchase</b>
          </p>
          <p class="text-secondary">Order now to get this product delivery</p>
        </div>
        <!-- <div class="delivery-options my-4">
          <p class="font-weight-bold mb-0">
            <span><i class="fa-solid fa-filter"></i></span>
            <b>Delivery options</b>
          </p>
          <p class="text-secondary">View delivery options here</p>
        </div> -->
      </div>
    </div>
    <hr />
    <button
      @click="showTemplate = !showTemplate"
      class="add-reviews-button mx-5"
    >
      {{ showTemplate ? "Hide Reviews" : "Add Reviews" }}
    </button>
    <div v-if="showTemplate" class="container">
      <p>
        We strive to provide the best possible service for our clients. Please
        leave a review to let us know how we are doing and to share your
        experience with others.
      </p>
      <form id="review-form" @submit.prevent="addRivews()">
        <h2>Write Your Review</h2>
        <div class="rate">
          <input
            type="radio"
            id="star5"
            v-model="rating"
            name="rate"
            value="5"
          />
          <label for="star5" title="5 stars">5 stars</label>
          <input
            type="radio"
            id="star4"
            v-model="rating"
            name="rate"
            value="4"
          />
          <label for="star4" title="4 stars">4 stars</label>
          <input
            type="radio"
            id="star3"
            v-model="rating"
            name="rate"
            value="3"
          />
          <label for="star3" title="3 stars">3 stars</label>
          <input
            type="radio"
            id="star2"
            name="rate"
            v-model="rating"
            value="2"
          />
          <label for="star2" title="2 stars">2 stars</label>
          <input
            type="radio"
            id="star1"
            name="rate"
            v-model="rating"
            value="1"
          />
          <label for="star1" title="1 star">1 star</label>
        </div>
        <div class="form-group">
          <label class="control-label" for="review">Your Review:</label>
          <textarea
            class="form-control"
            rows="10"
            placeholder="Your Review"
            name="review"
            id="review"
            v-model="reviews"
          ></textarea>
          <span id="reviewInfo" class="help-block pull-right">
            <span id="remaining">999</span> Characters remaining
          </span>
        </div>
        <a @click="addRivews()" id="submit" class="btn btn-primary">Submit</a>
        <input id="submitForm" type="submit" style="display: none" />
      </form>
    </div>
  </div>

  <div class="container similar-products my-4">
    <p class="display-5">Similar Products</p>

    <div class="row">
      <div class="col-md-3" v-for="product in productList" :key="product._id">
        <div class="similar-product">
          <a href="#" v-for="photo in product.photos" :key="photo._id">
            <img class="w-100" :src="photo.sucure_url" alt="Preview" />
          </a>

          <p class="title">{{ product.name }}</p>
          <p class="price">$100</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useAppStore } from "../store/index.js";
import axios from "axios";
export default {
  mounted() {
    this.store = useAppStore();
    this.getSingleProduct();
  },
  data() {
    return {
      singleProductIdData: {},
      collectionName: null,
      productList: null,
      showTemplate: false,
      rating: null,
      reviews: null,
    };
  },
  methods: {
    async fetchCollectionIdproduct(id) {
      try {
        if (id) {
          const response = await axios.get(
            `http://15.207.223.189:8000/api/v1/product/get-by-collection/${id}`
          );
          console.log(response.data);
          this.productList = response.data.products;
          // console.log("hello".this.collectionName);
          // this.store.updateCurrentCollectionID();
        } else {
          console.log("collectionId is null or undefined");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    async getSingleProduct() {
      try {
        if (this.store.singleProductId !== null) {
          const token = localStorage.getItem("token");
          const config = {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
          };
          this.collectionName = this.store.collectionName;
          const response = await axios.get(
            `http://15.207.223.189:8000/api/v1/product/${this.store.singleProductId}`,
            config
          );
          this.singleProductIdData = response.data.product;

          console.log("singleProductIdData", this.singleProductIdData);
          this.getCollectionIdData(response.data.product.collectionId);

          // console.log("hello".this.collectionName);
          // this.store.updateCurrentCollectionID();
        } else {
          console.log("collectionId is null or undefined");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    async getCollectionIdData(id) {
      try {
        if (this.store.singleProductId !== null) {
          const response = await axios.get(
            `http://15.207.223.189:8000/api/v1/collection/${id}`
          );
          this.collectionName = response.data.collection.name;
          this.fetchCollectionIdproduct(id);
          // console.log("hello".this.collectionName);
          // this.store.updateCurrentCollectionID();
        } else {
          console.log("collectionId is null or undefined");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    async addRivews() {
      console.log(this.singleProductIdData._id);
      try {
        const userData = {
          productId: this.singleProductIdData._id,
          comment: this.reviews,
          rating: this.rating,
        };
        console.log(userData);
        const token = localStorage.getItem("token");
        console.log(token);
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        };

        const response = await axios.post(
          `http://15.207.223.189:8000/api/v1/review/`,
          userData,
          config
        );
        console.log(response.data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    addToCard() {
      const id = this.singleProductIdData._id;
      this.store.addTocardBag(id);
    },
  },
};
</script>
<style>
.text-bold {
  font-weight: 800;
}

text-color {
  color: #0093c4;
}

/* Main image - left */
.main-img img {
  width: 100%;
}

/* Preview images */
.previews img {
  width: 100%;
  height: 140px;
}

.main-description .category {
  text-transform: uppercase;
  color: #0093c4;
}

.main-description .product-title {
  font-size: 2.5rem;
}

.old-price-discount {
  font-weight: 600;
}

.new-price {
  font-size: 2rem;
}

.details-title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  color: #757575;
}

.buttons .block {
  margin-right: 5px;
}

.quantity input {
  border-radius: 0;
  height: 40px;
}

.custom-btn {
  text-transform: capitalize;
  background-color: #0093c4;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 0;
}

.custom-btn:hover {
  background-color: #0093c4 !important;
  font-size: 18px;
  color: white !important;
}

.similar-product img {
  height: 400px;
}

.similar-product {
  text-align: left;
}

.similar-product .title {
  margin: 17px 0px 4px 0px;
}

.similar-product .price {
  font-weight: bold;
}

.questions .icon i {
  font-size: 2rem;
}

.questions-icon {
  font-size: 2rem;
  color: #0093c4;
}
.rate {
  height: 46px;
  padding: 0 10px;
}

.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}

.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}

.rate:not(:checked) > label:before {
  content: "★ ";
}

.rate > input:checked ~ label {
  color: #ffc700;
}

.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}

.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

#review-form .input-group-addon {
  min-width: 100px;
}

#review-form .btn {
  min-width: 100px;
}

#review-form input[type="text"],
#review-form textarea {
  width: 100%;
}

#review-form .form-group {
  margin-bottom: 15px;
}

#review-form .help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
}

blockquote {
  border-left: 5px solid rgb(238, 238, 238);
  padding-left: 20px;
}

blockquote .footer {
  display: block;
  font-size: 80%;
}
.add-reviews-button {
  background-color: #04aa6d;
  color: #fff;
  padding: 10px 20px; /* Adjust padding for the normal state */
  border: none;
  cursor: pointer;
  border-radius: 4px;
  float: right; /* Align the button to the right */
  margin-left: 20px; /* Add margin to separate the button from the content */
  text-align: center; /* Center the text within the button */
  transition: none; /* Disable hover effect transition */
}

.add-reviews-button:hover {
  background-color: #04aa6d;
  padding: 10px 20px; /* Adjust padding for the hover state to match normal state */
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  /* Make preview images responsive  */
  .previews img {
    width: 100%;
    height: auto;
  }
}
</style>
