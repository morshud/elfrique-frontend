<template>
  <title>Search Result | Elfrique – Complete Event Management System</title>
  <elfrique-header />

  <section class="searchContent">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center mb-3">
          <h4>Search result for {{ $route.query.keyword }}</h4>
        </div>
        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-for="con in searchContent" :key="con.id" class="col-md-10 mb-1">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-5">
                <a href="#">
                  <div class="imgHouse">
                    <img
                      :src="con.image"
                      class="img-fluid rounded-start"
                      draggable="false"
                    />
                  </div>
                </a>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <a href="#"
                    ><h5 class="card-title">{{ con.title }}</h5></a
                  >
                  <p class="card-text">{{ format_date(con.startdate) }}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="searchContent.length == 0 && loading == false"
          class="col-md-10 mb-1"
        >
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-5"></div>
              <div class="col-md-7">
                <div class="card-body">
                  <p class="card-text">
                    No {{ $route.params.product }} for this keyword
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-10 mb-2 justify-content-center text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
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
  </section>

  <elfrique-footer />
</template>

<script>
import Header from "./elfrique-header.vue";
import Footer from "./elfrique-footer.vue";
import SearchService from "../service/search.service";
import moment from "moment";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      searchContent: "",
      product: this.$route.params.product,
      keyword: this.$route.query.keyword,
      loading: true,
    };
  },

  created() {
    SearchService.getSearchContent(this.product, this.keyword).then(
      (response) => {
        this.loading = false;
        this.searchContent = response.data.result;
        console.log(this.searchContent);
      }
    );
  },

  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
