<template>
  <div class="h-screen flex-grow-1 overflow-y-lg-auto">
    <!-- Header -->
    <header class="bg-surface-primary border-bottom pt-6">
      <div class="container-fluid">
        <div class="mb-npx">
          <div class="row align-items-center">
            <div class="col-sm-6 col-12 mb-4 mb-sm-0">
              <!-- Title -->
              <!-- <h1 class="h2 mb-0 ls-tight">Application</h1> -->
            </div>
            <!-- Actions -->
            <div class="col-sm-6 col-12 text-sm-end">
              <div class="mx-n1">
                <a
                  href="#"
                  class="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                >
                  <span class="pe-2">
                    <i class="bi bi-pencil"></i>
                  </span>
                  <span>Edit</span>
                </a>
                <a href="#" class="btn d-inline-flex btn-sm btn-primary mx-1">
                  <span class="pe-2">
                    <i class="bi bi-plus"></i>
                  </span>
                  <span>Create</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Nav -->
          <ul class="nav nav-tabs mt-4 overflow-x border-0">
            <li class="nav-item">
              <a href="#" class="nav-link active">All files</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link font-regular">Shared</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link font-regular">File requests</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!-- Main -->
    <main class="py-6 bg-surface-secondary">
      <div class="container-fluid">
        <!-- Card stats -->
        <div class="row g-6 mb-6">
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span
                      class="h6 font-semibold text-muted text-sm d-block mb-2"
                      >Wallet Balance</span
                    >
                    <span class="h3 font-bold mb-0">$750.90</span>
                  </div>
                  <div class="col-auto">
                    <div
                      class="icon icon-shape bg-tertiary text-white text-lg rounded-circle"
                    >
                      <i class="bi bi-credit-card"></i>
                    </div>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span
                    class="badge badge-pill bg-soft-success text-success me-2"
                  >
                    <i class="bi bi-arrow-up me-1"></i>13%
                  </span>
                  <span class="text-nowrap text-xs text-muted"
                    >Since last month</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span
                      class="h6 font-semibold text-muted text-sm d-block mb-2"
                      >Total Products</span
                    >
                    <span class="h3 font-bold mb-0">215</span>
                  </div>
                  <div class="col-auto">
                    <div
                      class="icon icon-shape bg-primary text-white text-lg rounded-circle"
                    >
                      <i class="bi bi-people"></i>
                    </div>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span
                    class="badge badge-pill bg-soft-success text-success me-2"
                  >
                    <i class="bi bi-arrow-up me-1"></i>30%
                  </span>
                  <span class="text-nowrap text-xs text-muted"
                    >Since last month</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span
                      class="h6 font-semibold text-muted text-sm d-block mb-2"
                      >Total Order</span
                    >
                    <span class="h3 font-bold mb-0">1.400</span>
                  </div>
                  <div class="col-auto">
                    <div
                      class="icon icon-shape bg-info text-white text-lg rounded-circle"
                    >
                      <i class="bi bi-clock-history"></i>
                    </div>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span
                    class="badge badge-pill bg-soft-danger text-danger me-2"
                  >
                    <i class="bi bi-arrow-down me-1"></i>-5%
                  </span>
                  <span class="text-nowrap text-xs text-muted"
                    >Since last month</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span
                      class="h6 font-semibold text-muted text-sm d-block mb-2"
                      >Work load</span
                    >
                    <span class="h3 font-bold mb-0">95%</span>
                  </div>
                  <div class="col-auto">
                    <div
                      class="icon icon-shape bg-warning text-white text-lg rounded-circle"
                    >
                      <i class="bi bi-minecart-loaded"></i>
                    </div>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span
                    class="badge badge-pill bg-soft-success text-success me-2"
                  >
                    <i class="bi bi-arrow-up me-1"></i>10%
                  </span>
                  <span class="text-nowrap text-xs text-muted"
                    >Since last month</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow border-0 mb-7">
          <div class="card-header">
            <h5 class="mb-0">Products</h5>
          </div>
          <div class="table-responsive">
            <table class="table table-hover table-nowrap">
              <thead class="thead-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Product Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stocks</th>
                  <th scope="col">Sold</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mapObject in productList" :key="mapObject.id">
                  <td>
                    <a class="text-heading font-semibold" href="#">
                      {{ mapObject._id }}
                    </a>
                  </td>
                  <td>
                    <a class="text-heading font-semibold" href="#">
                      {{ mapObject.name }}
                    </a>
                  </td>
                  <td>{{ mapObject.createdAt }}</td>
                  <td v-for="photo in mapObject.photos" :key="photo">
                    <img
                      alt="..."
                      :src="photo.sucure_url"
                      class="avatar avatar-xs rounded-circle me-2"
                    />
                  </td>
                  <td>
                    <a class="text-heading font-semibold" href="#">
                      {{ mapObject.price }}
                    </a>
                  </td>
                  <td>
                    <a class="text-heading font-semibold" href="#">
                      {{ mapObject.stock }}
                    </a>
                  </td>
                  <td>
                    <a class="text-heading font-semibold" href="#">
                      {{ mapObject.sold }}
                    </a>
                  </td>
                  <td class="text-end">
                    <button
                      type="button"
                      class="btn btn-sm btn-square btn-neutral text-danger-hover"
                      @click="deleteProduct(mapObject._id)"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer border-0 py-5">
            <span class="text-muted text-sm"
              >Showing 10 items out of 250 results found</span
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      productList: null,
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    async getProductList() {
      try {
        const response = await axios.get(
          "http://15.207.223.189:8000/api/v1/product/"
        );
        const data = response.data.product;
        this.productList = data;
        console.log(this.productList);
        this.errorMessage = ""; // Reset error message
      } catch (error) {
        console.log(error);
        this.errorMessage =
          error.response?.data?.message || "An error occurred.";
      }
    },
    deleteProduct(id) {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: token,
          },
        };
        axios.delete(
          `http://15.207.223.189:8000/api/v1/product/delete-product/${id}`,
          config
        );
        this.Notify("Product deleted sucessfully");
      } catch {
        this.Notify("Try Again");
      }
    },
    Notify(data) {
      if (data) {
        toast.success(data);
      } else {
        toast.error(data);
      }
    },
  },
};
</script>
