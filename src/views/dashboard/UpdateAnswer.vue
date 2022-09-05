<template>
    <title>Update Answer | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Update Answer</h1>
            <nav>
                <!-- HAMZAT UPDATE ON REGISTRATION -->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">
                        Trivia
                    </li>
                    <li class="breadcrumb-item active">
                        Update Answer
                    </li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <!-- HAMZAT UPDATE ON REGISTRATION ENDS HERE -->

        <div class="container create-refer-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <label class="create" for="vote option">Update Question</label>
                                <select id="gateway" required>
                                    <option value="select vote option" >Kindly Update your Question</option>
                                    <option value="select vote option" >Kindly Update your Question</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" value="Submit" required>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Update Question</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="connet">
                                    <label>Attach Your File</label>
                                    <div class="row">
                                        <div class="col-md-12 mb-4">
                                            <input type="file" accept="image/*">
                                        </div>
                                    </div>
                                </div>
                                <div class="connet">
                                    <label>Question</label>
                                    <div class="row">
                                        <div class="col-md-12 mb-4">
                                            <textarea required class="input" cols="20" placeholder="Enter your Answer." rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="connet">
                                    <button>
                                        <router-link to="Addsha" class="routers">
                                            <a>
                                                Update Answers
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