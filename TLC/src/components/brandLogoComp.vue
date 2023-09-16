<template>
  <h2 class="text-center pt-5" style="font-weight: bold; font-size: 50px">
    OUR BRANDS
  </h2>
  <div class="slider">
    <div class="slide-track">
      <div class="lable">
        <img src="../assets/img/Brand Logos/Abercrombie & Fitch.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Adidas.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/American Eagle.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Armani Exchange.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Burberry.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Calvin Klein.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/La Martina.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Chaps.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Christian Dior.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/D&G.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Diesel.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/DKNY.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Emporio Armani.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Fila.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Fred Perry.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Gant.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/GAP.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand Logos/Givenchy.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
.lable img {
  width: 100px;
  height: 100px;
  animation: scroll 60s linear infinite;
}

.slide-track {
  width: 100%;
  display: flex;
  gap: 3em;
  overflow: hidden;
}

.slider {
  margin-top: 70px;
  background-color: whitesmoke;
  padding: 8em 2em;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translatex(-1000%);
  }
}
</style>
