<template>
  <h2 class="text-center pt-5" style="font-weight: bold; font-size: 50px">
    OUR BRANDS
  </h2>
  <div class="slider">
    <div class="slide-track">
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Abercrombie_Fitch.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Adidas.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/American_Eagle.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Armani_Exchange.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Burberry.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Calvin_Klein.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/La_Martina.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Chaps.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Christian_Dior.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/D&G.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Diesel.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/DKNY.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Emporio_Armani.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Fila.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Fred_Perry.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Gant.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/GAP.png" alt="" />
      </div>
      <div class="lable">
        <img src="../assets/img/Brand_Logos/Givenchy.png" alt="" />
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
