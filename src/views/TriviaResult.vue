<template>
    <title>Trivia Result | E-Visa - Elfrique</title>
        <div class="container detailsSent">
            <div class="row justify-content-center">
                <div class="col-lg-5 text-center">
                    <img src="@/assets/images/thank-you.png">
                </div>
                <div class="col-lg-8 text-center">
                    <h3>Thanks For Taking Our Trivia Quiz</h3>
                    <p>Your result will be sent to your mail soon. 😊</p>
                    <router-link to="/trivia-management" class="backbtn"><i class="bi bi-box-arrow-left"></i> Back to Trivia Management Page</router-link>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        mounted(){
            window.scrollTo(0,0)
        }
    }
</script>