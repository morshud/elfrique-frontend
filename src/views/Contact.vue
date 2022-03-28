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
                    <form>
                        <div class="row">
                            <!--Name-->
                            <div class="col-md-6 py-3">
                                <input class="input" type="text" placeholder="Your name" required>
                            </div>
                            <!--Email-->
                            <div class="col-md-6 py-3">
                                <input class="input" type="email" placeholder="Email address" required>
                            </div>
                            <!--Phone-->
                            <div class="col-md-6 py-3">
                                <input class="input" type="tel" placeholder="Phone number" required>
                            </div>
                            <!--Subject-->
                            <div class="col-md-6 py-3">
                                <input class="input" type="text" placeholder="Subject" required>
                            </div>
                            <!--Message-->
                            <div class="col-md-12 py-3">
                                <textarea class="input" cols="30" rows="5" placeholder="Type message here..." required></textarea>
                            </div>
                            <!--Submit-->
                            <div class="col-md-12 py-3 text-center">
                                <input class="submit" type="submit" value="Send Message">
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
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-footer':Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>