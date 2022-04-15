<template>
    <title>Event Tickets Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Service Header-->
    <section class="service-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1>Event Tickets Management System</h1>
                    <p>We manage an efficient ticket system that allows event organisers to create customisedtickets for their event. Our tickets can be used for events , awards, concerts , parties and a lot more.</p>
                </div>
                <div class="col-md-5 text-center">
                    <div class="img-area">
                        <img src="@/assets/images/service-event-ticket.png">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-lg-11 mb-5 search-section">
                    <form>
                        <input class="searchbox-input input" type="text" placeholder="Search tickets here ...">
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
                <div class="col-md-3 py-2" v-for="con in eventContent" :key="con.id">
                    <div class="card">
                        <img :src="con.image" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text main-text"><i class="bi bi-ticket-detailed-fill"></i> : {{con.title}}</p>
                            <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : {{con.type}}</p>
                            <p class="card-text card-text-after"><i class="bi bi-geo-alt-fill"></i> : {{con.venue}}</p>
                            <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : {{format_date(con.startdate)}}</p>
                            <p class="card-text card-text-after"><i class="bi bi-alarm-fill"></i> : 13:50</p>
                            <router-link to="/ticket-content" class="routers"  v-on:click="getEvent(con)"><a class="btn-view">Buy Ticket</a></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <!--Service Content Event Form Ends-->

    
    <elfrique-footer/>
</template>
<script>
    import Header from './elfrique-header.vue'
    import Newsletter from './elfrique-newsletter.vue'
    import Footer from './elfrique-footer.vue'
    import EventService from '../service/event.service'
    import moment from 'moment'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-newsletter':Newsletter,
      'elfrique-footer':Footer,
      },
      data() {
        return {
            eventContent: ''

            
        }
     },
    
        created() {
            EventService.allEvents().then(response => {
                this.eventContent = response.data.events;
                console.log(this.eventContent);
            })

        },

        methods: { 
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
        },
        
            getEvent(contest){
              this.$store.dispatch('vote/getSingleEvent',contest).then(
            () => {
            //console.log(this.$store.state.vote.voteContent)
              /* this.$router.push('/voting-content'); */
          }
            )
        }
        },

        
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>