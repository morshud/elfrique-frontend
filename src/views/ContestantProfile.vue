<template>
    <title>Contestant Profile | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <section class="contestant-profile">
        <!--Contestants Header-->
        <div class="container ">
            <div class="row">
                <div class="col-lg-12 text-center" :style="cssProps">
                    <h1>{{contest.title}} Contest</h1>
                </div>
            </div>
        </div>
        <!--Contestants Details and vote-->
        <div class="container mt-5 details-contestant">
            <div class="row">
                <div class="col-lg-7">
                    <div class="img-area">
                        <img :src="contestant.image">
                    </div>
                    <div class="text-area">
                        <h4>Contestant Name</h4>
                        <p>{{contestant.fullname}}</p>
                        <h4>Contestant Number</h4>
                        <p>{{contestant.contestantnumber}}</p>
                        <h4>Number of Votes</h4>
                        <p>4</p>
                        <h4>About</h4>
                        <h6>{{contestant.about}}</h6>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-4 form-area">
                    <h1>Input Details To Vote Now</h1>
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mb-3">
                                <label>Total number of votes you want</label>
                                <input type="number" placeholder="Enter number of votes you want">
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Name</label>
                                <input type="text" placeholder="Enter your name">
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Email address</label>
                                <input type="email" placeholder="Enter your email address">
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Enter your phone number">
                            </div>
                            <div>
                                <p><strong>Each vote cost NGN 100</strong></p>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit">Vote</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--Other Contestants-->
        <div class="container service-content-vote mt-5">
            <div class="row tab-content">
                <div class="col-lg-12">
                    <h1 style="font-size: 25px; font-weight: 700; padding-bottom: 10px;">Other Contestant(s)</h1>
                </div>
                <div class="col-md-3 py-2" v-for="con in otherContestants" :key="con.id">
                <div class="card">
                    <img :src="con.image" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text main-text"><i class="bi bi-person-video"></i> : {{con.fullname}}
                        </p>
                        <p class="card-text card-text-after"><i class="bi bi-circle-square"></i> : {{con.contestantnumber}} (contestant number)</p>
                        <p class="card-text card-text-after"><i class="bi bi-activity"></i>: 2 (votes)</p>
                         <router-link to="/contestant-profile" class="routers" v-on:click="getContestant(con)"><a class="btn-view-contest">View Profile</a></router-link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>

    <elfrique-footer/>
</template>
<style scoped>
    .contestant-profile .header-contestant .col-lg-12{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-image: linear-gradient(90deg,  #000000bb, #000000bb), url('../assets/images/voting-img.jpg');
        padding: 100px 10px;
        color: #fff;
        border-radius: 20px;
    }
</style>
<script>
    import Header from './elfrique-header.vue'
    import Footer from './elfrique-footer.vue'
    export default {
        name: "Elfrique",
        components:{
        'elfrique-header':Header,
        'elfrique-footer':Footer,
        },
        computed: {
        contest() {
             return this.$store.state.vote.contest
            },
        contestant(){
            return this.$store.state.vote.contestant
        },

        otherContestants(){
            const OC = this.contest.contestants.filter(contestant => contestant.id !== this.contestant.id)
            return OC
        },
     },

     methods: { 
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
        },
            getContestant(con){
                this.$store.dispatch('vote/getContestant', con)
                 window.scrollTo(0,0)
            },

        },
        mounted(){
            window.scrollTo(0,0)
            console.log(this.otherContestants)
        }
    }
</script>