<template>
    <title>Travel And Tour Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Service Header-->
    <section class="service-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1>Travel & Tour Management System</h1>
                    <p>We manage an efficient travel and tours system that allows people to make bookings and reservations for their travels or tours with ease and enjoy the experience of their travels.</p>
                </div>
                <div class="col-md-5 text-center">
                    <div class="img-area">
                        <img src="@/assets/images/service-travel-tour.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container-fluid search-travel-house">
        <div class="row justify-content-center mt-5">
            <div class="col-lg-10 mb-5 search-travel-section">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link tabs-button active" id="nav-flight-tab" data-bs-toggle="tab" data-bs-target="#nav-flight" type="button" role="tab" aria-controls="nav-flight" aria-selected="true"><i class="fa fa-plane"></i> <span>Flight</span></button>
                        <button class="nav-link tabs-button" id="nav-hotel-tab" data-bs-toggle="tab" data-bs-target="#nav-hotel" type="button" role="tab" aria-controls="nav-hotel" aria-selected="false"><i class="fa fa-bed"></i> <span>Hotels</span></button>
                        <button class="nav-link tabs-button" id="nav-visa-tab" data-bs-toggle="tab" data-bs-target="#nav-visa" type="button" role="tab" aria-controls="nav-visa" aria-selected="false"><i class="fa fa-file-invoice"></i> <span>e-Visa</span></button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <!--Flight-->
                    <div class="tab-pane tabOne fade show active" id="nav-flight" role="tabpanel" aria-labelledby="nav-flight-tab">
                        <form>
                            <div class="row mb-3">
                                <div class="col-lg-3">
                                    <select>
                                        <option>Round Trip</option>
                                        <option>One-way</option>
                                        <option>Multi-city</option>
                                    </select>
                                </div>
                                <div class="col-lg-3">
                                    <select>
                                        <option>Economy</option>
                                        <option>Premium Economy</option>
                                        <option>Business</option>
                                        <option>First Class</option>
                                    </select>
                                </div>
                                <div class="col-lg-2">
                                    <label class="label-number">Adult (Above 12 years)</label>
                                    <input class="input-number" type="number">
                                </div>
                                <div class="col-lg-2">
                                    <label class="label-number">Children (2-12 years)</label>
                                    <input class="input-number" type="number">
                                </div>
                                <div class="col-lg-2">
                                    <label class="label-number">Infant (Below 2 years)</label>
                                    <input class="input-number" type="number">
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <div class="row g-1 justify-content-center">
                                        <div class="col-lg-1 icon-to-fro text-center">
                                            <i class="bi bi-arrow-left-right"></i>
                                        </div>
                                        <div class="col-lg-6 div-input">
                                            <label>From</label>
                                            <input type="text" placeholder="City or Airport">
                                        </div>
                                        <div class="col-lg-6 div-input">
                                            <label>To</label>
                                            <input type="text" placeholder="City or Airport">
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row g-1">
                                        <div class="col-lg-6 div-input">
                                            <label>Depart</label>
                                            <input type="date">
                                        </div>
                                        <div class="col-lg-6 div-input">
                                            <label>Return</label>
                                            <input type="date">
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-lg-12 text-center mt-2">
                                            <button type="submit"><i class="bi bi-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--Hotels-->
                    <div class="tab-pane tabOne fade" id="nav-hotel" role="tabpanel" aria-labelledby="nav-hotel-tab">
                        <form>
                            <div class="row mb-3">
                                <div class="col-lg-4">
                                    <label class="label-number">Number of rooms</label>
                                    <input class="input-number" type="number">
                                </div>
                                <div class="col-lg-4">
                                    <label class="label-number">Adult (Above 12 years)</label>
                                    <input class="input-number" type="number">
                                </div>
                                <div class="col-lg-4">
                                    <label class="label-number">Children (2-12 years)</label>
                                    <input class="input-number" type="number">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="row g-1 justify-content-center">
                                        <div class="col-lg-12 div-input">
                                            <label>Going to?</label>
                                            <input type="text" placeholder="Destination, city or hotel name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="row g-1">
                                        <div class="col-lg-6 div-input">
                                            <label>Check-in</label>
                                            <input type="date">
                                        </div>
                                        <div class="col-lg-6 div-input">
                                            <label>Check-out</label>
                                            <input type="date">
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-lg-12 text-center mt-2">
                                            <button type="submit"><i class="bi bi-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--e-Visa-->
                    <div class="tab-pane fade" id="nav-visa" role="tabpanel" aria-labelledby="nav-visa-tab">
                        <p><router-link to="/contact" target="_blank">Contact Us</router-link> For Your e-Visa Application Process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Service Header Ends-->

    <!--Service Travel And Tour-->
    <section class="travel-tour">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 header mb-5">
                    <h1>Top Hotels</h1>
                    <div class="line-hr"></div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/hotel1.png">
                        </div>
                        <div class="text-area">
                            <h5 class="title">Blu Atlantic Hotel</h5>
                            <p class="location">Lekki, Lagos</p>
                            <p class="star">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/hotel2.png">
                        </div>
                        <div class="text-area">
                            <h5 class="title">The Yatch Sea Front</h5>
                            <p class="location">Lekki, Lagos</p>
                            <p class="star">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/hotel3.png">
                        </div>
                        <div class="text-area">
                            <h5 class="title">Nordic Hotel</h5>
                            <p class="location">Lekki, Lagos</p>
                            <p class="star">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/hotel4.png">
                        </div>
                        <div class="text-area">
                            <h5 class="title">T9 Hotel</h5>
                            <p class="location">Lekki, Lagos</p>
                            <p class="star">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-12 header mb-5">
                    <h1>Top Travel Destinations</h1>
                    <div class="line-hr"></div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/travel1.jpg">
                        </div>
                        <div class="text-area">
                            <h5 class="title">Lagos <span><i class="bi bi-arrow-right"></i></span> London</h5>
                            <p class="price">NGN 500,187</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/travel2.png">
                        </div>
                        <div class="text-area">
                            <h5 class="title">Lagos <span><i class="bi bi-arrow-right"></i></span> Toronto</h5>
                            <p class="price">NGN 590,908</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/travel3.jpg">
                        </div>
                        <div class="text-area">
                            <h5 class="title">Lagos <span><i class="bi bi-arrow-right"></i></span> New York</h5>
                            <p class="price">NGN 471,577</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box">
                        <div class="img-area">
                            <img src="@/assets/images/travel4.png">
                        </div>
                        <div class="text-area">
                            <h5 class="title">Lagos <span><i class="bi bi-arrow-right"></i></span> Accra</h5>
                            <p class="price">NGN 162,397</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Service Travel And Tour Ends-->

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