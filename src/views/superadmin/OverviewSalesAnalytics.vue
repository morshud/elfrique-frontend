<template>
    <title>Overview Sales Analytics | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Sales Analytics Overview</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">Sales Analytics</li>
                <li class="breadcrumb-item active">Overview</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section overview-box-section">
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <!--Voting-->
                    <router-link to="/superadmin/voting-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-ana-voting.png">
                            <p>Voting</p>
                        </div>
                    </router-link>
                    <!--Forms-->
                    <router-link to="/superadmin/form-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-ana-forms.png">
                            <p>Forms</p>
                        </div>
                    </router-link>
                    <!--Tickets-->
                    <router-link to="/superadmin/ticket-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-ana-tickets.png">
                            <p>Tickets</p>
                        </div>
                    </router-link>
                    <!--Trivia-->
                    <router-link to="/superadmin/trivia-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-ana-trivia.png">
                            <p>Trivia</p>
                        </div>
                    </router-link>
                    <!--Vendor-->
                    <router-link to="/superadmin/vendor-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-ana-vendor.png">
                            <p>Vendor</p>
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