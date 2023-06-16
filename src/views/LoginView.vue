<template>
    <div class="container-fluid">
        <form @submit.prevent="login()">
            <error style="font-size: smaller;" v-if="error" :error="error" />
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;" >
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <a href="/" class="">
                            <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i><span>Go</span>Buyit</h3>
                        </a>
                        <h3> <b>Sign-In</b></h3>
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Email address:</label> <br>
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@gmail.com" v-model="email" >
                    </div>
                    <div class="form-floating mb-4">
                        <label for="floatingPassword">Password:</label> <br>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" >
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <a href=""> <router-link to="/Forget" class="nav-item nav-link">Forgot Password</router-link>
                        </a>
                    </div>
                    <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Login</button>
                    <p class="text-center mb-0">Don't have an Account? <router-link to="/Register"
                            class="nav-item nav-link">Sign-up</router-link> </p>
                </div>
            </div>
        </div>

        </form>
    
    </div>
</template>

<script>
import axios from 'axios';
import Error from '../components/ErrorComponent.vue';
// import { useAuthStore } from '../stores/auth';
export default {
    components: {
        Error
    },
    
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
       async login() {
        try {
            const response = await axios.post('login', {
            email: this.email,
            password: this.password,
        });

        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
        } catch (e) {
            this.error = 'Invalid username/password'
        }
            
        } 
    },


};
</script>
<style></style>