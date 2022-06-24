<template>
    <title>Contact | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Breadcrumb-->
    <section class="breadcrumb-sec bread-contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1>Contact Us</h1>
                    <div class="line-rule"></div>
                    <p><router-link to="/" class="routers"><a class="back-link" title="Back to homepage">Home</a></router-link> <i class="bi bi-arrow-bar-right"></i> <a>Contact</a></p>
                </div>
            </div>
        </div>
    </section>
    <!--Breadcrumb Ends-->

    <!--Contact Info-->
    <section class="contact-info">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h2>Contact Info</h2>
                    <div class="line-rule"></div>
                </div>
                <div class="col-md-4">
                    <div class="box text-center">
                        <img src="@/assets/images/email-icon.png" ondragstart="return false;">
                        <h4>Email Us:</h4>
                        <p><a href="mailto:info@elfrique.com">info@elfrique.com</a></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box text-center">
                        <img src="@/assets/images/tel-icon.png" ondragstart="return false;">
                        <h4>Call Us:</h4>
                        <p><a href="tel:+2349071130455">+234 907 113 0455</a></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box text-center">
                        <img src="@/assets/images/whatsapp-icon.png" ondragstart="return false;">
                        <h4>WhatsApp:</h4>
                        <p><a href="https://wa.me/+2349013209138" target="_blank">+234 901 320 9138</a></p>
                    </div>
                </div>
            </div>  
        </div>
    </section>
    <!--Contact Info Ends-->

    <!--Message Us-->
    <section class="message-us">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h2>Send Us A Message</h2>
                    <div class="line-rule"></div>
                </div>
                <div class="col-lg-10">
                    <span style="color:green; margin-bottom: 10; font-size: 16px; text-align:center">{{alertMessage}}</span>
                    <form @submit.prevent="submitContact">
                        <div class="row">
                            <!--Name-->
                            <div class="col-md-6 py-3">
                                <input v-model="name" class="input" type="text" placeholder="Your name" required>
                            </div>
                            <!--Email-->
                            <div class="col-md-6 py-3">
                                <input v-model="email" class="input" type="email" placeholder="Email address" required>
                            </div>
                            <!--Phone-->
                            <div class="col-md-6 py-3">
                                <input v-model="phone" class="input" type="tel" placeholder="Phone number" required>
                            </div>
                            <!--Subject-->
                            <div class="col-md-6 py-3">
                                <input v-model="subject" class="input" type="text" placeholder="Subject" required>
                            </div>
                            <!--Message-->
                            <div class="col-md-12 py-3">
                                <textarea v-model="message" class="input" cols="30" rows="5" placeholder="Type message here..." required></textarea>
                            </div>
                            <!--Submit-->
                            <div class="col-md-12 py-3 text-center">
                                <button class="submit" :disabled="loading" type="submit">
                                    Send Message
                                    <span
                                        v-show="loading"
                                        class="spinner-border spinner-border-sm"
                                    ></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Message Us Ends-->

    <!--Trusted Section-->
    <section class="trusted-sec">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 text-center">
                    <div class="box">
                        <h1>Trusted by thousands of<br>people all over the world</h1>
                        <div class="btn-div">
                            <a href="https://web.facebook.com/elfrique/?_rdc=1&_rdr" target="_blank" title="Like us on Facebook"><button class="fb-btn"><i class="bi bi-facebook"></i> Facebook</button></a>
                            <a href="https://www.instagram.com/elfrique/" target="_blank" title="Follow us on Instagram"><button class="ins-btn"><i class="bi bi-instagram"></i> Instagram</button></a>
                            <a href="https://twitter.com/elfrique" target="_blank" title="Follow us on Twitter"><button class="twt-btn"><i class="bi bi-twitter"></i> Twitter</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Trusted Section Ends-->

    <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Footer from './elfrique-footer.vue'
    import TriviaService from '../service/trivia.service'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-footer':Footer,
      },
      data() {
          return {
              name: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
              loading: false,
              alertMessage: "",
          }
      },
      methods: {
          submitContact(){
              this.loading = true
              TriviaService.contactUs({
                    "fullname": this.name,
                    "email": this.email,
                    "message": this.message
              }).then(res => {
                  this.alertMessage = "Your message has been sucessfully sent, we will get back to you shortly after we receive your email..."
                  this.loading = false
                  setTimeout(() => {
                      this.alertMessage = ""
                  }, 5000);
                  this.clearForm()
              }).catch(err => {
                  this.loading = false
                  console.log(err)
              })
          },
          clearForm(){
              this.name = ''
              this.email = ''
              this.phone = ''
              this.subject = ''
              this.message = ''
          }
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>