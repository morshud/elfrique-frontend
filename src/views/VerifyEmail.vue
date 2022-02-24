<template>
    <title>Verify Email | Elfrique – Complete Event Management System</title>

    <div class="bodySignup">
        <main class="authMain">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 text-area">
                        <a href="http://elfrique.greenmouseproperties.com" class="routers">
                            <img src="@/assets/images/logo.png" alt="Elfrique Logo">
                        </a>
                        
                        <div class="line-rule"></div>
                        <div class="btn-div">
                            <p>Already have an account?</p>
                            <router-link to="/login" class="routers"><a class="btn-btn">Log In <i class="bi bi-box-arrow-in-right"></i></a></router-link>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-6">
                        <div class="form-area">
                            <div class="header-form">
                                <h3>Verify Email</h3>
                            </div>
                            
                            <div v-if="successful">
                                <div class="row">
                                    <div class="col-lg-12 text-center">
                                        <h3>You have successfully verify your email. please login to your dashboard</h3>
                                
                                        <router-link to="/login" class="routers"><a class="btn-btn">Log In <i class="bi bi-box-arrow-in-right"></i></a></router-link>
                                    </div>
                                </div>

                            </div>
                            <div v-if="message">
                                <div class="row">
                                    <div class="col-lg-12 text-center">
                                        <h3>There was an error verifying your email.</h3>
                                
                                       
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style src="@/assets/css/authStyle.css"></style>
<script>

import AuthService from "../service/auth.service";
export default {
  name: 'Register',
  data() {
    return {
     
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

  
    created() {
    const token = this.$route.query.token;
    const email = this.$route.query.email;
    if (token && email) {
      AuthService.verify(email,token)
        .then(() => {
          this.successful = true;
        })
        .catch(() => {
          this.message = "There was an error verifying your email.";
        });
    }
    },


    mounted() {
    if (this.loggedIn) {
      this.$router.push('/organiser/dashboard');
    }


},
 
    mounted(){
    window.scrollTo(0,0)
    }
}

</script>