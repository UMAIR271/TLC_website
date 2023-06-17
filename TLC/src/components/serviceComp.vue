<template>
  <section class="showcase">
    <img
      src="../assets/img/blog/eduardo-pastor-3oejsU5OQVk-unsplash.jpg"
      alt="Picture"
      class="image"
    />
    <div class="overlay">
      <h2>collection houses our first-ever</h2>
      <br /><br />
      <p>
        <a href="#" class="butn butn__new"><span>Abouts Us</span></a>
      </p>
    </div>
  </section>
  <div class="categories-area section-padding40 gray-bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3">
          <div
            class="single-cat mb-50 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div class="cat-icon">
              <img src="../assets/img/blog/services1.svg" alt="" />
            </div>
            <div class="cat-cap">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3">
          <div
            class="single-cat mb-50 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div class="cat-icon">
              <img src="../assets/img/blog/services2.svg" alt="" />
            </div>
            <div class="cat-cap">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3">
          <div
            class="single-cat mb-30 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".4s"
          >
            <div class="cat-icon">
              <img src="../assets/img/blog/services3.svg" alt="" />
            </div>
            <div class="cat-cap">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3">
          <div
            class="single-cat wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div class="cat-icon">
              <img src="../assets/img/blog/services4.svg" alt="" />
            </div>
            <div class="cat-cap">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.showcase {
  width: 100%;
  height: 500px;
  position: relative;
  color: white;
  text-align: center;
}

.showcase img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  transition: transform 0.3s;
}

.showcase .overlay {
  width: 100%;
  height: 500px;
  background-color: rgba(0, 35, 82, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

.showcase h2 {
  margin-top: 170px;
  font-size: 3em;
}

.showcase p {
  margin-top: 8px;
  font-size: 1.2em;
}

.showcase .image:hover {
  transform: scale(1.1);
}
.categories-area {
  margin: 100px;
}
</style>
