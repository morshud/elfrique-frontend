<template>
    <title>Event Tickets Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <section class="voting-content event-ticket">
        <div class="container header-cont">
            <div class="row">
                <div class="col-md-4">
                    <div class="img-area">
                        <img :src="event.image" ondragstart="return false;" >
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-title-area">
                        <h1>{{event.title}}</h1>
                        <small>Organised by : <span>{{event.organisation}}</span></small>
                        <div class="details-header">
                            <h5>Location</h5>
                            <p><i class="bi bi-geo-alt-fill"></i> : {{event.venue}}</p>
                            <h5>Date</h5>
                            <p><i class="bi bi-calendar3"></i> : {{format_date(event.startdate)}}</p>
                            <h5>Time</h5>
                            <p><i class="bi bi-alarm-fill"></i> : 13:50</p>
                        </div>
                        <div class="details-social">
                            <h5>Share on:</h5>
                            <a href="#" title="Share on facebook"><img src="@/assets/images/share-facebook.png"></a>
                            <a href="#" title="Share on whatsapp"><img src="@/assets/images/share-whatsapp.png"></a>
                            <a href="#" title="Share on telegram"><img src="@/assets/images/share-telegram.png"></a>
                            <a href="#" title="Share on instagram"><img src="@/assets/images/share-instagram.png"></a>
                            <a href="#" title="Share on twitter"><img src="@/assets/images/share-twitter.png"></a>
                            <a href="#" title="Share through email"><img src="@/assets/images/share-email.png"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container event-form-content mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-pills mb-5 mt-2" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active tabs-button" id="pills-ticket-tab" data-bs-toggle="pill" data-bs-target="#pills-ticket" type="button" role="tab" aria-controls="pills-ticket" aria-selected="true"><i class="bi bi-people-fill"></i> Ticket</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-organ-tab" data-bs-toggle="pill" data-bs-target="#pills-organ" type="button" role="tab" aria-controls="pills-organ" aria-selected="false"><i class="fas fa-tv"></i> Organisers</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <!--Ticket-->
                        <div class="tab-pane fade show active" id="pills-ticket" role="tabpanel" aria-labelledby="pills-ticket-tab">
                            <div class="event-details">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h1>Ticket Details</h1>
                                        <h6>{{event.description}}</h6>
                                    </div>
                                    <div class="col-lg-1"></div>
                                    <div class="col-lg-5">
                                        <h1>Buy Ticket</h1>
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12 mb-3" v-for="con in event.eventsTickets" :key="con.id" >
                                                    <label>{{con.name.toUpperCase()}} (NGN {{con.price}})</label>
                                                    <input class="input" type="number" placeholder="Enter number of VIP ticket">
                                                </div>
                                                <div class="col-lg-12 text-center">
                                                    <button type="submit">Buy Ticket</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Organiser-->
                        <div class="tab-pane fade" id="pills-organ" role="tabpanel" aria-labelledby="pills-organ-tab">
                            <div class="container organiser-area">
                                <div class="row justify-content-center px-2">
                                    <div class="col-lg-12">
                                        <h1>Oragniser Details</h1>
                                        <h4>Name</h4>
                                        <p>{{event.organisation}}</p>
                                        <h4>Email</h4>
                                        <p>{{event.adminuser.email}}</p>
                                        <h4>Phone Number</h4>
                                        <p>{{event.adminuser.phonenumber}}</p>
                                        <h4>About</h4>
                                        <h6>{{event.adminuser.about}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Footer from './elfrique-footer.vue'
    import moment from 'moment'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-footer':Footer,
      },
       computed: {
         event() {
             return this.$store.state.vote.event
            }
     },
     methods: { 
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
        }
        },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>