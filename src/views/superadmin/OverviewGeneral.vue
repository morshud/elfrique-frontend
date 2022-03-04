<template>
    <title>Overview General | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>General Overview</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active">Overview</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section overview-box-section">
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <!--View Organiser-->
                    <router-link to="/superadmin/view-organisers" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-vieworganiser.png">
                            <p>View Organisers</p>
                        </div>
                    </router-link>
                    <!--Short Links-->
                    <router-link to="/superadmin/short-links" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-shortlink.png">
                            <p>Short Links</p>
                        </div>
                    </router-link>
                    <!--Subscribers-->
                    <router-link to="/superadmin/subscribers" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-subscriber.png">
                            <p>Subscribers</p>
                        </div>
                    </router-link>
                    <!--Add Subscribers-->
                    <router-link to="/superadmin/add-subscribers" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-addsubscriber.png">
                            <p>Add Subscribers</p>
                        </div>
                    </router-link>
                    <!--Search Airtime-->
                    <router-link to="/superadmin/search-airtime" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-searchairtime.png">
                            <p class="font-weight-bold">Search Airtime</p>
                        </div>
                    </router-link>
                    <!--View Airtime Logs-->
                    <router-link to="/superadmin/view-airtime-logs" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-viewairtimelog.png">
                            <p class="font-weight-bold">View Airtime Logs</p>
                        </div>
                    </router-link>
                    <!--View Payouts-->
                    <router-link to="/superadmin/view-payout" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-viewpayout.png">
                            <p class="font-weight-bold">View Payouts</p>
                        </div>
                    </router-link>
                    <!--Payu Log-->
                    <router-link to="/superadmin/payu-log" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-payulog.png">
                            <p class="font-weight-bold">Payu Log</p>
                        </div>
                    </router-link>
                    <!--Search Payu Logs-->
                    <router-link to="/superadmin/search-payu-logs" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-searchpayulog.png">
                            <p class="font-weight-bold">Search Payu Logs</p>
                        </div>
                    </router-link>
                    <!--Add Faq-->
                    <router-link to="/superadmin/add-faq" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-addfaq.png">
                            <p class="font-weight-bold">Add FAQ</p>
                        </div>
                    </router-link>
                    <!--View Faqs-->
                    <router-link to="/superadmin/view-faqs" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-viewfaq.png">
                            <p class="font-weight-bold">View FAQs</p>
                        </div>
                    </router-link>
                    <!--Admin-User-Login-->
                    <router-link to="/login" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-gen-adminuserlogin.png">
                            <p class="font-weight-bold">Admin-User-Login</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    
    </main>

    <dash-footer/>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>