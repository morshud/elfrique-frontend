<template>
  <title>
    Event Form | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <section class="contestant-profile">
    <div class="container mt-5 details-contestant">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-area">
            <img src="@/assets/images/event-form-img.jpg" />
          </div>
          <div class="text-area">
            <h4>Form Name</h4>
            <p>Name</p>
            <h4>Event Details</h4>
            <h6></h6>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-5 form-area">

          <div class="contestantPaySection">
              <h4>You are about to pay. There would be no refund or reversal if you choose a wrong form.</h4>
              <hr>
              <h5>Summary of your order</h5>
              <div>
                <h6>First Name</h6>
                <p>first name here</p>
              </div>
              <div>
                <h6>Last Name</h6>
                <p>last name here</p>
              </div>
              <div>
                <h6>Email</h6>
                <p>email here</p>
              </div>
              <h5>Choose Payment Gateway</h5>
          </div>
          <div class="col-lg-12 mb-3">
            <button>
              Paystack – Pay Now – Nigeria Only
            </button>
          </div>
          <div class="col-lg-12 mb-3">
            <button>
              Flutterwave – Pay Now – Local & International
            </button>
          </div>
          <div class="col-lg-12 mb-3">
            <button>
              PInterswitch – Pay Now – Nigeria, Local & International
            </button>
          </div>
          <div class="col-lg-12 mb-3">
            <button>
              AimToGet – Pay Now – Airtime – Nigeria Only 
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer />
</template>
<script>
import Header from "./elfrique-header.vue";
import Footer from "./elfrique-footer.vue";

export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
