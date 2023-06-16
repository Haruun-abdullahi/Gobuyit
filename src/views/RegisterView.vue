<template>
  <div class="container-fluid position-relative d-flex p-0">
    <!-- Spinner Start -->
    <!-- <div id="spinner"
      class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div> -->
    <!-- Spinner End -->


    <!-- Sign Up Start -->
    <div class="container-fluid">
      <form @submit.prevent="register()">
        <error v-if="error" :error="error" />
        <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
        <div class="col-12 col-sm-8 col-md-6 col-lg-5 row-xl-4">
          <div class="bg-secondary rounded p-5 p-sm-5 my-4 mx-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <a href="/" class="">
                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i><span>Go</span>Buyit™</h3>
              </a>
              <h3>Sign Up</h3>
            </div>
            <div class="form-floating mb-3">
              <label for="floatingText">Username</label>
              <input type="text" class="form-control" id="floatingText" placeholder="Trexx_" v-model="name" required autofocus>
            </div>
            <div class="form-floating mb-3">
              <label for="floatingInput">Email address</label>
              <input type="email" class="form-control" id="floatingInput" placeholder="name@gmail.com" v-model="email" required>
            </div>
            <div class="form-floating mb-4">
              <label for="floatingPassword">Password</label>
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" >
            </div>

            <div class="form-floating mb-4">
              <label for="floatingPassword"> Confirm Password</label>
              <input type="password" class="form-control" id="floatingPasswords" placeholder="Confirm Password" v-model="password_confirmation" >
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign-up</button>
            <a href=""> <router-link to="/Forget" class="nav-item nav-link">Forgot Password</router-link>
            </a>
            <p class="text-center mb-0">Already have an Account? <a href=""> <router-link to="/Login"
                  class="nav-item nav-link"> Sign-in</router-link></a></p>
          </div>
        </div>
      </div>
      </form>
    
    </div>
    <!-- Sign Up End -->
  </div>
</template>
<script>
import axios from 'axios';
import Error from '../components/ErrorComponent.vue';
//import { useAuthStore } from '../stores/auth';

export default{
  components: {
    Error
  },
  
  data() {
    return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
       
       
    }
  },
  methods: {
    async register() {
     try {
      const response = await axios.post('register', {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
     });

     console.log(response)
     this.$router.push('/login');
     } catch(e) {
      this.error = 'Enter correct detail, ensure to use strong password'
     }
    } 
    
  },
  

}

</script>

<style></style>