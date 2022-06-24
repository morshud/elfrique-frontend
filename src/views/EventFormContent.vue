<template>
  <title>
    Event Form Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <section class="voting-content">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4">
          <div class="img-area">
            <img :src="eventContent.image" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-title-area">
            <h1>{{ eventContent.title ?? "" }}</h1>
            <small
              >Organised by :
              <span
                >{{ eventContent.adminuser.profile.firstname }}
                {{ eventContent.adminuser.profile.lastname }}</span
              ></small
            >
            <div class="details-header">
              <h5>Start</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(eventContent.startdate) }}
              </p>
              <p><i class="bi bi-alarm"></i> : 00:01</p>
              <h5>End</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(eventContent.startdate) }}
              </p>
              <p><i class="bi bi-alarm"></i> : 23:99</p>
            </div>
            <div class="details-social">
              <h5>Share on:</h5>
              <a href="#" title="Share on facebook"
                ><img src="@/assets/images/share-facebook.png"
              /></a>
              <a href="#" title="Share on whatsapp"
                ><img src="@/assets/images/share-whatsapp.png"
              /></a>
              <a href="#" title="Share on telegram"
                ><img src="@/assets/images/share-telegram.png"
              /></a>
              <a href="#" title="Share on instagram"
                ><img src="@/assets/images/share-instagram.png"
              /></a>
              <a href="#" title="Share on twitter"
                ><img src="@/assets/images/share-twitter.png"
              /></a>
              <a href="#" title="Share through email"
                ><img src="@/assets/images/share-email.png"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-md-2 justify-content-center text-center">
          <div class="counter-div">
              <div class="icon">
                  <i class="bi bi-alarm-fill"></i>
              </div>
              <div class="boxes days">
                  <span class="title">Days</span> <br>
                  <span id="days"></span>
              </div>
              <div class="boxes hours">
                  <span class="title">Hours</span> <br>
                  <span id="hours"></span>
              </div>
              <div class="boxes minutes">
                  <span class="title">Min</span> <br>
                  <span id="minutes"></span>
              </div>
              <div class="boxes seconds">
                  <span class="title">Sec</span> <br>
                  <span id="seconds"></span>
              </div>
              <div class="clear"></div>
              <p id="timeUpText"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="container event-form-content mt-4">
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-pills mb-5 mt-2" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-form-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-form"
                type="button"
                role="tab"
                aria-controls="pills-form"
                aria-selected="true"
              >
                <i class="bi bi-people-fill"></i> Forms
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-organ-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-organ"
                type="button"
                role="tab"
                aria-controls="pills-organ"
                aria-selected="false"
              >
                <i class="fas fa-tv"></i> Organisers
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-det-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-det"
                type="button"
                role="tab"
                aria-controls="pills-det"
                aria-selected="false"
              >
                <i class="fas fa-info"></i> Event Details
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!--Forms-->
            <div
              class="tab-pane fade show active"
              id="pills-form"
              role="tabpanel"
              aria-labelledby="pills-form-tab"
            >
              <div class="event-details">
                <div class="row">
                  <div class="col-lg-12">
                    <form @submit.prevent="proceedPay">
                      <div class="row">
                          <div class="col-lg-12">
                              <h1 style="margin-top: -60px;">Register</h1>
                              <p class="amount"><i class="bi bi-credit-card-fill"></i> : {{eventContent.type}}</p>
                              <h6>Enter the following details to continue</h6>
                          </div>
                          <div class="col-lg-6 mb-3">
                              <label>First name</label>
                              <input v-model="firstname" class="input" type="text" placeholder="Enter first name">
                          </div>
                          <div class="col-lg-6 mb-3">
                              <label>Last name</label>
                              <input v-model="lastname" class="input" type="text" placeholder="Enter last name">
                          </div>
                          <div class="col-lg-12 mb-3">
                              <label>Email address</label>
                              <input v-model="email" class="input" type="email" placeholder="Enter email address">
                          </div>
                          <div class="col-lg-12 text-center">
                              <button type="submit">Proceed</button>
                              <!--Note This proceed button will direct them to EventFormPay.vue page for the summary-->
                          </div>
                      </div>
                  </form>

                    <!-- <button
                      @click="showModal"
                      class="btn-view"
                      style="
                        text-decoration: none;
                        background: green none repeat scroll 0% 0%;
                        color: rgb(255, 255, 255);
                        padding: 9px 42px;
                        font-size: 17px;
                        border-radius: 10px;
                        cursor: pointer;
                        border: 0;
                      "
                    >
                      Apply Now
                    </button> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- <div
              class="modal fade"
              ref="exampleModal"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="exampleModal"
              aria-hidden="true"
            >
              <div class="modal-dialog" style="top: 180px; max-width: 579px">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Choose Payment Option
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      @click="modal.hide()"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="px-5">
                      <div class="form-groug">
                        <label>Email</label>
                        <input
                          type="email"
                          v-model="email"
                          class="form-control"
                          placeholder="Email Required"
                          required
                        />
                      </div>
                      <div class="form-groug">
                        <label>FirstName</label>
                        <input
                          type="text"
                          v-model="firstname"
                          class="form-control"
                          placeholder="Firstname Required"
                          required
                        />
                      </div>
                      <div class="form-groug">
                        <label>Lastname</label>
                        <input
                          type="text"
                          v-model="lastname"
                          class="form-control"
                          placeholder="Lastname Required"
                          required
                        />
                      </div>
                    </div>

                    <div class="px-5" v-if="inPutFilled">
                      <button
                        class="btn"
                        style="
                          border: 0px none;
                          margin: 10px;
                          margin-top: 3px;
                          background: #bfddb4;
                          margin-top: 12px;
                        "
                        @click="payStack(eventContent.id)"
                      >
                        <img
                          src="https://raw.githubusercontent.com/PaystackHQ/wordpress-payment-forms-for-paystack/master/icon.png"
                          style="width: 105px; height: 42px"
                        />
                      </button>
                      <button
                        class="btn"
                        style="
                          border: 0px none;
                          margin: 10px;
                          margin-top: 3px;
                          background: #bfddb4;
                          margin-top: 12px;
                        "
                        @click="flutterWave(eventContent.id)"
                      >
                        <img
                          src="https://bookface-images.s3.amazonaws.com/logos/630f2d7d83b9b94e29ea834681d64fdabac26af6.png"
                          style="width: 105px; height: 42px"
                        />
                      </button>
                      <button
                        class="btn"
                        style="
                          border: 0px none;
                          margin: 10px;
                          margin-top: 3px;
                          background: #bfddb4;
                          margin-top: 12px;
                        "
                        @click="interSwitch(eventContent.id)"
                      >
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Finnovation-village.com%2Fwp-content%2Fuploads%2F2016%2F02%2Finterswitch-e1505473879164.png%3Fresize%3D700%252C394%26ssl%3D1&f=1&nofb=1"
                          style="width: 105px; height: 42px"
                        />
                      </button>
                    </div>
                    <div v-else>
                      <h3
                        style="
                          text-align: center;
                          font-size: 16px;
                          margin-top: 20px;
                        "
                      >
                        Please fill the above required field to proceed
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <!--Organiser-->
            <div
              class="tab-pane fade"
              id="pills-organ"
              role="tabpanel"
              aria-labelledby="pills-organ-tab"
            >
              <div class="container organiser-area">
                <div class="row justify-content-center px-2">
                  <div class="col-lg-12">
                    <h1 style="margin-top: -30px;">Oragniser Details</h1>
                    <h4>Name</h4>
                    <p>
                      {{ eventContent.adminuser.profile.firstname }}
                      {{ eventContent.adminuser.profile.lastname }}
                    </p>
                    <h4>Email</h4>
                    <p>{{ eventContent.adminuser.email }}</p>
                    <h4>Phone Number</h4>
                    <p>{{ eventContent.adminuser.phonenumber }}</p>
                    <h4>About</h4>
                    <h6>{{ eventContent.adminuser.about }}</h6>
                  </div>
                </div>
              </div>
            </div>
            <!--Event Details-->
            <div
              class="tab-pane fade"
              id="pills-det"
              role="tabpanel"
              aria-labelledby="pills-det-tab"
            >
              <div class="container organiser-area">
                <div class="row justify-content-center px-2">
                  <div class="col-lg-12">
                    <h1 style="margin-top: -30px;">Event Details</h1>
                    <h6
                      style="
                        max-width: 524px;
                        font-weight: 400;
                        font-size: 16px;
                      "
                    >
                      {{ eventContent.description }}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer />
