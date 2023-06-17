<template>
  <main>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/blog/david.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>New Product</h5>
            <a href="#" class="butn butn__new"><span>Shop Now</span></a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/blog/woman.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <a href="#" class="butn butn__new"><span>Shop Now</span></a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/blog/belt.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <a href="#" class="butn butn__new"><span>Shop Now</span></a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>
</template>
<style>
.carousel-item img {
  height: 850px; /* Adjust the height value as per your requirement */
}
.carousel-caption {
  position: absolute;
  top: 80%;
  transform: translateY(-50%);
  text-align: center;
}

.carousel-caption h5 {
  font-weight: bold;
  font-size: 50px;
}
.butn:link,
.butn:visited {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #000000;
  background-image: linear-gradient(90deg, #000000, #000000);
  padding: 1rem 2.5rem;
  height: 5rem;
  width: 20rem;

  margin-right: 13px;
  border-radius: 4px;
  border: none;
  color: #fff;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.butn::before {
  background: #fff;
  content: "";
  height: 155px;
  opacity: 0;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  width: 50px;
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
}
.butn::after {
  background: #fff;
  content: "";
  height: 20rem;
  opacity: 0;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 8rem;
}
.butn__new::before {
  left: -50%;
}

.butn__new::after {
  left: -100%;
}

.butn:hover,
.butn:active {
  transform: translateY(-3px);
  color: #fff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
}

.butn__new:hover::before {
  left: 120%;
  opacity: 0.5s;
}

.butn__new:hover::after {
  left: 200%;
  opacity: 0.6;
}
.butn span {
  z-index: 20;
}
</style>
