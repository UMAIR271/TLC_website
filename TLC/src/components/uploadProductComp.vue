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
          <!-- Add Product -->
          <section>
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-md-8 ml-auto">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-title text-center mt-3">
                          <h3>Add Products</h3>
                        </div>
                        <div class="card-body">
                          <form @submit.prevent="addNewProduct()">
                            <div class="form-group">
                              <label for="productname">Product Name:</label
                              ><br />
                              <input
                                type="text"
                                class="form-control"
                                id="productname"
                                placeholder="Enter product Name"
                                v-model="productName"
                              />
                              <div class="invalid-feedback">
                                Catagory Name Can't Be Empty
                              </div>
                            </div>
                            <br />
                            <p>Product Price:</p>
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="productname"
                                placeholder="Enter product Name"
                                v-model="productPrice"
                              />
                              <div class="invalid-feedback">
                                Price can't be Empty
                              </div>
                            </div>
                            <br />
                            <p>Product Description:</p>
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="productname"
                                placeholder="Enter Product Description"
                                v-model="productDescription"
                              />
                              <div class="invalid-feedback">
                                product Description can't be Empty
                              </div>
                            </div>
                            <br />
                            <p>Collection ID:</p>
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="productname"
                                placeholder="Enter product Name"
                                v-model="collectionID"
                              />
                              <div class="invalid-feedback">
                                Price can't be Empty
                              </div>
                            </div>
                            <p>Product images:</p>
                            <div class="custom-file">
                              <input
                                type="file"
                                class="custom-file-input"
                                @change="onFileInputChange"
                                id="productimage"
                                required
                              />
                              <div class="invalid-feedback">
                                File Format Not Supported
                              </div>
                              <br />
                              <br />
                              <p>Total Stock:</p>
                              <div class="custom-file">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="productname"
                                  placeholder="Enter Total Number of product Stock"
                                  v-model="productStock"
                                />
                                <div class="invalid-feedback">
                                  product Stock can't be Empty
                                </div>
                              </div>
                            </div>
                            <button
                              class="btn btn-dark mt-5 mx-auto d-block"
                              type="submit"
                            >
                              Add Product
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
      productName: "",
      productPrice: "",
      productDescription: "",
      productsImages: null,
      collectionID: "",
      productStock: "",
    };
  },
  methods: {
    onFileInputChange(event) {
      const file = event.target.files[0];
      this.productsImages = file;
    },
    async addNewProduct() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const productData = new FormData();
      productData.append("name", this.productName);
      productData.append("price", this.productPrice);
      productData.append("description", this.productDescription);
      productData.append("collectionId", this.collectionID);
      productData.append("photos", this.productsImages);
      productData.append("stock", this.productStock);

      console.log(productData);
      try {
        const response = await axios.post(
          "http://15.207.223.189:8000/api/v1/product/",
          productData,
          config
        );
        this.Notify("New Product added successfully");
        (this.productName = ""),
          (this.productPrice = ""),
          (this.productDescription = ""),
          (this.productsImages = null),
          (this.collectionID = ""),
          (this.productStock = "");
      } catch (error) {
        console.error(error);
        this.Notify(error);
      }
    },
    Notify(data) {
      if (data) {
        toast.success(data);
      } else {
        toast.error(error);
      }
    },
  },
};
</script>
