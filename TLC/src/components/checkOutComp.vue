<template>
  <div class="row mt-5">
    <div class="col-75">
      <div class="container-add">
        <form>
          <div class="row">
            <div class="col-50">
              <h3 class="mt-3">Billing Address</h3>
              <label class="pt-3" for="fname"
                ><i class="fa fa-user"></i> Full Name</label
              >
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="John M. Doe"
                v-model="name"
              />
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com"
                v-model="email"
              />
              <label for="adr"
                ><i class="fa fa-address-card-o"></i> Address</label
              >
              <input
                type="text"
                id="adr"
                name="address"
                v-model="address"
                placeholder="542 W. 15th Street"
              />
              <label for="city"><i class="fa fa-institution"></i> City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="New York"
                v-model="city"
              />
            </div>

            <div class="col-50">
              <h3 class="mt-5">Payment</h3>
              <label for="fname" class="pt-3">Accepted Cards</label>
              <div class="icon-container">
                <div class="row">
                  <div class="col-1">
                    <input
                      type="radio"
                      v-model="bankDiscount"
                      name="bankDiscount"
                      id=""
                      v-bind:value="'bank'"
                      @click="paymentChecker('bank')"
                      checked
                    />
                  </div>
                  <div class="col-11 pt-3">
                    <h6>Direct bank transfer</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col-11">
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account. Please send the payment screenshot to
                      support@allmytech.pk or Whatsapp on +923222120130 Please
                      note that this deal will not work if you have used a
                      discount coupon in the same order. Name: All my Tech Bank:
                      Bank Alfalah Account Number: 03031004822206
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <input
                      type="radio"
                      v-model="bankDiscount"
                      name="bankDiscount"
                      id=""
                      v-bind:value="'cash'"
                      @click="paymentChecker('cash')"
                    />
                  </div>
                  <div class="col-11 pt-3">
                    <h6>Cash on delivery</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label>
            <input type="checkbox" checked="checked" name="sameadr" /> Shipping
            address same as billing
          </label>
          <input
            type="button"
            @click="placeOrder()"
            value="Continue to checkout"
            class="btn"
          />
        </form>
      </div>
    </div>

    <div class="col-25">
      <div class="container-add">
        <table class="product-table">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productList" :key="product.id">
              <td v-for="photo in product.photos" :key="photo.id">
                <img :src="photo.sucure_url" class="product-image" />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                {{ product.qty }}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td v-for="photo in singleProductOject.photos" :key="photo.id">
                <img :src="photo.sucure_url" class="product-image" />
              </td>
              <td>{{ singleProductOject.name }}</td>
              <td>{{ singleProductOject.price }}</td>
              <td>
                {{ singleProductOject.qty }}
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div class="row">
          <div class="col-6">
            <p class="text-start">Subtotal</p>
          </div>
          <div class="col-6">
            <p class="text-end">Rs{{ totalPrice }}</p>
          </div>
        </div>
        <div class="row" v-if="bankDiscount">
          <div class="col-6">
            <p class="text-start">Bank Transfer Discount</p>
          </div>
          <div class="col-6">
            <p class="text-end">-Rs{{ bankDiscountAmount }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <p class="text-start">On Cash Discount</p>
          </div>
          <div class="col-6">
            <p class="text-end">-Rs0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <p class="text-start">Total</p>
          </div>
          <div class="col-6">
            <p class="text-end">Rs{{ discountedPrice }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-7 mt-2">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Coupon Code"
            v-model="couponCode"
          />
        </div>
        <div class="col-5">
          <button placeOrder class="btn btn-success" @click="applyCoupon()">
            Success
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Logo from "./brandLogoComp.vue";
import { useAppStore } from "../store/index.js";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      productList: [],
      totalPrice: null,
      discountedPrice: null,
      productId: null,
      singleProductOject: {},
      bankDiscount: true,
      bankDiscountAmount: 0,
      totalDiscount: null,
      onCash: null,
      couponCode: null,
      transactionId: null,
      userId: null,
      address: null,
      phoneNumber: null,
      amount: null,
      email: null,
      name: null,
      city: null,
    };
  },
  async mounted() {
    this.store = useAppStore();
    await this.getProductList();
  },
  methods: {
    async getProductList() {
      this.productList = null;
      this.productId = this.store.singleProductId;
      console.log("Product ID:", this.productId);
      if (this.productId) {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const response = await axios.get(
          `http://15.207.223.189:8000/api/v1/product/${this.store.singleProductId}`,
          config
        );
        this.singleProductOject = response.data.product;
        this.singleProductOject.qty = 1;
        this.totalPrice = this.singleProductOject.price;
        this.discountedPrice = this.totalPrice - this.discountedPrice;
      } else {
        this.productList = this.store.checkOutProductList;
        this.totalPrice = this.store.totalPrice;
        if (this.totalPrice > 1999 && this.totalPrice <= 6999) {
          this.totalDiscount = this.totalPrice * 0.05;
        } else if (this.totalPrice > 6999 && this.totalPrice <= 49999) {
          this.totalDiscount = this.totalPrice * 0.1;
        } else {
          this.totalDiscount = 0;
        }

        // Apply additional discount for bank transfer
        if (this.bankDiscount) {
          this.bankDiscountAmount = this.totalPrice * 0.05; // 5% discount for bank transfer
        } else {
          this.bankDiscountAmount = 0; // No discount if not using bank transfer
        }

        // Calculate the discounted price
        this.discountedPrice =
          this.totalPrice - this.totalDiscount - this.bankDiscountAmount;
      }
    },
    paymentChecker(check) {
      if (check === "cash") {
        this.bankDiscount = false; // Remove the bank discount when selecting "Cash on delivery"
      } else if (check === "bank") {
        this.bankDiscount = true; // Apply the bank discount when selecting "Bank Transfer"
      }
      // Recalculate the discounted price after changing the payment method
      this.calculateDiscountAndPrice();
    },
    calculateDiscountAndPrice() {
      // Calculate discounts based on payment method and price ranges

      if (
        this.totalPrice > 1999 &&
        this.totalPrice <= 6999 &&
        this.bankDiscount &&
        this.couponCode
      ) {
        this.totalDiscount = this.totalPrice * 0.05;
      } else if (
        this.totalPrice > 6999 &&
        this.totalPrice <= 49999 &&
        this.bankDiscount &&
        this.couponCode
      ) {
        this.totalDiscount = this.totalPrice * 0.05;
      } else if (
        this.totalPrice > 1999 &&
        this.totalPrice <= 6999 &&
        this.couponCode
      ) {
        this.totalDiscount = this.totalPrice * 0.1;
      } else if (this.totalPrice > 1999 && this.totalPrice <= 6999) {
        this.totalDiscount = this.totalPrice * 0.05;
      } else if (this.totalPrice > 6999 && this.totalPrice <= 49999) {
        this.totalDiscount = this.totalPrice * 0.1;
      } else {
        this.totalDiscount = 0;
      }

      // Apply additional discount for bank transfer
      if (this.bankDiscount) {
        this.bankDiscountAmount = this.totalPrice * 0.1; // 5% discount for bank transfer
      } else {
        this.bankDiscountAmount = 0; // No discount if not using bank transfer
      }

      // Calculate the discounted price
      this.discountedPrice =
        this.totalPrice - this.totalDiscount - this.bankDiscountAmount;
    },
    async applyCoupon() {
      const response = await axios.get(
        `http://15.207.223.189:8000/api/v1/coupon/get-active-coupon`
      );
      if (response.data.coupons[0].code === this.couponCode) {
        this.calculateDiscountAndPrice();
        toast.success("Active coupon code");
      } else {
        this.Notify("invalid coupon code");
      }
    },
    async placeOrder() {
      this.transactionId = this.store.receiptId;
      let data;
      const user_id = localStorage.getItem("user_id");
      this.userId = user_id;
      const products = [];
      for (let i = 0; i < this.productList.length; i++) {
        const singleProductdata = this.productList[i];
        products.push({
          productId: singleProductdata._id,
          count: singleProductdata.qty,
          price: singleProductdata.price,
        });
      }
      if (user_id) {
        data = {
          transactionId: this.transactionId,
          products: products,
          userId: this.userId,
          address: this.address,
          name: this.name,
          city: this.city,
          amount: this.discountedPrice,
        };
      } else {
        data = {
          transactionId: this.transactionId,
          products: products,
          address: this.address,
          name: this.name,
          city: this.city,
          amount: this.discountedPrice,
        };
      }

      console.log(data);
      try {
        const response = await axios.post(
          `http://15.207.223.189:8000/api/v1/order/place-order`,
          data
        );
        console.log(response.data);
        if (response.data.order.status === "ORDERED") {
          this.Notify("Order placed successfully");
          try {
            await this.sendEmail(); // Await the email sending function
          } catch (error) {
            console.log(error);
          }
          this.$router.push("/orderSuccess");
        }
      } catch (error) {
        console.log(error.response.data.message);
        this.Notify(error.response.data.message);
      }
    },
    Notify(data) {
      if (data === "Order placed successfully") {
        toast.success(data);
      } else {
        toast.error(data);
      }
    },
    async sendEmail() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      };
      if (token) {
        const products = [];
        for (let i = 0; i < this.productList.length; i++) {
          const singleProductdata = this.productList[i];
          products.push({
            productId: singleProductdata._id,
            count: singleProductdata.qty,
            price: singleProductdata.price,
          });
        }

        let emailData = {
          subject: "Thank you for placing an order with us",
          html: `
<head>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <h1>Order Confirmation</h1>
  <p>Thank you for your order!</p>
  <p>Order Number: #123456</p>
  <p>Order Date: September 16, 2023</p>
  <p>Shipping Address: ${this.address}, ${this.city}, ${this.country}</p>
  <h2>Order Details</h2>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      ${products
        .map(
          (product) => `
        <tr>
          <td>${product.productId}</td>
          <td>${product.count}</td>
          <td>${product.price}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
  <p>Total Amount: $${this.discountedPrice}</p>
  <p>Thank you for shopping with us!</p>
  `,
        };
        try {
          const response = await axios.post(
            `http://15.207.223.189:8000/api/v1/order/send-order-email`,
            emailData,
            config
          );

          console.log(response.data); // Log the response if needed

          // Handle success, show a success message or perform other actions
          this.Notify("Email sent successfully");
        } catch (error) {
          console.error(error.response.data.message);
          this.Notify(error.response.data.message);
        }
      } else {
        const products = [];
        for (let i = 0; i < this.productList.length; i++) {
          const singleProductdata = this.productList[i];
          products.push({
            productId: singleProductdata._id,
            count: singleProductdata.qty,
            price: singleProductdata.price,
          });
        }

        let emailData = {
          email: this.email,
          subject: "Thank you for placing an order with us",
          html: `
  <head>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <h1>Order Confirmation</h1>
  <p>Thank you for your order!</p>
  <p>Order Number: #123456</p>
  <p>Order Date: September 16, 2023</p>
  <p>Shipping Address: ${this.address}, ${this.city}, ${this.country}</p>
  <h2>Order Details</h2>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      ${products
        .map(
          (product) => `
        <tr>
          <td>${product.productId}</td>
          <td>${product.count}</td>
          <td>${product.price}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
  <p>Total Amount: $${this.discountedPrice}</p>
  <p>Thank you for shopping with us!</p>
  `,
        };
        try {
          const response = await axios.post(
            `http://15.207.223.189:8000/api/v1/order/send-order-email`,
            emailData,
            config
          );

          console.log(response.data); // Log the response if needed

          // Handle success, show a success message or perform other actions
          this.Notify("Email sent successfully");
        } catch (error) {
          console.error(error.response.data.message);
          this.Notify(error.response.data.message);
        }
      }
    },
  },
};
</script>

<style>
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 35%; /* IE10 */
  flex: 35%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 65%; /* IE10 */
  flex: 65%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}
.col-25 {
  padding-right: 25px;
}
.container-add {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.product-link {
  margin-right: 10px; /* Adjust the margin as needed */
}

.spacer {
  margin-right: 10px; /* Adjust the margin as needed */
}
label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #04aa6d;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

span.price {
  color: rgb(0, 0, 0);
}
.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.product-table th,
.product-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.product-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
.product-image {
  max-width: 100px; /* Set your desired maximum width */
  max-height: 100px; /* Set your desired maximum height */
  object-fit: contain; /* Adjust the object-fit property as needed */
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
