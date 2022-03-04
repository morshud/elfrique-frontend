<template>
    <title>Overview Forms | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Forms Overview</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">Forms</li>
                <li class="breadcrumb-item active">Overview</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section overview-box-section">
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <!--Create Form-->
                    <router-link to="/superadmin/create-form" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-fom-create-form.png">
                            <p>Create Form</p>
                        </div>
                    </router-link>
                    <!--View Forms-->
                    <router-link to="/superadmin/view-forms" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-fom-view-form.png">
                            <p>View Forms</p>
                        </div>
                    </router-link>
                    <!--Personal Forms-->
                    <router-link to="/superadmin/personal-forms" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-fom-personal-form.png">
                            <p>Personal Forms</p>
                        </div>
                    </router-link>
                    <!--Cash Payment-->
                    <router-link to="/superadmin/form-cash-payment" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-fom-cash-payment.png">
                            <p>Cash Payment</p>
                        </div>
                    </router-link>
                    <!--Payout Setting-->
                    <router-link to="/superadmin/form-payout-setting" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-fom-payout-setting.png">
                            <p>Payout Setting</p>
                        </div>
                    </router-link>
                    <!--Sales Analytics-->
                    <router-link to="/superadmin/form-sales-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-fom-sales-analytics.png">
                            <p>Sales Analytics</p>
                        </div>
                    </router-link>
                    <!--Search For Forms-->
                    <router-link to="/superadmin/search-forms" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-fom-search-for-form.png">
                            <p>Search For Forms</p>
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