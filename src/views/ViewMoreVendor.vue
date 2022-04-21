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

    <div class="container">
        <div class="row">
            <div class="col-lg-12 horizontal-advert mt-3">
                <a href="#">
                    <img src="@/assets/images/advert-banner3.jpg" ondragstart="return false;" alt="advert">
                </a>
            </div>
        </div>
    </div>

    <!--Service Event-Vendor-->
    <section class="event-vendor">
        <div class="container service-vendor">
            <div class="row">
                <div class="col-lg-12 header mb-3">
                    <h1>Available Jobs</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="mainJob-box">
                        <div class="vendorJob-box">
                            <div class="card">
                                <router-link to="#">
                                    <div class="img-area">
                                        <img src="@/assets/images/vendor-dj.png">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <router-link to="#" class="routers">
                                        <h1 title="Needed Service">DJ's Service Needed</h1>
                                    </router-link>
                                    <div class="line-rule"></div>
                                    <span class="eventname" title="Event Type"><i class="bi bi-stack"></i> Wedding Ceremony</span>
                                    <span class="date" title="Bid Closing Date"><i class="bi bi-calendar-week-fill"></i> Mar 4, 2022 | 9:00 AM</span>
                                    <span class="location" title="Event Location"><i class="bi bi-geo-alt-fill"></i> The Charis Events Center | Ikeja, LA</span>
                                    <span class="price" title="Starting Price"><i class="bi bi-cash"></i> Starts at <strong>&#8358;30,000</strong></span>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bid</button>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade vendorModalBox" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Bid For Job</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label>First Name</label>
                                                    <input type="text" placeholder="Enter your name" class="input">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label>Surname</label>
                                                    <input type="text" placeholder="Enter your surname" class="input">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label>Emaill Address</label>
                                                    <input type="email" placeholder="Enter your email address" class="input">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label>Telephone Number</label>
                                                    <input type="tel" placeholder="Enter your phone nyumber" class="input">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label>Place your bid (Naira &#8358;)</label>
                                                    <input type="number" placeholder="Enter bid amount" class="input">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label>Add more info</label>
                                                    <div class='textarea' contenteditable></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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