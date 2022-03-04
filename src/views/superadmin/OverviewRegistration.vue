<template>
    <title>Overview Registration | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Registration Overview</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">Registration</li>
                <li class="breadcrumb-item active">Overview</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section overview-box-section">
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <!--Create Event-->
                    <router-link to="/superadmin/create-event" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-create-event.png">
                            <p>Create Event</p>
                        </div>
                    </router-link>
                    <!--View Event-->
                    <router-link to="/superadmin/view-event" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-view-event.png">
                            <p>View Event</p>
                        </div>
                    </router-link>
                    <!--Event Setting-->
                    <router-link to="/superadmin/event-setting" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-event-setting.png">
                            <p>Event Setting</p>
                        </div>
                    </router-link>
                    <!--Personal Ticket-->
                    <router-link to="/superadmin/personal-ticket" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-personal-ticket.png">
                            <p>Personal Ticket</p>
                        </div>
                    </router-link>
                    <!--Cash Payment-->
                    <router-link to="/superadmin/event-cash-payment" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-cash-payment.png">
                            <p>Cash Payment</p>
                        </div>
                    </router-link>
                    <!--Payout Setting-->
                    <router-link to="/superadmin/event-payout-setting" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-payout-setting.png">
                            <p>Payout Setting</p>
                        </div>
                    </router-link>
                    <!--Sales Analytics-->
                    <router-link to="/superadmin/event-sales-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-sales-analytics.png">
                            <p>Sales Analytics</p>
                        </div>
                    </router-link>
                    <!--Search For Tickets-->
                    <router-link to="/superadmin/search-ticket" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-reg-search-ticket.png">
                            <p>Search For Tickets</p>
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