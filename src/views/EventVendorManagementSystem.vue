<template>
    <title>Event Vendor Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Service Header-->
    <section class="service-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1>Event Vendor Management System</h1>
                    <p>We manage an efficient event vendor system that allows event vendors achieve their goal of their event. It gives opportunity to participate and offer your services.</p>
                    <p><strong>Find Capable & Efficient Vendors in Nigeria</strong></p>
                </div>
                <div class="col-md-5 text-center">
                    <div class="img-area">
                        <img src="@/assets/images/service-event-vendor.png">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-lg-11 mb-5 search-section search-section-vendor">
                    <form>
                        <input class="searchbox-input input" type="text" placeholder="What vendor will you like to hire?">
                        <input class="location-input input" type="text" placeholder="Find my location">
                        <input class="search-input input" type="submit" value="Search &#128269;">
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Service Header Ends-->

    <!--Service Event-Vendor-->
    <section class="event-vendor">
        <div class="container service-vendor">
            <div class="row">
                <div class="col-lg-12 header mb-3">
                    <h1>All Services <span>(0)</span></h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center mt-3">
                    <a href="#" class="btn-all-service">View All Services</a>
                </div>
            </div>
        </div>

        <div class="container service-vendor">
            <div class="row">
                <div class="col-lg-12 header mb-3">
                    <h1>All Jobs <span>(0)</span></h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center mt-3">
                    <a href="#" class="btn-all-service">View All Jobs</a>
                </div>
            </div>
        </div>

        
    </section>
    <!--Service Event-Vendor Ends-->

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