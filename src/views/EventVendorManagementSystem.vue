<template>
  <title>
    Event Vendor Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header service-header-vendor">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-11 text-center">
          <h1>Event Vendor Management System</h1>
          <p>Find Capable & Efficient Vendors in Nigeria</p>
        </div>
      </div>
      <div class="row justify-content-center mt-1">
        <div class="col-lg-11 mb-5 search-section-vendor">
          <form>
            <input
              class="searchbox-input input"
              type="text"
              placeholder="What service are you searching for?"
            />
            <input
              class="location-input input"
              type="text"
              placeholder="Enter location"
            />
            <input
              class="search-input input"
              type="submit"
              value="Search &#128269;"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--Service Header Ends-->

  <div class="container">
    <div class="row">
      <div class="col-lg-12 horizontal-advert mt-3">
        <a href="#">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1661185447/Elfrique_v2/WhatsApp_Image_2022-08-22_at_5.04.47_PM_3_phhjjh.jpg"
            ondragstart="return false;"
            alt="advert"
          />
        </a>
      </div>
    </div>
  </div>

  <!--Service Event-Vendor-->
  <section class="event-vendor">
    <div class="container service-vendor">
      <div class="row">
        <div class="col-lg-12 header mb-4">
          <h1>Popular Services</h1>
        </div>
        <div
          v-if="error"
          class="alert-danger alert alert-dismissible fade show"
          role="alert"
        >
          {{ error }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div
          v-if="message"
          class="alert-success alert alert-dismissible fade show"
          role="alert"
        >
          {{ message }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div class="col-lg-12">
          <div class="row justify-content-center mainService-box">
            <router-link
              to="/category-vendor"
              class="routers vendorService-box"
            >
              <div>
                <img
                  src="@/assets/images/vendor-icon-eventdecorator.png"
                  ondragstart="return false;"
                />
                <h4>Event Decorators</h4>
              </div>
            </router-link>
            <router-link to="#" class="routers vendorService-box">
              <div>
                <img
                  src="@/assets/images/vendor-icon-photographer.png"
                  ondragstart="return false;"
                />
                <h4>Photographers</h4>
              </div>
            </router-link>
            <router-link
              to="#"
              class="routers vendorService-box"
              ondragstart="return false;"
            >
              <div>
                <img
                  src="@/assets/images/vendor-icon-caterers.png"
                  ondragstart="return false;"
                />
                <h4>Caterers</h4>
              </div>
            </router-link>
            <router-link to="#" class="routers vendorService-box">
              <div>
                <img
                  src="@/assets/images/vendor-icon-dj.png"
                  ondragstart="return false;"
                />
                <h4>Disc Jockey (DJ's)</h4>
              </div>
            </router-link>
            <router-link to="#" class="routers vendorService-box">
              <div>
                <img
                  src="@/assets/images/vendor-icon-fashion.png"
                  ondragstart="return false;"
                />
                <h4>Fashion Designers</h4>
              </div>
            </router-link>
            <router-link to="#" class="routers vendorService-box">
              <div>
                <img
                  src="@/assets/images/vendor-icon-eventplaner.png"
                  ondragstart="return false;"
                />
                <h4>Event Planers</h4>
              </div>
            </router-link>
            <router-link to="#" class="routers vendorService-box">
              <div>
                <img
                  src="@/assets/images/vendor-icon-printing.png"
                  ondragstart="return false;"
                />
                <h4>Invitations & Printing Services</h4>
              </div>
            </router-link>
            <router-link to="#" class="routers vendorService-box">
              <div>
                <img
                  src="@/assets/images/vendor-icon-makeup.png"
                  ondragstart="return false;"
                />
                <h4>Make-Up Artist</h4>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-12 horizontal-advert mt-3">
          <a href="#">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1661185447/Elfrique_v2/WhatsApp_Image_2022-08-22_at_5.04.47_PM_3_phhjjh.jpg"
              ondragstart="return false;"
              alt="advert"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="container service-vendor">
      <div class="row">
        <div class="col-lg-12 header mb-3">
          <h1>Available Jobs</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9">
          <div class="mainJob-box">
            <div v-for="con in Content" :key="con.id" class="vendorJob-box">
              <div class="card">
                <div class="img-area">
                  <img :src="con.event.image" />
                </div>
                <div class="card-body">
                  <h1 title="Needed Service">{{ con.job_type }} Needed</h1>
                  <div class="line-rule"></div>
                  <span class="eventname" title="Event Type"
                    ><i class="bi bi-stack"></i> {{ con.event.title }}</span
                  >
                  <span class="date" title="Bid Closing Date"
                    ><i class="bi bi-calendar-week-fill"></i>
                    {{ format_date(con.event.startdate) }}</span
                  >
                  <span class="location" title="Event Location"
                    ><i class="bi bi-geo-alt-fill"></i> {{ con.location }}</span
                  >
                  <span class="price" title="Starting Price"
                    ><i class="bi bi-cash"></i> Starts at
                    <strong>&#8358;{{ con.budget }}</strong></span
                  >
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    v-on:click="getEventId(con.id)"
                  >
                    Bid
                  </button>
                </div>
              </div>
            </div>
            <!-- Modal -->
            <div
              class="modal fade vendorModalBox"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Bid For Job
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="SubmitBid">
                      <div v-if="loggedIn" class="row">
                        <div
                          v-if="error"
                          class="alert-danger alert alert-dismissible fade show"
                          role="alert"
                        >
                          {{ error }}
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div
                          v-if="message"
                          class="alert-success alert alert-dismissible fade show"
                          role="alert"
                        >
                          {{ message }}
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label>First Name</label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            class="input"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label>Surname</label>
                          <input
                            type="text"
                            placeholder="Enter your surname"
                            class="input"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label>Email Address</label>
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            class="input"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label>Telephone Number</label>
                          <input
                            type="tel"
                            placeholder="Enter your phone nyumber"
                            class="input"
                          />
                        </div>
                        <div class="col-md-12 mb-3">
                          <label>Place your bid (Naira &#8358;)</label>
                          <input
                            v-model="bid.price"
                            type="number"
                            placeholder="Enter bid amount"
                            class="input"
                          />
                        </div>
                        <div class="col-md-12 mb-3">
                          <label>Add more info</label>
                          <div class="textarea" contenteditable></div>
                        </div>
                        <div class="col-lg-12 mt-4">
                          <label for="event image">Vendor Service Image</label>
                          <input
                            class="input"
                            type="file"
                            ref="file"
                            accept=".jpg, .jpeg, .png, .jfif"
                            v-on:change="handleFileUpload()"
                            required
                          />
                          <small class="text-danger font-weight-bold"
                            >(only .jpg, .jpeg, .png, .jfif or .webp
                            format)</small
                          >
                        </div>
                        <div class="col-md-12 mb-3">
                          <button type="submit" :disabled="loading">
                            Submit Bid<span
                              v-show="loading"
                              class="spinner-border spinner-border-sm"
                            ></span>
                          </button>
                        </div>
                      </div>
                      <div v-else class="row">
                        <div class="col-md-12 mb-3">
                          <h3>You have to login to bid for jobs</h3>
                        </div>

                        <div class="event-form-content col-md-12 mb-3">
                          <router-link to="/login" class="routers"
                            ><a class="btn-view">login</a></router-link
                          >
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mainJob-box mt-5">
            <div v-for="con in Content" :key="con.id" class="vendorJob-box">
              <div class="card">
                <div class="img-area">
                  <img :src="con.event.image" />
                </div>
                <div class="card-body">
                  <h1 title="Needed Service">{{ con.job_type }} Needed</h1>
                  <div class="line-rule"></div>
                  <span class="eventname" title="Event Type"
                    ><i class="bi bi-stack"></i> {{ con.event.title }}</span
                  >
                  <span class="date" title="Bid Closing Date"
                    ><i class="bi bi-calendar-week-fill"></i>
                    {{ format_date(con.event.startdate) }}</span
                  >
                  <span class="location" title="Event Location"
                    ><i class="bi bi-geo-alt-fill"></i> {{ con.location }}</span
                  >
                  <span class="price" title="Starting Price"
                    ><i class="bi bi-cash"></i> Starts at
                    <strong>&#8358;{{ con.budget }}</strong></span
                  >
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 text-center mt-5">
            <a href="/view-more-vendor" class="btn-all-service">View More</a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="advert-area">
            <a href="#">
              <img
                src="@/assets/images/advert-banner1.jpg"
                ondragstart="return false;"
                alt="advert"
              />
            </a>
          </div>
          <div class="advert-area">
            <a href="#">
              <img
                src="@/assets/images/advert-banner1.jpg"
                ondragstart="return false;"
                alt="advert"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 horizontal-advert mt-3">
          <a href="#">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1661185447/Elfrique_v2/WhatsApp_Image_2022-08-22_at_5.04.47_PM_3_phhjjh.jpg"
              ondragstart="return false;"
              alt="advert"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  <!--Service Event-Vendor Ends-->

  <elfrique-footer />
</template>

<script>
import Header from "./elfrique-header.vue";
import Newsletter from "./elfrique-newsletter.vue";
import Footer from "./elfrique-footer.vue";
import VendorService from "../service/vendor.service";
import moment from "moment";

export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-newsletter": Newsletter,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      Content: "",
      eventId: "",
      file: "",
      bid: {
        description: "",
        price: "",
      },
      message: "",
      error: "",
      loading: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    VendorService.getAllJobs()
      .then((resp) => resp.json())
      .then((response) => {
        this.Content = response.data;
        console.log(this.Content);
      });
  },

  methods: {
    getEventId(id) {
      this.eventId = id;
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },

    SubmitBid() {
      this.loading = true;

      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("description", this.bid.description);
      formData.append("price", this.bid.price);

      VendorService.createProposal(formData, this.eventId).then(
        (response) => {
          this.message = `Your  Bid Proposal Submitted Successfully`;
          this.loading = false;
          window.scrollTo(0, 0);
        },
        (error) => {
          console.log(error);
          this.error = error.response.data.message;
          console.log(error.response.data);

          this.loading = false;
          window.scrollTo(0, 0);
        }
      );
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
