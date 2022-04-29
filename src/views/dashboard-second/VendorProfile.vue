<template>
    <title>My Vendor Profile | Elfrique</title>
    <dash-header/>

    <main id="main" class="main">

    <div class="pagetitle">
      <h1>My Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>   
          <li class="breadcrumb-item active">Vendor Profile</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section profile">
      <div class="row">

        <div class="col-xl-12">

          <div class="card">
            <div class="card-body pt-3">
               <div  v-if="error" class=" alert-danger alert  alert-dismissible fade show" role="alert">
                        {{error}}}} 
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
                        {{message}} 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered">
                
                 <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit">Create Vendor Profile</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#pills-gallery">Gallery</button>
                </li>


              </ul>
              <div class="tab-content pt-2">
                <div class="tab-pane fade show active profile-edit pt-3" id="profile-edit">
                    <!-- Profile Edit Form -->
                    <form name="form" @submit.prevent="createVendorProfile">

                      <div class="row mb-3">
                        <label class="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div class="col-md-8 col-lg-9">
                          <input v-model="profile.email" type="email" class="form-control-input" disabled>
                        </div>
                      </div>

                     <div class="row mb-3">
                      <label class="col-md-4 col-lg-3 col-form-label">Vendor Category</label>
                      <div class="col-md-8 col-lg-9">
                        <select v-model="vendor.tag" class="form-control-input" required>
                          <option hidden>Select Category</option>
                          <option>DJ's & Music</option>
                          <option>Live Bands</option>
                          <option>MC's & Comedians</option>
                          <option>Photographer</option>
                          <option>Videographers</option>
                          <option>Cakes & Confectionery</option>
                          <option>Caterers</option>
                          <option>Event Venues</option>
                          <option>Drink Supplies</option>
                          <option>Guards & Security</option>
                          <option>Ushers</option>
                          <option>Event Planners</option>
                          <option>Wedding Planners</option>
                          <option>Event Decorators</option>
                        </select>
                      </div>
                    </div>

                      <div class="row mb-3">
                        <label class="col-md-4 col-lg-3 col-form-label">About My Service</label>
                        <div class="col-md-8 col-lg-9">
                          <textarea v-model="vendor.description" class='textarea divTextArea' ></textarea>
                        </div>
                      </div>

                      <div  v-for=" (n,index) in numberOfImages" :key="index" class="row mb-3">
                        <label class="col-md-4 col-lg-3 col-form-label">Gallery</label>
                        <div  class="col-md-8 col-lg-9">
                          <input type="file" ref="file" class="form-control-input" accept=".jpg, .jpeg, .png, .webp"  v-on:change="handleFileUpload(index)" multiple>
                          <!-- <small class="uploadSmallPicture">You can select multiple pictures</small> -->
                        </div>
                      </div>

                      <div class="col-lg-12">
                          <a type="button" class="btn-success btn-sm"  v-on:click="addMoreImage">Add More Images</a>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-success" :disabled="loading" >Save Changes<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                      </div>
                    </form><!-- End Profile Edit Form -->

                  </div>
              
                  <div class="tab-pane fade profile-overview" id="profile-overview">
                    <h5 class="card-title">Vendor Profile Details</h5>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label ">Full Name</div>
                      <div class="col-lg-9 col-md-8">{{profile.firstname}} {{profile.lastname}}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Phone</div>
                      <div class="col-lg-9 col-md-8">{{profile.phonenumber}}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Email</div>
                      <div class="col-lg-9 col-md-8">{{profile.email}}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">About My Service</div>
                      <div class="col-lg-9 col-md-8">
                          {{vendorProfile.description}}
                      </div>
                    </div>

                  </div>
                  <!--Gallery-->
                              <div class="tab-pane fade" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab">
                                  <section class="gallery-section">
                                      <div class="container gallery-container">
                                          <div id="projects">
                                              <ul id="gallery" class="myimgdivtoggle">
                                                  <li v-for="(con,index) in vendorProfile.img_url" :key="index" class="gallery1">
                                                      <a href="#">
                                                          <img :src="con">
                                                      </a>
                                                  </li>
                                                  <li class="gallery1">
                                                      <a href="#">
                                                          <img src="../../assets/images/gallery11.jpg">
                                                      </a>
                                                  </li>
                                                  <li class="gallery1">
                                                      <a href="#">
                                                          <img src="../../assets/images/gallery111.jpg">
                                                      </a>
                                                  </li>
                                                  <li class="gallery1">
                                                      <a href="#">
                                                          <img src="../../assets/images/gallery1111.jpg">
                                                      </a>
                                                  </li>
                                                  <li class="gallery1">
                                                      <a href="#">
                                                          <img src="../../assets/images/gallery11111.jpeg">
                                                      </a>
                                                  </li>
                                              </ul>
                                          </div>
                                          <!-- modal gallery -->
                                          <div class="gallery">
                                              <a class="close" href="#">
                                                  <i>
                                                  <span class="bar"></span>
                                                  <span class="bar"></span>
                                                  </i>
                                              </a>
                                              <img src="">
                                          </div>
                                      </div>
                                  </section>
                              </div>
                              <!--End Gallery-->
              </div>

                

              </div><!-- End Bordered Tabs -->

            </div>
          

        </div>
      </div>
    </section>
  </main>
    
    <dash-footer/>
</template>
<style scoped>
.form-control-input{
    width: 100%;
    padding: 6px 13px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
}
.uploadSmallPicture{
    color: red;
}
.divTextArea{
    width: 100%;
    height: 200px;
    padding: 10px 13px;
    border: 1px solid #a3a3a3;
    color: #000;
    font-size: 15px;
    font-weight: 400;
    border-radius: 5px;
    margin-bottom: 10px;
}
</style>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    import ProfileService from '../../service/profile.service'
    import VendorService from '../../service/vendor.service'
    import moment from 'moment'

  
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data() {
    return {
      content: '',
      message: '',
      successful: false,
      loading: false,
      numberOfImages: 4,
      vendorProfile: '',
      vendor:{
        description: '',
        tag: '',
      },
      file:[],
       profile: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        accountname: '',
        accountnumber: '',
        bankname: '',
        about: '',

      },
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('/login');
    }

    ProfileService.getProfile().then(
      response => {
        this.content = response.data.profile;
        this.profile = this.content;
      },
      error => {
        this.message = 
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        this.successful = false;
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      },

      VendorService.getVendorProfile().then(
        response => {
          this.vendorProfile = response.data;
        },
        error => {
          this.message = 
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          
        }
      )
    );
  },
  methods: {
    handleFileUpload(n){
        this.file[parseInt(n)] = this.$refs.file[n].files[0];
      },
        addMoreImage(){
            this.numberOfImages++;
        },

        createVendorProfile(){
            this.loading = true;
            let formData = new FormData();
            for(var i = 0; i < this.numberOfImages; i++){
                formData.append('image', this.file[i]);
            }
              
                formData.append('description', this.vendor.description);
                formData.append('tag', this.vendor.tag);
              
                
            
           
            VendorService.createVendor(formData).then(
                response => {
                    this.message = "Your profile has been updated successfully";
                    this.successful = true;
                    this.loading = false;
                },
                error => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
  },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>


