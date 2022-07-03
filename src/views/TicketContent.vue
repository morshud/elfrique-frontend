<template>
  <title>
    Event Tickets Management System | Elfrique – Complete Event Management
    System
  </title>
  <elfrique-header />

  <section class="voting-content event-ticket">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4">
          <div class="img-area">
            <img :src="event.image" ondragstart="return false;" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-title-area">
            <h1>{{ event.title }}</h1>
            <small
              >Organised by : <span>{{ event.organisation }}</span></small
            >
            <div class="details-header">
              <h5>Location</h5>
              <p><i class="bi bi-geo-alt-fill"></i> : {{ event.venue }}</p>
              <h5>Start Date</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(event.startdate) }}
              </p>
              <h5>End Date</h5>
              <p><i class="bi bi-calendar3"></i> :
                {{ format_date(event.enddate) }}
              </p>
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
              <span class="title">Days</span> <br />
              <span>{{ countdown.days }}</span>
            </div>
            <div class="boxes hours">
              <span class="title">Hours</span> <br />
              <span>{{ countdown.hours }}</span>
            </div>
            <div class="boxes minutes">
              <span class="title">Min</span> <br />
              <span>{{ countdown.minutes }}</span>
            </div>
            <div class="boxes seconds">
              <span class="title">Sec</span> <br />
              <span>{{ countdown.seconds }}</span>
            </div>
            <div class="clear"></div>
            <p v-if="ended == true" class="timeUpText" style="color: red">
              Time is up
            </p>
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
                id="pills-ticket-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-ticket"
                type="button"
                role="tab"
                aria-controls="pills-ticket"
                aria-selected="true"
              >
                <i class="bi bi-people-fill"></i> Ticket
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
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!--Ticket-->
            <div
              class="tab-pane fade show active"
              id="pills-ticket"
              role="tabpanel"
              aria-labelledby="pills-ticket-tab"
            >
              <div class="event-details" v-if="ended == false">
                <div class="row">
                  <div class="col-lg-6">
                    <h1>Ticket Details</h1>
                    <h6>{{ event.description }}</h6>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-5">
                    <h1>Buy Ticket</h1>
                    <div class="row">
                      <div
                        v-for="con in event.eventsTickets"
                        :key="con.id"
                        class="col-lg-5"
                      >
                        <button
                          style="
                            background: #038803;
                            border: 0;
                            color: #fff;
                            border-radius: 5px;
                            padding: 5px;
                          "
                          @click="selectTicket(con)"
                        >
                          {{ con.name.toUpperCase() }} (NGN {{ con.price }})
                        </button>
                      </div>
                    </div>

                    <form v-if="ticketSelected" @submit.prevent="buyTicket(event.paymentgateway, formDatas.price)">
                      <div class="row">
                        <div class="col-lg-12 mb-3">
                          <label
                            >{{ formDatas.name.toUpperCase() }} (NGN
                            {{ formDatas.price }})</label
                          >
                          <input
                            class="input mb-3"
                            type="number"
                            v-model="ticketQuantity"
                            min="1"
                            @keyup="checkQuantity"
                            @keypress="isNumber($event)"
                            :max="formDatas.quantity"
                            :placeholder="
                              'Enter number of ' + formDatas.name + ' ticket'
                            "
                          />
                          <input
                            class="input mb-3"
                            type="email"
                            v-model="email"
                            placeholder="Enter Email"
                            required
                          />
                          <input
                            class="input mb-3"
                            type="text"
                            v-model="firstname"
                            placeholder="Enter Firstname"
                            required
                          />
                          <input
                            class="input mb-3"
                            type="text"
                            v-model="lastname"
                            placeholder="Enter Lastname"
                            required
                          />
                          <input
                            class="input mb-3"
                            type="tel"
                            v-model="phone"
                            placeholder="Enter Mobile Number"
                            required
                          />
                        </div>
                        <div class="col-lg-12 text-center">
                          <button
                            type="submit"
                          >
                            Buy Ticket
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="container" v-if="ended == true">
                <h6 style="color:red">oOps! This event has ended, goto event page to view another one</h6>
              </div>
            </div>
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
                    <h1>Oragniser Details</h1>
                    <h4>Name</h4>
                    <p>{{ event.organisation }}</p>
                    <h4>Email</h4>
                    <p>{{ event.adminuser.email }}</p>
                    <h4>Phone Number</h4>
                    <p>{{ event.adminuser.phonenumber }}</p>
                    <h4>About</h4>
                    <h6>{{ event.adminuser.about }}</h6>
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
import Footer from "./elfrique-footer.vue";
import TransactionService from "../service/transaction.service";
import Notification from "../service/notitfication-service";
import uniqid from "uniqid";
import moment from "moment";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      ticketSelected: false,
      formDatas: "",
      ticketQuantity: 1,
      email: "",
      admin_id: "",
      firstname: "",
      lastname: "",
      method: "",
      phone: "",
      reference: this.genRef(),
      publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
      flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
      ended:false,
      endDate: "",
      countdown: {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  created() {
    const script = document.createElement("script");
    script.src =
      "https://qa.interswitchng.com/collections/public/javascripts/inline-checkout.js";
    document.getElementsByTagName("head")[0].appendChild(script);
    this.endDate = this.$store.state.vote.event.enddate;
    this.getCountdown(); 
  },
  computed: {
    event() {
      return this.$store.state.vote.event;
    },
    transactForm() {
      return {
        admin_id: this.$store.state.vote.event.adminuserId,
        reference: this.reference,
        category: "Event Ticket",
        email: this.email,
        method: this.method,
        product_title: this.$store.state.vote.event.title,
        product_id: this.$store.state.vote.event.id,
        type: "paid",
        amount: this.formDatas.price * this.ticketQuantity,
        payer_name: this.firstname + " " + this.lastname,
        phone_no: this.phone
      };
    },
  },
  methods: {
    getCountdown(){
        var endCount = moment(this.endDate).format(
        "YYYY-MM-DDT11:00:00Z"
      );

      // make it a moment object End
      var event = moment(endCount);

      // get current time/date
      var current = moment().format();
      /* console.log(current);
      console.log(endCount); */
      if (current >= endCount) {
        this.ended = true
        this.countdown.days = 0;
        this.countdown.hours = 0;
        this.countdown.minutes = 0;
        this.countdown.seconds = 0;
      }else{
        this.ended = false
        // get difference between event and current
        var diffTime = event.diff(current);

        // let moment.js make the duration out of the timestamp
        var duration = moment.duration(diffTime, "milliseconds", true);

        // Interval
        var interval = 1000;
        setInterval(() => {
            duration = moment.duration(duration - interval, "milliseconds");
            this.countdown.days = parseInt(duration.asDays());
            this.countdown.hours = duration.hours();
            this.countdown.minutes = duration.minutes();
            this.countdown.seconds = duration.seconds();
        }, interval);
      }
      
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },
    isNumber(evt) {  
      const charCode = evt.which ? evt.which : evt.keyCode;  
      if (  
        charCode > 31 &&  
        (charCode < 48 || charCode > 57) &&  
        charCode !== 46  
      ) {  
        evt.preventDefault();  
      }  
    },  
    checkQuantity(){
        if (this.ticketQuantity > this.formDatas.quantity) {
            this.ticketQuantity = this.formDatas.quantity;
        }
    },
    genRef() {
      return uniqid();
    },
    selectTicket(item) {
      this.ticketSelected = true;
      this.formDatas = item;
    },
    buyTicket(paymentGateway, price) {
      let amount = price * this.ticketQuantity;
      let adminId = this.$store.state.vote.event.adminuserId;
      let productTitle = this.$store.state.vote.event.title;
      if (paymentGateway == "interswitch") {
        let samplePaymentRequest = {
          merchant_code: "MX60729",
          pay_item_id: "6294592",
          site_redirect_url: window.location.origin,
          cust_id: this.email,
          data_ref: "vjyLc2lgNK",
          txn_ref: this.reference,
          amount: amount.toString(),
          currency: 566, // ISO 4217 numeric code of the currency used
          onComplete: (response) => {
            console.log(response);
            this.method = paymentGateway;
            //console.log(this.transactForm);
            Notification.addNotification({
              receiverId: adminId,
              type: "Event Ticket Purchase",
              message: `Someone just Successfully Purchased ${productTitle} ticket`,
            });
            TransactionService.makeTransaction(this.transactForm).then(
              (response) => {
                //this.modal.hide();
                this.message = response.data.message;
                //this.resetForm();
              }
            );
            //this.$router.push("/fill-form/" + id);
          },
          mode: "TEST",
        };
        console.log(samplePaymentRequest);

        window.webpayCheckout(samplePaymentRequest);
      } else if (paymentGateway == "paystack") {
        const paymentOptions = {
          // general options
          key: this.publicKey, //required
          email: this.email, //required
          amount: (amount * 100).toFixed(0), //required
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
              receiverId: adminId,
              type: "Event Ticket Purchased",
              message: `Someone just Successfully Purchased ${productTitle} ticket`,
            });
            TransactionService.makeTransaction(this.transactForm).then(
              (response) => {
                //this.modal.hide();
                this.message = response.data.message;
                //this.resetForm();
              }
            );
            //this.$router.push("/fill-form/" + id);
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
      } else if (paymentGateway == "flutterwave") {
        let paymentParams = {
          public_key: this.flw_public_key,
          tx_ref: this.reference,
          amount: amount.toString(),
          currency: "NGN",
          customer: {
            email: this.email,
            phone_number: this.phone,
          },
          callback: (response) => {
            console.log(response);
            this.method = "Flutterwave";
            Notification.addNotification({
              receiverId: adminId,
              type: "Event Ticket Purchased",
              message: `Someone just Successfully Purchased ${productTitle} ticket`,
            });
            TransactionService.makeTransaction(this.transactForm).then(
              (response) => {
                this.message = response.data.message;
                //this.resetForm();
              }
            );
            //this.$router.push("/fill-form/" + id);
          },
          onclose: () => this.onclose(),
        };

        window.FlutterwaveCheckout(paymentParams);
      } else {
      }
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
  },
};
</script>