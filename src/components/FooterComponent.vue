<template>
    <!-- Footer Start -->
    <div class="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div class="row px-xl-5 pt-5">
            <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <a href="" class="text-decoration-none">
                    <h1 class="mb-4 display-5 font-weight-semi-bold"><span
                            class="text-primary font-weight-bold border border-white px-3 mr-1">Go</span>Buyit</h1>
                </a>
                <p> Gobuyit is one the best Online Store out there Get in Touch with us Today.</p>
                <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Eastleigh Street, Nairobi, Kenya</p>
                <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>gobuyit12@example.com</p>
                <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+254 345 67890</p> <br><br>
                <div class="d-inline-flex align-items-center">
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-dark pl-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark mb-2 " href=""><i class="fa fa-angle-right mr-2 "></i> <router-link to="/"
                                    class="nav-item nav-link ">Home</router-link>
                            </a>
                            <a class="text-dark mb-2" href=""><i class="fa fa-angle-right mr-2"></i> <router-link to="/shop"
                                    class="nav-item nav-link">Shop</router-link>
                            </a>
                            <a class="text-dark mb-2" href=""><i class="fa fa-angle-right mr-2"></i> <router-link
                                    to="/Detailsshop" class="nav-item nav-link">Shop Details</router-link>

                            </a>
                            <a class="text-dark" href="contact.html"><i class="fa fa-angle-right mr-2"></i> <router-link
                                    to="/contacts" class="nav-item nav-link">Contacts</router-link>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Join The Community</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark" href="contact.html"><i class="fa fa-angle-right mr-2"></i> <router-link
                                    to="/Register" class="nav-item nav-link">Sign-up</router-link>
                            </a>
                        </div>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark" href="contact.html"><i class="fa fa-angle-right mr-2"></i> <router-link
                                    to="/Login" class="nav-item nav-link">Login</router-link>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Newsletter</h5>
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control border-0 py-4" placeholder="Your Name"
                                    required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0 py-4" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button class="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-top border-light mx-xl-5 py-4">
            <div class="col-md-6 px-xl-0">
                <p class="mb-md-0 text-center text-md-left text-dark">
                    &copy; <a class="text-dark font-weight-semi-bold" href="#">GoBuYit</a>. All Rights Reserved.

                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    Designed by <a class="text-dark font-weight-semi-bold" href="/">Gobuyit</a>
                </p>
            </div>
            <div class="col-md-6 px-xl-0 text-center text-md-right">
                <img class="img-fluid" src="../../src/assets/img/payments.png" alt="">
            </div>
        </div>
        
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>
</template>

<script>
// export default ({ 

// })
export default (await import('vue')).defineComponent({})

</script>
<style></style>