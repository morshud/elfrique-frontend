<template>
    <title>Event Form Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Service Header-->
    <section class="service-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1>Event Forms Management System</h1>
                    <p>We manage an efficient form system that allows event organisers to create customised form questionnaires for their event. Our forms can be used for events registrations, award nominations, surveys, opinion polls, quiz and a lot more.</p>
                </div>
                <div class="col-md-5 text-center">
                    <div class="img-area">
                        <img src="@/assets/images/service-event-forms.png">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-lg-11 mb-5 search-section">
                    <form>
                        <input class="searchbox-input input" type="text" placeholder="Search here ...">
                        <input class="date-input input" type="date">
                        <input class="search-input input" type="submit" value="Search &#128269;">
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Service Header Ends-->

    <!--Service Content Event Form-->
    <section class="event-form-content">
        <div class="container">
            <div class="row">
                <div class="col-md-3 py-2">
                    <div class="card">
                        <img src="@/assets/images/event-form-img.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text main-text"><i class="bi bi-award-fill"></i> : The Contest TV Reality Show</p>
                            <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Free</p>
                            <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 10-01-2022)<br> End(23:59 - 27-02-2022)</p>
                            <router-link to="/event-form-content" class="routers"><a class="btn-view">Apply</a></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 py-2">
                    <div class="card">
                        <img src="@/assets/images/event-form-img2.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text main-text"><i class="bi bi-award-fill"></i> : IRU MGBEDE REALITY </p>
                            <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : NGN 3000</p>
                            <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 10-02-2022)<br> End(23:59 - 19-03-2022)</p>
                            <router-link to="#" class="routers"><a class="btn-view">Apply</a></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Service Content Event Form Ends-->

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