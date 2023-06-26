<template>
  <header>
    <!-- Header Start -->

    <nav class="navbar navbar-expand-md navbar-light bg-white p-4">
      <div class="container-fluid p-0">
        <a class="navbar-brand text-uppercase fw-800" href="#"
          ><span class="border-red pe-2">New</span>Product</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNav"
          aria-controls="myNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNav">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="#">All</a>
            <!-- <a class="nav-link" href="#">Women's</a> -->
            <a class="nav-link" href="#">Men's</a>
            <a class="nav-link" href="#">Kid's</a>
            <a class="nav-link" href="#">Abouts Us</a>
            <a class="nav-link" href="#">Cosmetics</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Header End -->
  </header>
</template>
<style>
.container {
  margin: 30px auto;
}

.navbar-nav .nav-link {
  color: #000 !important;
  padding: 0.5rem 0rem !important;
  border-color: transparent;
  margin-left: 1.5rem;
  transition: none;
}

.navbar .navbar-toggler:focus {
  box-shadow: none;
}

.navbar-nav .nav-link.active,
.border-red {
  border-bottom: 3px solid #6366f1;
}

.navbar-nav .nav-link:hover {
  border-bottom: 3px solid #6366f1;
}

@media (max-width: 767.5px) {
  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link:hover {
    background-color: #6366f1;
    color: #fff !important;
  }

  .navbar-nav .nav-link {
    border: 3px solid transparent;
    margin: 0.8rem 0;
    display: flex;
    border-radius: 10px;
    justify-content: center;
  }
}
</style>