</template>
<script>
import Header from "./elfrique-header.vue";
import TransactionService from "../service/transaction.service";
import Notification from "../service/notitfication-service";
import Footer from "./elfrique-footer.vue";
import EventService from "../service/form.service";
import uniqid from "uniqid";
import { Modal } from "bootstrap";
import paystack from "vue-paystack";
import moment from "moment";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      eventContent: {
        adminuser: {
          profile: {},
        },
        id: "",
        title: "",
        fee: "",
      },
      modal: null,
      email: "",
      admin_id: "",
      firstname: "",
      lastname: "",
      method: "",
      reference: this.genRef(),
      publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
      flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
    };
  },
  computed: {
    formId() {
      return this.$route.params.id;
    },
    inPutFilled() {
      if (this.email != "" && this.firstname != "" && this.lastname != "") {
        return true;
      } else {
        return false;
      }
    },
    transactForm() {
      return {
        admin_id: this.admin_id,
        reference: this.reference,
        category: "Event Form",
        email: this.email,
        method: this.method,
        product_title: this.eventContent.title,
        product_id: this.eventContent.id,
        type: "paid",
        amount: this.eventContent.fee,
        payer_name: this.firstname + " " + this.lastname,
      };
    },
  },
  created() {
    EventService.getSingleForm(this.$route.params.id).then((response) => {
      this.eventContent = response.data.form;

      this.admin_id = response.data.form.adminuserId;
      //console.log(response.data.form);
    });
    const script = document.createElement("script");
    script.src =
      "https://qa.interswitchng.com/collections/public/javascripts/inline-checkout.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },

  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },
    proceedPay(){
      this.$router.push({name: "EvtForEventFormPay", params: {data: JSON.stringify(this.transactForm)}})
    },
    showModal(){
      this.modal = new Modal(this.$refs.exampleModal);
      this.modal.show();
    },
    genRef() {
      return uniqid();
    },
    /* makePayment(id) {
      let url = `/fill-form/' + eventContent.id`;
      this.modal = true;
    }, */
    payStack(id) {
      //  options
      const paymentOptions = {
        // general options
        key: this.publicKey, //required
        email: this.email, //required
        amount: (this.eventContent.fee * 100).toFixed(0), //required
        reference: this.reference, //required
        firstname: this.firstname,
        lastname: this.lastname,
        /* currency: this.currency,
                channels: this.channels,
                metadata: this.metadata,
                label: this.label,  */
        onSuccess: (response) => {
          console.log(response);
          this.method = "Paystack";
          Notification.addNotification({
            receiverId: this.admin_id,
            type: "Event Form",
            message: `Someone just Successfully Applied for Event Form`,
          });
          TransactionService.makeTransaction(this.transactForm).then(
            (response) => {
              //this.modal.hide();
              this.message = response.data.message;
              //this.resetForm();
            }
          );
          this.$router.push("/fill-form/" + id);
        },

        /*  onCancel: () => {
                this.onCancel();
                }, */
        // onBankTransferConfirmationPending: function(response) {
        //   this.onBankTransferConfirmationPending(response);
        // },
        // single split payments
        //subaccount:this.subaccount,  //required for single split
        //transaction_charge:this.transaction_charge,
        //bearer:this.bearer,
        // multi-split payments
        //split_code:this.split_code, //required for multi-split
        // subscriptionss
        // plan: this.plan, //required for subscriptions
        // quantity: this.quantity,
      };
      const paystack = new window.PaystackPop();
      paystack.newTransaction(paymentOptions);
      this.modal.hide();
    },
    flutterWave(id) {
      let paymentParams = {
        public_key: this.flw_public_key,
        tx_ref: this.reference,
        amount: this.eventContent.fee.toString(),
        currency: "NGN",
        customer: {
          email: this.email,
          phone_number: this.phone,
        },
        callback: (response) => {
          console.log(response);
          this.method = "Flutterwave";
          Notification.addNotification({
            receiverId: this.admin_id,
            type: "Event Form",
            message: `Someone just Successfully Applied for Event Form`,
          });
          TransactionService.makeTransaction(this.transactForm).then(
            (response) => {
              this.message = response.data.message;
              //this.resetForm();
            }
          );
          this.$router.push("/fill-form/" + id);
        },
        onclose: () => this.onclose(),
      };

      window.FlutterwaveCheckout(paymentParams);
      this.modal.hide();
    },
    interSwitch(id) {
      let samplePaymentRequest = {
        merchant_code: "MX60729",
        pay_item_id: "6294592",
        site_redirect_url: window.location.origin,
        cust_id: this.email,
        data_ref: "vjyLc2lgNK",
        txn_ref: this.reference,
        amount: this.eventContent.fee.toString(),
        currency: 566, // ISO 4217 numeric code of the currency used
        onComplete: (response) => {
          console.log(response);
          this.method = "InterSwitch";
          //console.log(this.transactForm);
          Notification.addNotification({
            receiverId: this.admin_id,
            type: "Event Form",
            message: `Someone just Successfully Applied for Event Form`,
          });
          TransactionService.makeTransaction(this.transactForm).then(
            (response) => {
              //this.modal.hide();
              this.message = response.data.message;
              //this.resetForm();
            }
          );
          this.$router.push("/fill-form/" + id);
        },
        mode: "TEST",
      };
      console.log(samplePaymentRequest);

      window.webpayCheckout(samplePaymentRequest);
      this.modal.hide();
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    const popup = document.createElement("script");
    popup.setAttribute("src", "https://js.paystack.co/v2/inline.js");
    popup.async = true;
    document.head.appendChild(popup);
    const inlineSdk = "https://checkout.flutterwave.com/v3.js";
    const script = document.createElement("script");
    script.src = inlineSdk;
    if (!document.querySelector(`[src="${inlineSdk}"]`)) {
      document.body.appendChild(script);
    }

    // Set the date we're counting down to
        var countDownDate = new Date("Jun 30, 2023  24:59:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        document.getElementById("timeUpText").style.display = "none";
        

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timeUpText").innerHTML = "Time Up!";
            document.getElementById("timeUpText").style.display = "block";
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
        }, 1000);
  },
};
</script>