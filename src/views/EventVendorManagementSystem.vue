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

    <!--Service Event-Vendor-->
    <section class="event-vendor">
        <div class="container service-vendor">
            <div class="row">
                <div class="col-lg-12 header mb-4">
                    <h1>Popular Services</h1>
                </div>
                <div class="col-lg-12">
                    <div class="row justify-content-center mainService-box">
                        <router-link to="/" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-eventdecorator.png" ondragstart="return false;">
                                <h4>Event Decorators</h4>
                            </div>
                        </router-link>
                        <router-link to="/" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-photographer.png" ondragstart="return false;">
                                <h4>Photographers</h4>
                            </div>
                        </router-link>
                        <router-link to="/" class="routers vendorService-box" ondragstart="return false;">
                            <div>
                                <img src="@/assets/images/vendor-icon-caterers.png" ondragstart="return false;">
                                <h4>Caterers</h4>
                            </div>
                        </router-link>
                        <router-link to="/" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-dj.png" ondragstart="return false;">
                                <h4>Disc Jockey (DJ's)</h4>
                            </div>
                        </router-link>
                        <router-link to="/" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-fashion.png" ondragstart="return false;">
                                <h4>Fashion Designers</h4>
                            </div>
                        </router-link>
                        <router-link to="/" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-eventplaner.png" ondragstart="return false;">
                                <h4>Event Planers</h4>
                            </div>
                        </router-link>
                        <router-link to="/" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-printing.png" ondragstart="return false;">
                                <h4>Invitations & Printing Services</h4>
                            </div>
                        </router-link>
                        <router-link to="/" class="routers vendorService-box">
                            <div>
                                <img src="@/assets/images/vendor-icon-makeup.png" ondragstart="return false;">
                                <h4>Make-Up Artist</h4>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-12 horizontal-advert mt-3">
                    <a href="#">
                        <img src="@/assets/images/advert-banner3.jpg" ondragstart="return false;" alt="advert">
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
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-dj.png">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">DJ's Service Needed</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> Wedding Ceremony</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> Mar 4, 2022 | 9:00 AM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> The Charis Events Center | Ikeja, LA</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;30,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-cakes.jpg">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">Birthday Cakes</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Bid Closing Type"><i class="bi bi-stack"></i> Shola's 50th Birthday</span>
                                    <span class="date" title="Event Date"><i class="bi bi-calendar-week-fill"></i> Mar 30, 2022 | 3:00 PM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> Muson Centre | Lagos, LA</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;10,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-photo.jpg">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">Photographer needed to capture the event</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> Lagos Tech Fest 2022</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> Apr 25, 2022 | 10:00 AM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> Civic center | Lekki, LA</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;20,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-printer.jpg">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">Invitation Printing - 500pcs</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> Wedding Invitation</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> May 1, 2022 | 1:00 PM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> Freedom Park Lagos | Lagos, Lagos</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;5,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mainJob-box mt-5">
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-dj.png">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">DJ's Service Needed</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> Wedding Ceremony</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> Mar 4, 2022 | 9:00 AM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> The Charis Events Center | Ikeja, LA</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;30,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-cakes.jpg">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">Birthday Cakes</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Bid Closing Type"><i class="bi bi-stack"></i> Shola's 50th Birthday</span>
                                    <span class="date" title="Event Date"><i class="bi bi-calendar-week-fill"></i> Mar 30, 2022 | 3:00 PM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> Muson Centre | Lagos, LA</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;10,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-photo.jpg">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">Photographer needed to capture the event</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> Lagos Tech Fest 2022</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> Apr 25, 2022 | 10:00 AM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> Civic center | Lekki, LA</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;20,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                        <div class="vendorJob-box">
                            <div class="card">
                                <div class="img-area">
                                    <img src="@/assets/images/vendor-printer.jpg">
                                </div>
                                <div class="card-body">
                                    <h1 title="Needed Service">Invitation Printing - 500pcs</h1>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> Wedding Invitation</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> May 1, 2022 | 1:00 PM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> Freedom Park Lagos | Lagos, Lagos</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;5,000</strong></span>
                                    <button>Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 text-center mt-5">
                        <a href="#" class="btn-all-service">View More</a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="advert-area">
                        <a href="#">
                            <img src="@/assets/images/advert-banner1.jpg" ondragstart="return false;" alt="advert">
                        </a>
                    </div>
                    <div class="advert-area">
                        <a href="#">
                            <img src="@/assets/images/advert-banner1.jpg" ondragstart="return false;" alt="advert">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-12 horizontal-advert mt-3">
                    <a href="#">
                        <img src="@/assets/images/advert-banner3.jpg" ondragstart="return false;" alt="advert">
                    </a>
                </div>
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