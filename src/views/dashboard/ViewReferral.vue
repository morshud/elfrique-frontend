<template>
    <title>View -Referral | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">View Referral</h1>
            <nav>
                <!-- HAMZAT UPDATE ON REGISTRATION -->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">
                        <router-link to="/organiser/create-event" class="routers">
                            <a>
                                Create Event
                            </a>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active">
                        <router-link to="/organiser/add-ticket" class="routers">
                            <a>
                                Add Ticket
                            </a>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active">
                        <router-link to="/organiser/add-ticket" class="routers">
                            <a>
                                View Event
                            </a>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active">
                        <router-link to="/organiser/create-referral" class="routers">
                            <a>
                                Create Referral
                            </a>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active">
                        <router-link to="/organiser/view-referral" class="routers">
                            <a>
                                View Referral
                            </a>
                        </router-link>
                    </li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <!-- HAMZAT UPDATE ON REGISTRATION ENDS HERE -->

        <div class="container create-refer-div">
           <div class="col-lg-12 col-md-12">
            <div class="card-body card-table">
                    <div class="buttons-table">
                      <!-- <button type="button">Copy</button> -->
                      <button type="button" @click="exportCSV(voteContest)">
                        CSV
                      </button>
                      <!-- <button type="button">Excel</button> -->
                      <button @click="tableToExcel('vote', 'Vote')">
                        Export Excel
                      </button>
                      <!-- <button type="button">PDF</button>
                      <button type="button">Print</button> -->
                    </div>
                    <div class="search-table">
                      <form>
                        <input type="text" placeholder="Search..." />
                      </form>
                    </div>
                    <!--Table-->
                    <table id="vote" ref="vote" class="table datatable card-table-table">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Referral Code</th>
                          <th scope="col">Edit Referral</th>
                          <th scope="col">View Sales</th>
                          <th scope="col">Date Added</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Hamzat</td>
                          <td>greenmouse@gmail.com</td>
                          <td>121212</td>
                          <td>121212</td>
                          <td>Label 1</td>
                          <td>02/09/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Chukka</td>
                            <td>greenmouse@gmail.com</td>
                            <td>121212</td>
                            <td>121212</td>
                            <td>Label 2</td>
                            <td>02/09/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Radi-Dev</td>
                            <td>greenmouse@gmail.com</td>
                            <td>121212</td>
                            <td>121212</td>
                            <td>Label 3</td>
                            <td>02/09/2022</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
           </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Create referral</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="connet">
                                    <label>Name</label>
                                    <div class="row">
                                        <div class="col-md-12 mb-4">
                                            <input type="text" placeholder="Enter Your Name" name="firstname" class="input" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="connet">
                                    <label>Email</label>
                                    <div class="row">
                                        <div class="col-md-12 mb-4">
                                            <input type="text" placeholder="Enter Your Email" name="email" class="input" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="connet">
                                    <label>Referral Code</label>
                                    <div class="row">
                                        <div class="col-md-12 mb-4">
                                            <input type="text" placeholder="Enter Your Referral Code" name="email" class="input" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="connet">
                                    <button>
                                        <router-link to="Addsha" class="routers">
                                            <a>
                                                Add Referral
                                            </a>
                                        </router-link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </main>

    <dash-footer/>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    import VoteService from '../../service/vote.service'

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      
      },
      data(){
            return{
            content: '',
            contestId: '',
            NumberOfCategories: '',
            message: '',
            error: '',
            loading: false,
            
    
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        categoryForm: function () {
            let categoryForm = []
            for(let i = 0; i < this.NumberOfCategories; i++){
               categoryForm.push({
                   name: '',
                   description: '',
                
                })
            }
            return categoryForm
        
        },
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('/login');
    }


    VoteService.getAwards().then
    (
        response => {
            this.content = response.data.awards;
        }
    )
    },

    methods: {
        addCategory(){

            this.loading = true;

            if (this.categoryForm){
                for (let i = 0; i < this.NumberOfCategories; i++) {
                let formData = new FormData();
                formData.append('name', this.categoryForm[i].name);
                formData.append('description', this.categoryForm[i].description);
            
               
                
                VoteService.addCategory(this.categoryForm[i], this.contestId).then
                (
                    response => {
                        console.log(response);
                        this.$store.dispatch('vote/getMessage', 'Contest created successfully');
                        this.message = "categories created successfully";
                        this.loading = false;
                         
                    },

                    error => {
                        this.error = error.response.data.message;
                        this.loading = false;
                        console.log(error);
                    }   
                )
            }
            }
            
        },
        
    },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>