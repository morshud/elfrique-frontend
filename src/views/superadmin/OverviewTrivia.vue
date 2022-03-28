<template>
    <title>Overview Trivia | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Trivia Overview</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">Trivia</li>
                <li class="breadcrumb-item active">Overview</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section overview-box-section">
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <!--Create Trivia-->
                    <a href="/superadmin/create-trivia" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-tri-createtrivia.png">
                            <p>Create Trivia</p>
                        </div>
                    </a>
                    <!--View Trivia-->
                    <router-link to="/superadmin/view-trivia" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-tri-viewtrivia.png">
                            <p>View Trivia</p>
                        </div>
                    </router-link>
                    <!--Update Trivia-->
                    <router-link to="/superadmin/update-trivia" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-tri-updatetrivia.png">
                            <p>Update Trivia</p>
                        </div>
                    </router-link>
                    <!--View Results-->
                    <router-link to="/superadmin/view-result" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-tri-viewresult.png">
                            <p>View Results</p>
                        </div>
                    </router-link>
                    <!--Cash Payment-->
                    <router-link to="/superadmin/trivia-cash-payment" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-tri-cashpay.png">
                            <p>Cash Payment</p>
                        </div>
                    </router-link>
                    <!--Sales Analytics-->
                    <router-link to="/superadmin/trivia-sales-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-tri-salesanalytics.png">
                            <p>Sales Analytics</p>
                        </div>
                    </router-link>
                    <!--Search For Trivia-->
                    <router-link to="/superadmin/search-trivia" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-tri-searchtrivia.png">
                            <p>Search For Trivia</p>
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