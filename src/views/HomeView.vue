

<template>

  <!-- Navbar Start -->
  <div class="container-fluid mb-5">
    <div class="row border-top px-xl-5">
      <div class="col-lg-3 d-none d-lg-block">
        <a class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
          data-toggle="collapse" href="#navbar-vertical" style="height: 65px; margin-top: -1px; padding: 0 30px;">
          <h6 class="m-0">Categories</h6>
          <i class="fa fa-angle-down text-dark"></i>
        </a>
        <nav
          class="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
          id="navbar-vertical">
          <div class="navbar-nav w-100 overflow-hidden" style="height: 410px">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" data-toggle="dropdown">Dresses <i
                  class="fa fa-angle-down float-right mt-1"></i></a>
              <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                <a href="" class="dropdown-item"> <router-link to="/shop" class="nav-item nav-link">Men's
                    Wear</router-link>
                </a>
                <a href="" class="dropdown-item"> <router-link to="/shop" class="nav-item nav-link">Women's
                    Dresses</router-link>
                </a>
                <a href="" class="dropdown-item"> <router-link to="/shop" class="nav-item nav-link">Baby's
                    Dresses</router-link>
                </a>
              </div>
            </div>
            <router-link to="/shop" class="nav-item nav-link">Shirts</router-link>
            <router-link to="/shop" class="nav-item nav-link">Jeans</router-link>
            <router-link to="/shop" class="nav-item nav-link">SwimWear</router-link>
            <router-link to="/shop" class="nav-item nav-link">Sleepwear</router-link>
            <router-link to="/shop" class="nav-item nav-link">Jumpers</router-link>
            <router-link to="/shop" class="nav-item nav-link">Blazers</router-link>
            <router-link to="/shop" class="nav-item nav-link">Jackets</router-link>
            <router-link to="/shop" class="nav-item nav-link">Shoes</router-link>
          </div>
        </nav>
      </div>
    <div class="col-lg-9">
      <!-- <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href="/" class="text-decoration-none d-block d-lg-none">
            <h1 class="m-0 display-5 font-weight-semi-bold"><span
                class="text-primary font-weight-bold border px-3 mr-1">Go</span>Buyit</h1>
          </a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav mr-auto py-0">
              <router-link to="/" class="nav-item nav-link">Home</router-link>
              <router-link to="/About" class="nav-item nav-link">About</router-link>
              <router-link to="/shop" class="nav-item nav-link">Shop</router-link>
              <router-link to="/Detailsshop" class="nav-item nav-link">Shop Details</router-link>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
                <div class="dropdown-menu rounded-0 m-0">
                  <router-link to="/cart" class="nav-item nav-link">Shopping Cart</router-link>
                  <router-link to="/checkout" class="nav-item nav-link">Checkout</router-link>
                </div>
              </div>
              <router-link to="/contacts" class="nav-item nav-link">Contacts</router-link>
            </div>
            <div class="navbar-nav ml-auto py-0">
              <a href="" class="nav-item nav-link"> <router-link to="/Login" class="nav-item nav-link">Login</router-link>
              </a>
              <a href="" class="nav-item nav-link"> <router-link to="/Register"
                  class="nav-item nav-link">Sign-up</router-link>
              </a>
            </div>

            </div>
          </nav> -->
        <div id="header-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" style="height: 410px;">
              <img class="img-fluid" src="../../src/assets/img/corousal_5.jpg" alt="Image">
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px;">
                  <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order
                  </h4>
                  <h3 class="display-4 text-white font-weight-semi-bold mb-4">Trendings....</h3>
                  <a href="" class="btn btn-light py-2 px-3"> <router-link to="/shop" class="nav-item nav-link">Shop
                      Now</router-link>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item" style="height: 410px;">
              <img class="img-fluid" src="../../src/assets/img/carousel-1.jpg" alt="Image">
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px;">
                  <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order
                  </h4>
                  <h3 class="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                  <a href="" class="btn btn-light py-2 px-3"> <router-link to="/shop" class="nav-item nav-link">Shop
                      Now</router-link>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div class="btn btn-dark" style="width: 45px; height: 45px;">
              <span class="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a class="carousel-control-next" href="#header-carousel" data-slide="next">
            <div class="btn btn-dark" style="width: 45px; height: 45px;">
              <span class="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Navbar End -->

  <!-- Featured Start -->
  <div class="container-fluid pt-5">
    <div class="row px-xl-5 pb-3">
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="d-flex align-items-center border mb-4" style="padding: 30px;">
          <h1 class="fa fa-check text-primary m-0 mr-3"></h1>
          <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="d-flex align-items-center border mb-4" style="padding: 30px;">
          <h1 class="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
          <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="d-flex align-items-center border mb-4" style="padding: 30px;">
          <h1 class="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
          <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="d-flex align-items-center border mb-4" style="padding: 30px;">
          <h1 class="fa fa-phone-volume text-primary m-0 mr-3"></h1>
          <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </div>
  </div>
  <!-- Featured End -->


  <!-- Categories Start -->
  <div class="container-fluid pt-5">
    <div class="row px-xl-5 pb-3">
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
          <p class="text-right">50 Products In Store</p>
          <a href="" class="cat-img position-relative overflow-hidden mb-3">
            <img class="img-fluid" src="../../src/assets/img/cat-1.jpg" alt="">
          </a>
          <h5 class="font-weight-semi-bold m-0">Men's dresses</h5>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
          <p class="text-right">35 Products In Store</p>
          <a href="" class="cat-img position-relative overflow-hidden mb-3">
            <img class="img-fluid" src="../../src/assets/img/cat-2.jpg" alt="">
          </a>
          <h5 class="font-weight-semi-bold m-0">Women's dresses</h5>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
          <p class="text-right">25 Products In Store</p>
          <a href="" class="cat-img position-relative overflow-hidden mb-3">
            <img class="img-fluid" src="../../src/assets/img/cat-3.jpg" alt="">
          </a>
          <h5 class="font-weight-semi-bold m-0">Baby's dresses</h5>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
          <p class="text-right">100 Colors in Store</p>
          <a href="" class="cat-img position-relative overflow-hidden mb-3">
            <img class="img-fluid" src="../../src/assets/img/kofia.webp" alt="">
          </a>
          <h5 class="font-weight-semi-bold m-0">Beanies</h5>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
          <p class="text-right">4 Bags in Store</p>
          <a href="" class="cat-img position-relative overflow-hidden mb-3">
            <img class="img-fluid" src="../../src/assets/img/cat-5.jpg" alt="">
          </a>
          <h5 class="font-weight-semi-bold m-0">Bags</h5>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
          <p class="text-right">15 Shoes in Store</p>
          <a href="" class="cat-img position-relative overflow-hidden mb-3">
            <img class="img-fluid" src="../../src/assets/img/cat-6.jpg" alt="">
          </a>
          <h5 class="font-weight-semi-bold m-0">Shoes</h5>
        </div>
      </div>
    </div>
  </div>
  <!-- Categories End -->


  <!-- Offer Start -->
  <div class="container-fluid offer pt-5">
    <div class="row px-xl-5">
      <div class="col-md-6 pb-4">
        <div class="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
          <img src="../../src/assets/img/offer-1.png" alt="">
          <div class="position-relative" style="z-index: 1;">
            <h5 class="text-uppercase text-primary mb-3">20% off the all order</h5>
            <h1 class="mb-4 font-weight-semi-bold">Summer Collection</h1>
            <a href="" class="btn btn-outline-primary py-md-2 px-md-3"> <router-link to="/shop"
                class="nav-item nav-link">Shop Now</router-link>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 pb-4">
        <div class="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
          <img src="../../src/assets/img/offer-2.png" alt="">
          <div class="position-relative" style="z-index: 1;">
            <h5 class="text-uppercase text-primary mb-3">20% off the all order</h5>
            <h1 class="mb-4 font-weight-semi-bold">Winter Collection</h1>
            <a href="" class="btn btn-outline-primary py-md-2 px-md-3">
              <router-link to="/shop" class="nav-item nav-link">Shop Now</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Offer End -->


  <!-- Products Start -->
  <div class="container-fluid pt-5">
    <div class="text-center mb-4">
      <h2 class="section-title px-5"><span class="px-2">Trending Products</span></h2>
    </div>
    <div class="row px-xl-5 pb-3">
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-1.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">Cream Amazing Drees</h6>
            <div class="d-flex justify-content-center">
              <h6>$100.00</h6>
              <h6 class="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i> <router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link>
            </a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i><router-link
                to="/cart" class="nav-item nav-link"> Add to Cart</router-link> </a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-2.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3"> Outfit For Kida</h6>
            <div class="d-flex justify-content-center">
              <h6>$90.00</h6>
              <h6 class="text-muted ml-2"><del>$128.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i><router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link></a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>
              <router-link to="/cart" class="nav-item nav-link">Add to Details</router-link></a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-3.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">Casual Men Outfit</h6>
            <div class="d-flex justify-content-center">
              <h6>$150.00</h6>
              <h6 class="text-muted ml-2"><del>$190.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i><router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link></a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>
              <router-link to="/cart" class="nav-item nav-link">Add to Cart</router-link>
            </a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-4.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3"> Mini Skirts For Ladies</h6>
            <div class="d-flex justify-content-center">
              <h6>$115.00</h6>
              <h6 class="text-muted ml-2"><del>$160.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i><router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link></a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>
              <router-link to="/cart" class="nav-item nav-link">Add to Cart</router-link>
            </a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-5.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">Girl`s T-shirts & Jeans</h6>
            <div class="d-flex justify-content-center">
              <h6>$90.00</h6>
              <h6 class="text-muted ml-2"><del>$115.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i> <router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link></a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>
              <router-link to="/cart" class="nav-item nav-link">Add to Cart</router-link>
            </a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-6.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3"> Official Italian Suit</h6>
            <div class="d-flex justify-content-center">
              <h6>$250.00</h6>
              <h6 class="text-muted ml-2"><del>$300.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i><router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link></a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>
              <router-link to="/cart" class="nav-item nav-link">Add to Cart</router-link>
            </a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-7.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3"> Winter Women`s Coat</h6>
            <div class="d-flex justify-content-center">
              <h6>$130.00</h6>
              <h6 class="text-muted ml-2"><del>$150.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i> <router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link></a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>
              <router-link to="/cart" class="nav-item nav-link">Add to Cart</router-link>
            </a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="../../src/assets/img/product-8.jpg" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">Shirt & Jeans for Kids</h6>
            <div class="d-flex justify-content-center">
              <h6>$100.00</h6>
              <h6 class="text-muted ml-2"><del>$135.00</del></h6>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i><router-link
                to="/Detailsshop" class="nav-item nav-link">More Details</router-link></a>
            <!-- <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>
              <router-link to="/cart" class="nav-item nav-link">Add to Cart</router-link>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Products End -->


  <!-- Subscribe Start -->
  <div class="container-fluid bg-secondary my-5">
    <div class="row justify-content-md-center py-5 px-xl-5">
      <div class="col-md-6 col-12 py-5">
        <div class="text-center mb-2 pb-2">
          <h2 class="section-title px-5 mb-3"><span class="bg-secondary px-2">Stay Updated</span></h2>
          <p>For More Of Our Designs and Brands From Gobuyit Store please Leave us your Email below Thank You.</p>
        </div>
        <form action="">
          <div class="input-group">
            <input type="text" class="form-control border-white p-4" placeholder=" Add Your Email">
            <div class="input-group-append">
              <button class="btn btn-primary px-4">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Subscribe End -->

  <!-- Vendor Start -->
  <div class="container-fluid py-5">
    <div class="row px-xl-5">
      <div class="col">
        <div class="owl-carousel vendor-carousel">
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-1.jpg" alt="">
          </div>
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-2.jpg" alt="">
          </div>
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-3.jpg" alt="">
          </div>
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-4.jpg" alt="">
          </div>
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-5.jpg" alt="">
          </div>
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-6.jpg" alt="">
          </div>
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-7.jpg" alt="">
          </div>
          <div class="vendor-item border p-4">
            <img src="../../src/assets/img/vendor-8.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Vendor End -->
</template>
<script>
// export default ({

// })

export default (await import('vue')).defineComponent({})
</script>