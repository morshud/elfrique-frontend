<template>
    <title>Pricing | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Breadcrumb-->
    <section class="breadcrumb-sec bread-price">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1>Pricing</h1>
                    <div class="line-rule"></div>
                    <p><router-link to="/" class="routers"><a class="back-link" title="Back to homepage">Home</a></router-link> <i class="bi bi-arrow-bar-right"></i> <a>Pricing</a></p>
                </div>
            </div>
        </div>
    </section>
    <!--Breadcrumb Ends-->

    <section class="mainPricing">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10" id="contactForm">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mb-3">
                                <h1>Contact us for product pricing.</h1>
                            </div>
                            <div class="col-lg-12 mb-4">
                                <label>Name</label>
                                <input type="text" placeholder="Enter your name" class="input">
                            </div>
                            <div class="col-lg-6 mb-4">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email address" class="input">
                            </div>
                            <div class="col-lg-6 mb-4">
                                <label>Telephone Number</label>
                                <input type="tel" placeholder="Enter your telephone no" class="input">
                            </div>
                            <div class="col-lg-12 mb-4">
                                <label>Select product for pricing</label>
                                <div class="checkboxDiv">
                                    <input type="checkbox"> <span>Event Forms Management System</span>
                                </div>
                                <div class="checkboxDiv">
                                    <input type="checkbox"> <span>Event Tickets Management System</span>
                                </div>
                                <div class="checkboxDiv">
                                    <input type="checkbox"> <span>Vote Management System</span>
                                </div>
                                <div class="checkboxDiv">
                                    <input type="checkbox"> <span>Short Codes & USSD</span>
                                </div>
                                <div class="checkboxDiv">
                                    <input type="checkbox"> <span>Vendor Management System</span>
                                </div>
                            </div>
                            <div class="col-lg-12 mb-4">
                                <label>Additional Info</label>
                                <textarea placeholder="Start typing..." cols="30" rows="4" class="input"></textarea>
                            </div>
                            <div class="col-lg-12">
                                <input type="submit" class="submit" value="Request Pricing">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!--Pricing Section-->
    <section class="pricing-section">
        <!--Event Forms-->
        <div class="main">
            <table class="price-table">
                <tbody>
                    <tr class="price-table-head">
                        <td>Event Forms Management System</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="price">DESCRIPTION</td>
                        <td class="price">COST</td>
                        <td class="price">AMOUNT DUE TO MERCHANT</td>
                        <td class="price">AMOUNT DUE TO ELFRIQUE</td>
                    </tr>
                    <tr>
                        <td>Set-Up Fee</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Local Transaction Narration</td>
                        <td>-</td>
                        <td>91.5%</td>
                        <td>8.5%</td>
                    </tr>
                    <tr>
                        <td>International Transaction Narration</td>
                        <td>-</td>
                        <td>90%</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td>Transactions within or greater than NGN 2,500 in a single transaction</td>
                        <td>&#8358;100</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Web-Airtime Transactions</td>
                        <td>-</td>
                        <td>60%</td>
                        <td>40%</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-div text-center">
                <router-link to="/login" class="routers"><a>Get Started <i class="bi bi-box-arrow-in-right"></i></a></router-link>
            </div>
        </div>
        <!--Event Tickets-->
        <div class="main">
            <table class="price-table">
                <tbody>
                    <tr class="price-table-head">
                        <td>Event Tickets Management System</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="price">DESCRIPTION</td>
                        <td class="price">COST</td>
                        <td class="price">AMOUNT DUE TO MERCHANT</td>
                        <td class="price">AMOUNT DUE TO ELFRIQUE</td>
                    </tr>
                    <tr>
                        <td>Set-Up Fee</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Local Transaction Narration</td>
                        <td>-</td>
                        <td>91.5%</td>
                        <td>8.5%</td>
                    </tr>
                    <tr>
                        <td>International Transaction Narration</td>
                        <td>-</td>
                        <td>90%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>Transactions within or greater than NGN 2,500 in a single transaction</td>
                        <td>&#8358;100</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Web-Airtime Transactions</td>
                        <td>-</td>
                        <td>60%</td>
                        <td>40%</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-div text-center">
                <router-link to="/login" class="routers"><a>Get Started <i class="bi bi-box-arrow-in-right"></i></a></router-link>
            </div>
        </div>
        <!--Vote-->
        <div class="main">
            <table class="price-table">
                <tbody>
                    <tr class="price-table-head">
                        <td>Vote Management System</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="price">DESCRIPTION</td>
                        <td class="price">COST</td>
                        <td class="price">AMOUNT DUE TO MERCHANT</td>
                        <td class="price">AMOUNT DUE TO ELFRIQUE</td>
                    </tr>
                    <tr>
                        <td>Set-Up Fee</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Local Transaction Narration</td>
                        <td>-</td>
                        <td>91.5%</td>
                        <td>8.5%</td>
                    </tr>
                    <tr>
                        <td>International Transaction Narration</td>
                        <td>-</td>
                        <td>90%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>Transactions within or greater than NGN 2,500 in a single transaction</td>
                        <td>&#8358;100</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Web-Airtime Transactions</td>
                        <td>-</td>
                        <td>60%</td>
                        <td>40%</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-div text-center">
                <router-link to="/login" class="routers"><a>Get Started <i class="bi bi-box-arrow-in-right"></i></a></router-link>
            </div>
        </div>
        <!--Short Code-->
        <div class="main">
            <table class="price-table">
                <tbody>
                    <tr class="price-table-head">
                        <td>Short Codes & USSD</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="price">DESCRIPTION</td>
                        <td class="price">COST</td>
                        <td class="price">AMOUNT DUE TO MERCHANT</td>
                        <td class="price">AMOUNT DUE TO ELFRIQUE & OTHER PARTIES</td>
                    </tr>
                    <tr>
                        <td>Set-Up Fee</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Each Keyword Purchase</td>
                        <td>&#8358;50,000</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>SMS Transactions</td>
                        <td>-</td>
                        <td>20%</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td>USSD Transactions</td>
                        <td>-</td>
                        <td>60%</td>
                        <td>40%</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-div text-center">
                <router-link to="/login" class="routers"><a>Get Started <i class="bi bi-box-arrow-in-right"></i></a></router-link>
            </div>
        </div>
        <!--Vendor-->
        <div class="main">
            <table class="price-table">
                <tbody>
                    <tr class="price-table-head">
                        <td>Vendor Management System</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr style="text-align: center;">
                        <td class="price">FREE PLAN</td>
                        <td class="price">BASIC PLAN</td>
                        <td class="price">EXCLUSIVE PLAN</td>
                    </tr>
                    <tr style="text-align: center;">
                        <td></td>
                        <td></td>
                        <td><i class="bi bi-check"></i> 12 enquiry guaranteed</td>
                    </tr>
                    <tr style="text-align: center;">
                        <td></td>
                        <td><i class="bi bi-check"></i> 5 enquiry guaranteed</td>
                        <td><i class="bi bi-check"></i> Google page SEO enhanced</td>
                    </tr>
                    <tr style="text-align: center;">
                        <td><i class="bi bi-check"></i> 1 enquiry guaranteed</td>
                        <td><i class="bi bi-check"></i> Google page SEO enhanced</td>
                        <td><i class="bi bi-check"></i> Bidding</td>
                    </tr>
                    <tr style="text-align: center;">
                        <td><i class="bi bi-check"></i> Google page SEO enhanced</td>
                        <td><i class="bi bi-check"></i> Bidding</td>
                        <td><i class="bi bi-check"></i> Contact display</td>
                    </tr>
                    <tr style="text-align: center;">
                        <td></td>
                        <td><i class="bi bi-check"></i> Contact display</td>
                        <td><i class="bi bi-check"></i> Elfrique home page display</td>
                    </tr>
                    <tr style="text-align: center;">
                        <td></td>
                        <td></td>
                        <td><i class="bi bi-check"></i> Elfrique slider display</td>
                    </tr>
                    <tr style="text-align: center;">
                        <td class="footer-table">FREE</td>
                        <td class="footer-table">&#8358;15,600</td>
                        <td class="footer-table">&#8358;29,800</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-div text-center">
                <router-link to="/login" class="routers"><a>Get Started <i class="bi bi-box-arrow-in-right"></i></a></router-link>
            </div>
        </div>
    </section>
    

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