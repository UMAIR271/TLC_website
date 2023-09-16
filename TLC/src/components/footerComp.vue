<template>
  <div class="main"></div>
  <footer
    id="Footer"
    style="background-color: #ffffff"
    class="page-footer font-small stylish-color-dark pt-4"
  >
    <div
      style="background-color: #ffffff"
      class="container text-center text-md-left"
    >
      <div class="row">
        <div class="col-md-4 mx-auto">
          <!-- Content -->
          <h5 class="text-uppercase font-weight-bold mt-3 mb-4">
            About our Company
          </h5>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 70px"
          />
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div id="link10" class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold">Products</h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 70px"
          />
          <p>
            <a href="#!">Travelling</a>
          </p>
          <p>
            <a href="#!">About</a>
          </p>
          <p>
            <a href="#!">BrandFlow</a>
          </p>
          <p>
            <a href="#!">Services</a>
          </p>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div id="link10" class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold">Useful links</h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 70px"
          />
          <p>
            <a href="#!">Your Account</a>
          </p>
          <p>
            <a href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p><i class="fas fa-home mr-3"></i> Mumbai, Maharashtra</p>
          <p><i class="fas fa-envelope mr-3"></i> collab@codewithfaraz.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 91 80254 52xxx</p>
          <p><i class="fas fa-print mr-3"></i> + 91 80254 55xxx</p>
        </div>
      </div>
    </div>
    <hr />
    <!-- Call to action -->
    <ul
      style="background-color: #ffffff"
      class="list-unstyled list-inline text-center py-2"
    >
      <li class="list-inline-item">
        <h5 class="mb-1">Register for free</h5>
      </li>
      <li class="list-inline-item">
        <a href="#Contact" class="btn btn-outline-danger btn-rounded"
          >Sign up!</a
        >
      </li>
    </ul>
    <hr />
    <!-- Social buttons -->
    <div class="hover-effect1">
      <ul
        style="background-color: #ffffff"
        class="list-unstyled list-inline text-center"
      >
        <li class="list-inline-item">
          <a href="https://www.facebook.com/theleftovercloset" title="Facebook"
            ><i class="fab fa-facebook"></i
          ></a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.twitter.com/codewithfaraz" title="Twitter"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li class="list-inline-item">
          <a
            href="https://www.instagram.com/theleftovercloset/"
            title="Instagram"
            ><i class="fb fa-instagram"></i
          ></a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.youtube.com/@codewithfaraz" title="Youtube"
            ><i class="fab fa-youtube"></i
          ></a>
        </li>
        <li class="list-inline-item">
          <a href="#." title="Github"><i class="fab fa-github"></i></a>
        </li>
      </ul>
    </div>
    <!-- Copyright -->
    <div
      style="background-color: #ffffff"
      class="footer-copyright text-center py-3"
    >
      Copyright© 2023: Design and Develop by Faraz
    </div>
  </footer>
</template>
<style>
.hover-effect1 {
  min-height: 20px;
  background: #f44336;
  text-align: center;
}
.hover-effect1 ul {
  padding-top: 1px;
}
.hover-effect1 ul li {
  display: inline-block;
}
.hover-effect1 ul li a {
  font-size: 30px;
  text-align: center;
  color: #fff;
  margin: 0px 10px;
  line-height: 50px;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #000000;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -ms-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.hover-effect1 ul li:hover a {
  border-radius: 50%;
  background: #000000;
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}
</style>
