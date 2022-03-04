<template>
    <title>Vote Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Service Header-->
    <section class="service-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1>Voting Management System</h1>
                    <p>We manage an efficient voting system that allows event organizers to set-up their contests or award contests for FREE and achieve the goal of their event. Our product gives a wide range of local and global users the opportunity to participate and cast their votes effortlessly from any part of the world.</p>
                </div>
                <div class="col-md-5 text-center">
                    <div class="img-area">
                        <img src="@/assets/images/service-vote.png">
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

    <!--Service Content Vote-->
    <section class="service-content-vote">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-pills nav-fill mb-4 mt-2 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active tabs-button" id="pills-pageantry-tab" data-bs-toggle="pill" data-bs-target="#pills-pageantry" type="button" role="tab" aria-controls="pills-pageantry" aria-selected="true"><i class="fas fa-crown"></i> Pageantry</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-award-tab" data-bs-toggle="pill" data-bs-target="#pills-award" type="button" role="tab" aria-controls="pills-award" aria-selected="false"><i class="fas fa-trophy"></i> Awards</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-reality-tab" data-bs-toggle="pill" data-bs-target="#pills-reality" type="button" role="tab" aria-controls="pills-reality" aria-selected="false"><i class="fas fa-tv"></i> Reality TV</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-photo-tab" data-bs-toggle="pill" data-bs-target="#pills-photo" type="button" role="tab" aria-controls="pills-photo" aria-selected="false"><i class="fas fa-images"></i> Photo Contest</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <!--Pageantry-->
                        <div class="tab-pane fade show active" id="pills-pageantry" role="tabpanel" aria-labelledby="pills-pageantry-tab">
                            <div class="container">
                                <div class="row" >
                                    <div class="col-md-3 py-2" v-for="con in voteContent" :key="con.id" >
                                        <div class="card">
                                            <img :src="con.image" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : {{con.title}}</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : {{con.type}}</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : {{con.contestants.length}} Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - {{con.startdate}})<br> End(23:59 - {{con.closedate}})</p>
                                                <router-link to="/voting-content" class="routers"  v-on:click="getContest(con)"><a class="btn-view-contest">View Contest</a></router-link>
                                            </div>
                                        </div>
                                    </div>
                                   <!--  <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Miss West African Beauty Pageant</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Contest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Miss West African Beauty Pageant</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Contest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Miss West African Beauty Pageant</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Contest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Miss West African Beauty Pageant</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Contest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Miss West African Beauty Pageant</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Contest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Miss West African Beauty Pageant</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Contest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Miss West African Beauty Pageant</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Contestant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Contest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 text-center mt-3">
                                        <div class="pagination-div">
                                            <ul class="pagination text-center">
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <!--Award-->
                        <div class="tab-pane fade" id="pills-award" role="tabpanel" aria-labelledby="pills-award-tab">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img1.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Nigeria governor score card award 2022</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Nominee(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Nominees</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img1.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Nigeria governor score card award 2022</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Nominee(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Nominees</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img1.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Nigeria governor score card award 2022</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Nominee(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Nominees</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img1.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Nigeria governor score card award 2022</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 4 Nominee(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Nominees</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Reality TV-->
                        <div class="tab-pane fade" id="pills-reality" role="tabpanel" aria-labelledby="pills-reality-tab">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img2.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Title Here</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 9 Participant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img2.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Title Here</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 9 Participant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img2.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Title Here</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 9 Participant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Photo Contest-->
                        <div class="tab-pane fade" id="pills-photo" role="tabpanel" aria-labelledby="pills-photo-tab">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img3.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Title Here</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 3 Participant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Service Content Vote Ends-->

    <elfrique-newsletter/>
    <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Newsletter from './elfrique-newsletter.vue'
    import Footer from './elfrique-footer.vue'
    import VoteService from '../service/vote.service'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-newsletter':Newsletter,
      'elfrique-footer':Footer,
      },
      data() {
        return {
            voteContent: ''

            
        }
     },

     

        created() {
            VoteService. getAllContests().then(response => {
                this.voteContent = response.data.voteContests;
                console.log(this.voteContent);
            })

        },

        methods:{
            getContest(contest){
              this.$store.dispatch('vote/getSingleContest',contest).then(
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