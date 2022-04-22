<template>
    <title>Event Vendor Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

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
                        <input class="searchbox-input input" type="text" placeholder="What service are you searching for?">
                        <input class="location-input input" type="text" placeholder="Enter location">
                        <input class="search-input input" type="submit" value="Search &#128269;">
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Service Header Ends-->

    <!--Advert Here-->
    <div class="container">
        <div class="row">
            <div class="col-lg-12 horizontal-advert mt-3">
                <a :href="currentImg.ref_link" target="_blank">
                    <img :src="currentImg.img_url" ondragstart="return false;" alt="advert" width="1300" height="200">
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
                <div class="col-lg-12">
                    <div class="row mainService-box">
                        <router-link to="/event-decorator" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-eventdecorator.png" ondragstart="return false;">
                                <h4>Event Decorators</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-photographer.png" ondragstart="return false;">
                                <h4>Photographers</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-caterers.png" ondragstart="return false;">
                                <h4>Caterers</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-dj.png" ondragstart="return false;">
                                <h4>Disc Jockey (DJ's)</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-fashion.png" ondragstart="return false;">
                                <h4>Fashion Designers</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-eventplaner.png" ondragstart="return false;">
                                <h4>Event Planers</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-printing.png" ondragstart="return false;">
                                <h4>Invitations & Printing Services</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-makeup.png" ondragstart="return false;">
                                <h4>Make-Up Artist</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                                <h4>More Category</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                                <h4>More Category</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                                <h4>More Category</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                                <h4>More Category</h4>
                            </div>
                        </router-link>
                        <router-link to="#" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                                <h4>More Category</h4>
                            </div>
                        </router-link>
                        <div class="col-lg-12 text-center py-4">
                            <a href="#" id="loadMore" class="loadMoreBtn">Load More</a>
                        </div>
                    </div>
                </div>

                <!--Advert Here-->
                <div class="col-lg-12 horizontal-advert mt-3">
                    <a :href="currentImg.ref_link" target="_blank">
                        <img :src="currentImg.img_url" ondragstart="return false;" alt="advert" width="1300" height="200">
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
                                <a href="/details-vendor">
                                    <div class="img-area">
                                        <img :src="con.event.image">
                                    </div>
                                </a>
                                <div class="card-body">
                                    <a href="/details-vendor" class="routers">
                                        <h1 title="Needed Service">{{con.job_type}} Needed</h1>
                                    </a>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> {{con.event.title}}</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> {{format_date(con.event.startdate)}}</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> {{con.location}}</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;{{con.budget}}</strong></span>
                                    <button><a class="btnA" :href="'/details-vendor/' + con.id">View</a></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="mainJob-box mt-5">
                        <div v-for="con in Content" :key="con.id" class="vendorJob-box">
                            <div class="card">
                                <a :href="'/details-vendor/' + con.id">
                                    <div class="img-area">
                                        <img :src="con.event.image">
                                    </div>
                                </a>
                                <div class="card-body">
                                    <a :href="'/details-vendor/' + con.id" class="routers">
                                        <h1 title="Needed Service">{{con.job_type}} Needed</h1>
                                    </a>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> {{con.event.title}}</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> {{format_date(con.event.startdate)}}</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> {{con.location}}</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;{{con.budget}}</strong></span>
                                    <button><a class="btnA" :href="'/details-vendor/' + con.id">View</a></button>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>
                    <div class="col-md-12 text-center mt-5">
                        <a href="/view-more-vendor" class="btn-all-service">View More</a>
                    </div>
                </div>
                <!--Advert Here-->
                <div class="col-lg-3">
                    <div class="advert-area">
                        <a :href="currentImg.ref_link" target="_blank">
                            <img :src="currentImg2.img_url" ondragstart="return false;" alt="advert" width="300" height="450">
                        </a>
                    </div>
                    <div class="advert-area">
                        <a :href="currentImg.ref_link" target="_blank">
                            <img :src="currentImg2.img_url" ondragstart="return false;" alt="advert" width="300" height="450">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!--Advert Here-->
        <div class="container">
            <div class="col-lg-12 horizontal-advert mt-3">
                <a :href="currentImg.ref_link" target="_blank">
                    <img :src="currentImg.img_url" ondragstart="return false;" alt="advert" width="1300" height="200">
                </a>
            </div>
        </div>

    </section>
    <!--Service Event-Vendor Ends-->
    
    <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Newsletter from './elfrique-newsletter.vue'
    import Footer from './elfrique-footer.vue'
    import VendorService from '../service/vendor.service'
    import moment from 'moment'
    import $ from "jquery"
    export default {
        name: "Elfrique",
        components:{
            'elfrique-header':Header,
            'elfrique-newsletter':Newsletter,
            'elfrique-footer':Footer,
        },
        data() {
        return {
            Content: '',
            adsContent: '',
            eventId: '',
            file: '',
            bid: {
                description: '',
                price: '',
            },
            message: "",
            error: "",
            loading: false,
            currentImage: {
                img_url: '' ,
                link:'' ,
            },
            timer: null,
            currentIndex: 0

            
        }
     },
     computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        currentImg: function() {
            return this.adsContent[Math.abs(this.currentIndex) % this.adsContent.length];
            },
         currentImg2: function() {
            return this.adsContent[Math.abs(this.currentIndex + Math.floor(Math.random() * this.adsContent.length )) % this.adsContent.length];
            }
        },
        created() {
            VendorService.getAllJobs().then(response => {
                this.Content = response.data;
                console.log(this.Content);
            })

            VendorService.getAllAds().then(response => {
                this.adsContent = response.data.data;
                console.log(this.adsContent);
            })

        },

        methods: { 

            startSlide: function() {
                this.timer = setInterval(this.next, 6000);
            },

            next: function() {
                this.currentIndex += 1;
            },  

            getEventId(id) {
                this.eventId = id;
            },
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
            },

           SubmitBid(){
            this.loading = true;

            let formData = new FormData();
            formData.append('image', this.file);                                                                                                                                                                                                                                           
            formData.append('description', this.bid.description);
            formData.append('price', this.bid.price);
            

            VendorService.createProposal(formData, this.eventId).then(response => {
                    
                    this.message = `Your  Bid Proposal Submitted Successfully`;
                    this.loading = false;
                    window.scrollTo(0,0)

            },
            error => {
                console.log(error);
                this.error = error.response.data.message;
                console.log(error.response.data);


                this.loading = false;
                 window.scrollTo(0,0)
            });
        },

            
        handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
        },
        mounted(){
            this.startSlide();
            window.scrollTo(0,0)

            $(document).ready(function(){
                $(".vendorService-box").slice(0, 4).show();
                $("#loadMore").on("click", function(e){
                    e.preventDefault();
                    $(".vendorService-box:hidden").slice(0, 4).slideDown();
                    if($(".vendorService-box:hidden").length == 0) {
                    $("#loadMore").text("No Service").addClass("noContent");
                    }
                });
            })
        }
    }
</script>