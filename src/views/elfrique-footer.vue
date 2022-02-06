<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="main-ft">
              <router-link to="/" class="routers"><img src="@/assets/images/logo.png"></router-link>
              <h5>An innovative and complete goal-oriented company. We use through our website and short codes to help customers achieve their goals.</h5>
              <p><span><i class="bi bi-telephone-fill"></i></span> <a href="tel:+2349071130455">+234 907 113 0455</a></p>
              <p><span><i class="bi bi-whatsapp"></i></span> <a href="tel:+2349013209138">+234 901 320 9138</a></p>
              <p><span><i class="bi bi-envelope-fill"></i></span> <a href="mailto:info@elfrique.com">info@elfrique.com</a></p>
              <div class="social">
                <h5>Connect With Us:</h5>
                <a href="https://web.facebook.com/elfrique/?_rdc=1&_rdr" target="_blank" title="Like us on Facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/elfrique" target="_blank" title="Follow us on Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/elfrique/" target="_blank" title="Follow us on Instagram"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-2">
            <div class="link-ft">
              <h4>Company</h4>
              <div class="line-rule"></div>
              <p><router-link to="/blogs" class="routers"><a>Blogs</a></router-link></p>
              <p><router-link to="/pricing" class="routers"><a>Pricing</a></router-link></p>
              <p><router-link to="/contact" class="routers"><a>Contact Us</a></router-link></p>
              <p><a href="#">Buyers Guide</a></p>
              <p><a href="#">Sellers Guide</a></p>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="link-ft">
              <h4>Our Services</h4>
              <div class="line-rule"></div>
              <p><a href="#">Event Forms</a></p>
              <p><a href="#">Event Tickets</a></p>
              <p><a href="#">Event Vendors</a></p>
              <p><a href="#">Trivia System</a></p>
              <p><a href="#">Travel & Tours</a></p>
              <p><a href="#">Voting Contests</a></p>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="link-ft">
              <h4>Resources</h4>
              <div class="line-rule"></div>
              <p><router-link to="/terms" class="routers"><a>Terms of Use</a></router-link></p>
              <p><router-link to="/privacy" class="routers"><a>Privacy Policy</a></router-link></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container copyright">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p>
              &copy; <span id="autodate"></span> 
              Elfrique Solutions - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import $ from 'jquery'
export default {
  mounted(){
    window.scrollTo(0,0)

    //Copyright Date
    function newDate() {
      return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = newDate();

  }
}
</script>