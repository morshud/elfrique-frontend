<template>
  <title>Elfrique – Complete Event Management System</title>
  <elfrique-header/>

  <!--Welcome Screen-->
  <section class="welcome-screen">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <span class="tag-text">Your Management System Just Got Serious</span>
          <h1>We Create Indelible Experiences</h1>
          <p>Elfrique is a creative and innovative complete management company. We use through our website and short codes to help customers achieve their goals.</p>
          <div class="btn-div">
            <router-link to="/signup" class="routers"><a class="btn-first">Get An Account! <i class="bi bi-box-arrow-in-right"></i></a></router-link>
            <a href="#services" class="btn-second">Explore Our Services <i class="bi bi-chevron-expand"></i></a>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <div class="search-section">
            <div class="header">
              <h5>Start Your Search Here</h5>
            </div>
            <form>
              <div class="row">
                <!--Option-->
                <div class="col-lg-12">
                  <label for="option">Select Option</label>
                  <select class="input" name="option" id="option" required>
                      <option value="" hidden>Choose Option</option>
                      <option value="voting contest">Voting Contest</option>
                      <option value="trivia system">Trivia System</option>
                      <option value="event tickets">Event Tickets</option>
                      <option value="event vendors">Event Vendors</option>
                      <option value="event forms">Event Forms</option>
                  </select>
                </div>
                <!--Keyword-->
                <div class="col-lg-12">
                  <label for="keyword">Keyword Search</label>
                  <input class="input" type="text" placeholder="Enter Keyword" required>
                </div>
                <!--Search Button-->
                <div class="col-lg-12 text-center">
                  <button>Search Now <i class="bi bi-search"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Welcome Screen Ends-->

  <!--About Section-->
  <section class="about-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="img-area">
            <img class="main-img" src="@/assets/images/about-section-img.jpg">
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6">
          <div class="text-area">
            <span class="tag-text">Get To Know Elfrique</span>
            <h1>Innovative & Complete Goal-Oriented Company</h1>
            <p>Elfrique is an innovative and complete goal-oriented company, which is into event management services such as event ticketing, voting contest management, trivia management system, event vendor management system, event forms management system and travel & tours management services. We use through our website and short codes to help customers achieve their goals.</p>
            <div class="btn-div">
              <router-link to="/contact" class="routers"><a class="btn-first">Contact Us <i class="bi bi-chat-right-dots-fill"></i></a></router-link>
              <router-link to="/signup" class="routers"><a target="_blank" class="btn-second">Sign Up! <i class="bi bi-box-arrow-in-right"></i></a></router-link>
            </div>
            <div class="row logo-client-div">
              <div class="col-lg-12">
                <h3>Our Client</h3>
                <div class="line-rule"></div>
              </div>
              <div class="logo-box">
                  <img src="@/assets/images/client-logo.png">
              </div>
              <div class="logo-box">
                  <img src="@/assets/images/client-logo1.png">
              </div>
              <div class="logo-box">
                  <img src="@/assets/images/client-logo2.png">
              </div>
              <div class="logo-box">
                  <img src="@/assets/images/client-logo3.png">
              </div>
              <div class="logo-box">
                  <img src="@/assets/images/client-logo4.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <!--About Section Ends-->

  <!--Our Services-->
  <section class="our-services" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 header">
          <span class="tag-text">Services</span>
          <h1>Featured Services</h1>
          <p>Check through our featured services that fit your need.</p>
        </div>
      </div>
      <div class="row justify-content-center boxes">
        <div class="col-md-4">
          <router-link to="/vote-management" class="routers">
            <a>
              <div class="box">
              <div class="main-box box1"></div>
              <h3>Voting Contests <i class="bi bi-arrow-right"></i></h3>
              </div>
            </a>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/event-ticket-management" class="routers">
            <a>
              <div class="box">
              <div class="main-box box2"></div>
              <h3>Event Tickets <i class="bi bi-arrow-right"></i></h3>
              </div>
            </a>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/travel-tour-management" class="routers">
            <a>
              <div class="box">
              <div class="main-box box3"></div>
              <h3>Travel & Tours <i class="bi bi-arrow-right"></i></h3>
              </div>
            </a>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/event-vendor-management" class="routers">
            <a>
              <div class="box">
              <div class="main-box box4"></div>
              <h3>Event Vendors <i class="bi bi-arrow-right"></i></h3>
              </div>
            </a>
          </router-link>
        </div>
        <div class="col-md-4">
        <router-link to="/trivia-management" class="routers">
            <a>
              <div class="box">
              <div class="main-box box5"></div>
              <h3>Trivia System <i class="bi bi-arrow-right"></i></h3>
              </div>
            </a>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/event-form-management" class="routers">
            <a>
              <div class="box">
              <div class="main-box box6"></div>
              <h3>Event Forms <i class="bi bi-arrow-right"></i></h3>
              </div>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!--Our Services Ends-->
  
  <!--Why Us-->
  <section class="why-us">
    <div class="container-fluid g-0">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <div class="text-area">
            <div class="header">
              <span class="tag-text">Choose</span>
              <h1>Why Choose Us</h1>
              <p>Compelling reasons to choose us.</p>
            </div>
            <div class="reason-box">
              <div class="box-div">
                <div class="box-icon">
                  <img src="@/assets/images/fast-pay-out.jpg">
                </div>
                <div class="box-text">
                  <h2>Fast Pay-Out</h2>
                  <p>Pay-Out is within 1-7 days once an event is ended.</p>
                </div>
              </div>
              <div class="box-div">
                <div class="box-icon">
                  <img src="@/assets/images/excellence-reporting.jpg">
                </div>
                <div class="box-text">
                  <h2>Excellent Reporting</h2>
                  <p>View real-time report logs on all transactions. Monitor sales as it happens.</p>
                </div>
              </div>
              <div class="box-div">
                <div class="box-icon">
                  <img src="@/assets/images/marketing-support.jpg">
                </div>
                <div class="box-text">
                  <h2>Marketing Support</h2>
                  <p>We support you with the free digital (or online) marketing to drive & boost sales revenue.</p>
                </div>
              </div>
              <div class="box-div">
                <div class="box-icon">
                  <img src="@/assets/images/excellent-support.jpg">
                </div>
                <div class="box-text">
                  <h2>Excellent Support</h2>
                  <p>You can view real-time report logs on all transactions i.e you can monitor sales as they happen.</p>
                </div>
              </div>
              <div class="box-div">
                <div class="box-icon">
                  <img src="@/assets/images/multiple-payment-option.jpg">
                </div>
                <div class="box-text">
                  <h2>Multiple Payment Option</h2>
                  <p>You have a wide range of payment options locally & internationally. Payment is discrete with elfrique.</p>
                </div>
              </div>
              <div class="box-div">
                <div class="box-icon">
                  <img src="@/assets/images/safe-payemnt.jpg">
                </div>
                <div class="box-text">
                  <h2>Payment is 100% Safe</h2>
                  <p>For any payment option you choose to complete a transaction, your details are 100% secured & safe. Our system does not store user payment details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 img-area">
          <img src="@/assets/images/why-us-img.jpg">
        </div>
      </div>
    </div>
  </section>
  <!--Why Us Ends-->

  <elfrique-newsletter/>
  <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Newsletter from './elfrique-newsletter.vue'
    import Footer from './elfrique-footer.vue'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-newsletter':Newsletter,
      'elfrique-footer':Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
