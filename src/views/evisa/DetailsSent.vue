<template>
    <title>Thank You | E-Visa - Elfrique</title>
        <div class="container detailsSent">
            <div class="row justify-content-center">
                <div class="col-lg-5 text-center">
                    <img src="@/assets/images/thank-you-evisa.png">
                </div>
                <div class="col-lg-8 text-center">
                    <h3>Details Sent Successfully</h3>
                    <p>Your travel info details for <span>{{Country}}</span> has been sent successfully. We'll get back to you very soon. Thanks! 😊</p>
                    <router-link to="/travel-tour-management" class="backbtn"><i class="bi bi-box-arrow-left"></i> Back to Travel & Tour Page</router-link>
                </div>
            </div>
        </div>
</template>
<script>
    export default {computed: {
   
    Country(){
        return this.$store.state.vote.country;
    }
  },

        

        mounted(){
            window.scrollTo(0,0)
        }
    }
</script>