<template>
    <title>Log In | Elfrique – Complete Event Management System</title>

    <div class="bodyForgot">
        <main class="authMain">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <router-link to="/" class="routers">
                            <img src="@/assets/images/logo.png" alt="Elfrique Logo">
                        </router-link>
                        <div class="form-area">
                            <div class="header-form">
                                <h3>Forgot Password</h3>
                                <p>Enter your registered email to reset password.</p>
                            </div>
                            <form>
                                <div class="row">
                                    <!--Email-->
                                    <div class="col-lg-12">
                                        <label for="email">Email</label>
                                        <input type="email" placeholder="Enter email address" required>
                                    </div>
                                    <!--Submit Button-->
                                    <div class="col-lg-12 text-center">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="btn-div">
                            <p>Remember Password?</p>
                            <router-link to="/login" class="routers"><a class="btn-btn">Log In <i class="bi bi-box-arrow-in-right"></i></a></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style src="@/assets/css/authStyle.css"></style>
<script>
    export default {
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>