<template>
  <title>
    Search Result - Event Vendor Management System | Elfrique – Complete Event
    Management System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header service-header-vendor">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-11 text-center">
          <h3>
            Search Result for <span>{{ $route.query.keyword }}</span>
          </h3>
        </div>
        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Service Header Ends-->

  <!--Service Event-Vendor-->
  <section class="event-vendor">
    <div class="container service-vendor">
      <div class="row">
        <div class="col-lg-12">
          <div class="mainJob-box mb-4">
            <div
              class="col-lg-4 col-md-4 vendorJob-box"
              v-for="item in searchContent"
              :key="item.id"
            >
              <div class="card">
                <router-link :to="'/details-vendor/' + item.id">
                  <div class="img-area">
                    <img :src="item.img_url" />
                  </div>
                </router-link>
                <div class="card-body">
                  <router-link
                    :to="'/details-vendor/' + item.id"
                    class="routers"
                  >
                    <h1 title="Needed Service">{{ item.job_type }} Needed</h1>
                  </router-link>
                  <div class="line-rule"></div>
                  <span class="eventname" title="Event Type"
                    ><i class="bi bi-stack"></i> {{ item.event.title }}</span
                  >
                  <span class="date" title="Bid Closing Date"
                    ><i class="bi bi-calendar-week-fill"></i>
                    {{ format_date(item.event.startdate) }}</span
                  >
                  <span class="location" title="Event Location"
                    ><i class="bi bi-geo-alt-fill"></i>
                    {{ item.location }}</span
                  >
                  <span class="price" title="Starting Price"
                    ><i class="bi bi-cash"></i> Starts at
                    <strong>&#8358;{{ item.budget }}</strong></span
                  >
                  <button>
                    <router-link class="btnA" :to="'/details-vendor/' + item.id"
                      >View</router-link
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 text-center mt-5 paginationDivArea">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 horizontal-advert mt-3">
          <a href="#">
            <img
              src="@/assets/images/advert-banner3.jpg"
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
import SearchService from "../service/search.service";
import moment from "moment";
import Footer from "./elfrique-footer.vue";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-newsletter": Newsletter,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      searchContent: "",
      location: this.$route.params.location,
      keyword: this.$route.query.keyword,
      loading: false,
    };
  },
  created() {
    SearchService.getVendorSearchContent(this.location, this.keyword).then(
      (response) => {
        this.loading = false;
        this.searchContent = response.data;
        console.log(this.searchContent);
      }
    );
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },
  },
};
</script>