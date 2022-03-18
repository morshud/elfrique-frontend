<template>
    <title>Dashboard | Elfrique</title>
    <dash-header/>
    
    <!--------Main Content--------->
     <main id="main" class="main">
        <!--Page Title-->
        <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div>
        <!--Page Body-->
        <section class="section dashboard mt-3">
            <div class="col-lg-12">
                <div class="row justify-content-center mt-4">
                    <!--Box 1-->
                    <div class="col-lg-4 mb-4">
                        <div class="topBox topBox1">
                            <h5>
                                <img src="@/assets/images/icon-vote.png">
                                <span>Votes</span>
                            </h5>
                            <p>20</p>
                        </div>
                    </div>
                    <!--Box 2-->
                    <div class="col-lg-4 mb-4">
                        <div class="topBox topBox2">
                            <h5>
                                <img src="@/assets/images/icon-trivia.png">
                                <span>Jobs Applied</span>
                            </h5>
                            <p>100</p>
                        </div>
                    </div>
                    <!--Box 3-->
                    <div class="col-lg-4 mb-4">
                        <div class="topBox topBox3">
                            <h5>
                                <img src="@/assets/images/icon-event.png">
                                <span>Bookings Made</span>
                            </h5>
                            <p>50</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="single_crm">
                                        <div class="crm_head d-flex align-items-center justify-content-between">
                                        <div class="thumb">
                                            <img src="@/assets/images/dash-icons/icon-vote.png">
                                        </div>
                                        </div>
                                        <div class="crm_body">
                                        <h4>20</h4>
                                        <p>Votes</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="single_crm ">
                                        <div class="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
                                        <div class="thumb">
                                            <img src="@/assets/images/dash-icons/icon-job.png">
                                        </div>
                                        </div>
                                        <div class="crm_body">
                                        <h4>100</h4>
                                        <p>Jobs Applied</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="single_crm">
                                        <div class="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
                                        <div class="thumb">
                                            <img src="@/assets/images/dash-icons/icon-booking.png">
                                        </div>
                                        </div>
                                        <div class="crm_body">
                                        <h4>50</h4>
                                        <p>Bookings Made</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="white_card mb_30 card_height_100">
                            <div class="white_card_body">
                                <div id="chartBar"></div>
                            </div>
                        </div>
                    </div>
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

      
  computed: {
    currentUser() {
      const user= this.$store.state.auth.user;
      if (user) {
        return user;
      }
    }
  },
     mounted() {
         if (!this.currentUser) {
            this.$router.push('/login');
    }
  },
      mounted(){
          //chartBar
          var options = {
            series: [{
                data: [
                    {x: "Votes", y: 20},
                    {x: "Jobs Applied", y: 100},
                    {x: "Bookings Made", y: 50},
                ]
            }],
            chart: {
                type: "bar",
                height: 400
            },
            fill: {
                colors: ['#5d9947']
            },
            plotOptions: {
                bar: {
                horizontal: false,
                distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            }
          };
          var chart = new ApexCharts(document.querySelector("#chartBar"), options);
          chart.render();


        window.scrollTo(0,0)

        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/main.js')
        document.head.appendChild(externalScript)
      }
     
   
};
    
</script>