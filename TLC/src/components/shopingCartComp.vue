<template>
  <div class="container-fluid mt-5">
    <h2 class="mb-5 text-center">Shopping Cart</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="desktop-header">
                <th>Product</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th class="text-right">
                  <span id="amount" class="amount">Amount</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>
                  <div
                    class="product-img"
                    v-for="photo in product.photos"
                    :key="photo.id"
                  >
                    <div class="img-prdct">
                      <img :src="photo.sucure_url" width="30px" />
                    </div>
                  </div>
                </td>
                <td>
                  <p>{{ product.name }}</p>
                </td>
                <td>
                  <div class="button-container">
                    <button
                      class="cart-qty-plus"
                      type="button"
                      @click="incrementQty(product)"
                    >
                      +
                    </button>
                    <input
                      type="number"
                      name="qty"
                      min="0"
                      class="qty form-control"
                      v-model="product.qty"
                    />
                    <button
                      class="cart-qty-minus"
                      type="button"
                      @click="decrementQty(product)"
                    >
                      -
                    </button>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    :value="product.price"
                    class="price form-control"
                    disabled
                  />
                </td>
                <td align="right">
                  $
                  <span class="amount">{{ product.qty * product.price }}</span>
                </td>
                <td align="right">
                  <button @click="removeProduct(product)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="mobile-checkout">
                <!-- Add class="mobile-checkout" here -->
                <td colspan="4">
                  <button
                    type="button"
                    @click="proceedToCheckout()"
                    class="btn btn-success btn-block"
                  >
                    Checkout
                  </button>
                </td>
                <td class="text-center">
                  <!-- Adjust alignment to center -->
                  <strong>TOTAL = $ {{ calculateTotal() }}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from "../store/index.js";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      allProdyctListId: null,
    };
  },
  mounted() {
    this.store = useAppStore();
    this.getAllProductsList();
  },
  methods: {
    incrementQty(product) {
      product.qty++;
    },
    decrementQty(product) {
      if (product.qty > 0) {
        product.qty--;
      }
    },
    calculateTotal() {
      return this.products.reduce(
        (total, product) => total + product.price * product.qty,
        0
      );
    },
    async getAllProductsList() {
      this.allProdyctListId = this.store.addToCardId;
      console.log(this.allProdyctListId);
      for (let key in this.allProdyctListId) {
        if (this.allProdyctListId.hasOwnProperty(key)) {
          let value = this.allProdyctListId[key];
          try {
            const token = localStorage.getItem("token");
            const config = {
              headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
              },
            };
            const response = await axios.get(
              `http://localhost:8000/api/v1/product/${value}`,
              config
            );
            const product = response.data.product;
            product.qty = 1; // Set the default quantity value to 1
            this.products.push(product);
            console.log(this.products);
          } catch (error) {
            console.error("An error occurred:", error);
          }
        }
      }
    },
    async removeProduct(product) {
      const productIndex = this.products.indexOf(product);
      if (productIndex !== -1) {
        this.products.splice(productIndex, 1);
      }
      this.store.removeFromCart(product._id); // Call the corresponding store action to remove the product
    },
    async proceedToCheckout() {
      const productList = this.products;
      const totalPrice = this.calculateTotal();
      this.store.checkoutData(productList, totalPrice);
      this.createOrder(this.products);
    },
    async createOrder(productsList) {
      try {
        let response;
        const products = [];

        for (const product of productsList) {
          products.push({
            productId: product._id,
            count: product.qty,
            price: product.qty * product.price,
          });
        }

        const requestData = { products };
        response = await axios.post(
          `http://localhost:8000/api/v1/order/create-order`,
          requestData
        );

        const receiptId = response.data.orderCreated.receipt;
        this.store.createOrderData(receiptId);
        this.$router.push("/checkOut");
      } catch (error) {
        console.log("error", error.response.data.message);
        this.Notify(error.response.data.message);
      }
    },
    Notify(data) {
      toast.error(data);
    },
  },
};
</script>

<style scoped>
/*------------------------*/
input:focus,
button:focus,
.form-control:focus {
  outline: none;
  box-shadow: none;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: #fff;
}
.table tr,
.table tr td {
  vertical-align: middle;
}
.button-container {
  display: flex;
  align-items: center;
}
.button-container .form-control {
  max-width: 80px;
  text-align: center;
  display: inline-block;
  margin: 0px 5px;
}
.cart-qty-plus,
.cart-qty-minus {
  width: 38px;
  height: 38px;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.cart-qty-plus:hover,
.cart-qty-minus:hover {
  background-color: #5161ce;
  color: #fff;
}
.img-prdct {
  width: 50px;
  height: 50px;
  border-radius: 4px;
}
.img-prdct img {
  width: 100%;
}
@media (max-width: 767px) {
  .table-responsive {
    /* Make the table scroll horizontally on mobile */
    overflow-x: auto;
  }
  .table tbody tr,
  .table tfoot tr {
    /* Display table rows vertically on mobile */
    display: block;
    margin-bottom: 20px; /* Add some space between rows */
    border: 1px solid #ced4da;
    padding: 10px;
  }
  .table tbody td,
  .table tfoot td {
    /* Display table cells as block elements */
    display: block;
  }
  .table tbody td:before,
  .table tfoot td:before {
    /* Use content and attr to display table headers for each cell */
    content: attr(data-label);
    font-weight: bold;
    display: inline-block;
    width: 100px; /* Set a fixed width for the header */
  }
  .table tfoot {
    /* Show the footer in mobile view */
    display: table-footer-group;
  }
  .table tr:last-child {
    /* Remove margin from the last row to avoid extra space */
    margin-bottom: 0;
  }
  .table tr th,
  .table tr td {
    /* Set the text-align for cells in mobile view */
    text-align: left;
  }
  .table tfoot tr td {
    text-align: left; /* Adjust text alignment for the first cell */
    padding-top: 15px; /* Add some padding to the top for better spacing */
  }
  .table tfoot tr td:first-child {
    text-align: left;
    padding-top: 15px; /* Add padding to the top */
  }
  /* Show checkout button in mobile view */
  .table tfoot tr.mobile-checkout {
    display: table-row;
    text-align: center; /* Center align the button */
    padding-top: 10px; /* Adjust padding to make it more compact */
  }
  .table tfoot tr.mobile-checkout td {
    padding: 0; /* Remove padding from the td elements */
  }
  .table tfoot tr.mobile-checkout button {
    width: 50%; /* Make the button take up the full width */
    padding: 22px; /* Adjust padding */
    font-size: 12px; /* Adjust font size to make it smaller */
  }
  /* Hide desktop header row in mobile view */
  .table thead tr.desktop-header {
    display: none;
  }
}
</style>
