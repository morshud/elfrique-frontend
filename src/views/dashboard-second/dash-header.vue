<template>
<link rel="shortcut icon" href="@/assets/images/favicon.png" type="image/x-icon">
    <!--------Header--------->
    <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-center">
            <a class="logo">
                <router-link to="/user/dashboard" class="routers">
                <img src="@/assets/images/logo.png" alt="Elfrique Logo">
                </router-link>
            </a>
            <i  class="bi bi-list toggle-sidebar-btn"></i>
        </div>
        <!--Search Field-->
        <!-- <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword" required>
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div> -->
        <!--Nav Icon-->
        <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">
                <li>
                    <a href="#" class="switch-link-header" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Become A Seller<i class="bi bi-record2-fill"></i></a>
                </li>
                <!--Notification Nav-->
                <li class="nav-item dropdown">
                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-bell"></i>
                        <span class="badge bg-success badge-number">4</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                        <li class="dropdown-header">
                            You have 4 new notifications
                            <span class="badge rounded-pill bg-danger p-2 ms-2 text-light">Delete All</span>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-exclamation-circle text-warning"></i>
                            <div>
                                <h4>Lorem Ipsum</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>30 min. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-x-circle text-danger"></i>
                            <div>
                                <h4>Atque rerum nesciunt</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>1 hr. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-check-circle text-success"></i>
                            <div>
                                <h4>Sit rerum fuga</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>2 hrs. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-info-circle text-primary"></i>
                            <div>
                                <h4>Dicta reprehenderit</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>4 hrs. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li class="dropdown-footer">
                            <a href="#">Show all notifications</a>
                        </li>
    
                    </ul><!-- End Notification Dropdown Items -->
    
                </li>
                <!--Profile Image Icon-->
                <li class="nav-item dropdown pe-3">
                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="@/assets/images/profile-img.png" class="rounded-circle">
                        <span class="d-none d-md-block dropdown-toggle ps-2" :key = "currentUser">{{currentUser.firstname}}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li class="dropdown-header">
                            <h6  :key = "currentUser">{{currentUser.firstname}} {{currentUser.lastname}}</h6>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li>
                            <router-link to="/user/profile" class="routers"><a class="dropdown-item d-flex align-items-center">
                                <i class="bi bi-person"></i>
                                <span>My Profile</span>
                            </a></router-link>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href @click.prevent="logOut">
                                <i class="bi bi-box-arrow-right"></i>
                                <span>Sign Out</span>
                            </a>
                        </li>
    
                    </ul><!-- End Profile Dropdown Items -->
                </li>
            </ul>
        </nav>
    </header>

    <!--------Sidebar--------->
    <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
            <li>
                    <a href="#" class="switch-link-header" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Become A Seller<i class="bi bi-record2-fill"></i></a>
                </li>
            <li class="nav-item">
                <router-link to="/user/dashboard" class="routers"><a class="nav-link collapsed">
                    <img src="@/assets/images/menu-dashboard.png">
                    <span>Dashboard</span>
                </a></router-link>
            </li>
            <!--Profile-->
            <li class="nav-item">
                <router-link to="/user/profile" class="routers"><a class="nav-link collapsed">
                    <img src="@/assets/images/menu-profile.png">
                    <span>Profile</span>
                </a></router-link>
            </li>
            <!--Voting-->
             <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#voting-nav" data-bs-toggle="collapse" href="#">
                    <img src="@/assets/images/menu-vote.png"><span></span>Voting<i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="voting-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <!-- <li><router-link to="/user/start-voting" class="routers"><a><i class="bi bi-circle"></i><span>Start Voting</span></a></router-link></li>
                    <li><router-link to="/user/add-contestant" class="routers"><a><i class="bi bi-circle"></i><span>Add Contestants</span></a></router-link></li>
                    <li><router-link to="/user/add-sponsor" class="routers"><a><i class="bi bi-circle"></i><span>Add Sponsors</span></a></router-link></li>
                    <li><router-link to="/user/add-category" class="routers"><a><i class="bi bi-circle"></i><span>Add Category</span></a></router-link></li>
                    <li><router-link to="/user/add-nominee" class="routers"><a><i class="bi bi-circle"></i><span>Add Nominees</span></a></router-link></li>
                    
                   
                    <li><router-link to="/user/result-setting" class="routers"><a><i class="bi bi-circle"></i><span>Result Setting</span></a></router-link></li>
                    <li><router-link to="/user/add-info" class="routers"><a><i class="bi bi-circle"></i><span>Add Info</span></a></router-link></li> -->
                     <li><router-link to="/user/view-vote-analytics" class="routers"><a><i class="bi bi-circle"></i><span>Voting Transaction History</span></a></router-link></li>
                    <li><router-link to="/user/view-contestants" class="routers"><a><i class="bi bi-circle"></i><span>View Contestants</span></a></router-link></li>
                    <li><router-link to="/user/search-vote" class="routers"><a><i class="bi bi-circle"></i><span>Search For Vote</span></a></router-link></li>
                </ul>
            </li>
            <!-- Registration -->
            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#reg-nav" data-bs-toggle="collapse" href="#">
                    <img src="@/assets/images/menu-registration.png"><span></span>Registration<i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="reg-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <!-- <li><router-link to="/user/create-event" class="routers"><a><i class="bi bi-circle"></i><span>Create Event</span></a></router-link></li>
                    <li><router-link to="/user/add-ticket" class="routers"><a><i class="bi bi-circle"></i><span>Add Ticket</span></a></router-link></li> -->
                    <li><router-link to="/user/view-event" class="routers"><a><i class="bi bi-circle"></i><span>View Event</span></a></router-link></li>
                    <li><router-link to="/user/personal-ticket" class="routers"><a><i class="bi bi-circle"></i><span>View Personal Ticket</span></a></router-link></li>
                    <li><router-link to="/user/event-sales-analytics" class="routers"><a><i class="bi bi-circle"></i><span>Transaction History</span></a></router-link></li>
                    <li><router-link to="/user/search-ticket" class="routers"><a><i class="bi bi-circle"></i><span>Search For Tickets</span></a></router-link></li>
                </ul>
            </li>
            <!-- Forms -->
            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                    <img src="@/assets/images/menu-form.png"><span></span>Forms<i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                   <!--  <li><router-link to="/user/create-form" class="routers"><a><i class="bi bi-circle"></i><span>Create Form</span></a></router-link></li> -->
                    <li><router-link to="/user/view-form" class="routers"><a><i class="bi bi-circle"></i><span>View Forms</span></a></router-link></li>
                   <!--  <li><router-link to="/user/personal-form" class="routers"><a><i class="bi bi-circle"></i><span>Personal Forms</span></a></router-link></li> -->
                    <li><router-link to="/user/form-sales-analytics" class="routers"><a><i class="bi bi-circle"></i><span>Forms Transaction History</span></a></router-link></li>
                    <li><router-link to="/user/search-form" class="routers"><a><i class="bi bi-circle"></i><span>Search For Forms</span></a></router-link></li>
                </ul>
            </li>
           <!--  Trivia -->
            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#trivia-nav" data-bs-toggle="collapse" href="#">
                    <img src="@/assets/images/menu-trivia.png"><span></span>Trivia<i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="trivia-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                   <!--  <li><router-link to="/user/create-trivia" class="routers"><a><i class="bi bi-circle"></i><span>Create Trivia</span></a></router-link></li> -->
                    <li><router-link to="/user/view-trivia" class="routers"><a><i class="bi bi-circle"></i><span>View Trivia</span></a></router-link></li>
                    <!-- <li><router-link to="/user/update-trivia" class="routers"><a><i class="bi bi-circle"></i><span>Update Trivia</span></a></router-link></li> -->
                    <li><router-link to="/user/view-result" class="routers"><a><i class="bi bi-circle"></i><span>View Results</span></a></router-link></li>
                    <li><router-link to="/user/trivia-sales-analytics" class="routers"><a><i class="bi bi-circle"></i><span>Trivia Transaction History</span></a></router-link></li>
                    <li><router-link to="/user/search-trivia" class="routers"><a><i class="bi bi-circle"></i><span>Search For Trivia</span></a></router-link></li>
                </ul>
            </li>
            <!--   -->
            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#vendor-nav" data-bs-toggle="collapse" href="#">
                    <img src="@/assets/images/menu-vendor.png"><span></span>Vendor<i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="vendor-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <!-- <li><router-link to="#" class="routers"><a><i class="bi bi-circle"></i><span>Create Vendor</span></a></router-link></li> -->
                    <li><router-link to="/event-vendor-management" class="routers"><a><i class="bi bi-circle"></i><span>View Available Jobs</span></a></router-link></li>
                    <li><router-link to="#" class="routers"><a><i class="bi bi-circle"></i><span>Search For Job</span></a></router-link></li>
                </ul>
            </li>
             <!-- Travel -->
             <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#travel-nav" data-bs-toggle="collapse" href="#">
                    <img src="@/assets/images/menu-travel.png"><span></span>Travel & Tour<i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="travel-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li><router-link to="#" class="routers"><a><i class="bi bi-circle"></i><span>Travel Plan</span></a></router-link></li>
                </ul>
            </li> 
            <!--Log Out-->
            <li class="nav-item">
                <a class="nav-link collapsed" href @click.prevent="logOut">
                    <img src="@/assets/images/menu-logout.png">
                    <span>Log Out</span>
                </a>
            </li>
        </ul>
    </aside>

    <!-- Modal -->
            <div class="modal fade sellerModal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Become a Seller</h5>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="seller">
                        <div class="row">
                            <div class="col-lg-12">
                                <p>Fill up your info below to continue</p>
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Account Name</label>
                                <input v-model="profile.accountname" type="text" class="input" required>
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Account Number</label>
                                <input v-model="profile.accountnumber" type="number" class="input" required>
                            </div>
                            <div class="col-lg-12 mb-2">
                                <label>Bank Name</label>
                                <select v-model="profile.bankname" class="input" required>
                                    <option value="Choose Bank Name" hidden>Choose Bank Name</option>
                                    <option value="AB Microfinance Bank">AB Microfinance Bank</option>
                                    <option value="ASOSavings & Loan">ASOSavings & Loan</option>
                                    <option value="Access Bank Plc">Access Bank Plc</option>
                                    <option value="Access Money">Access Money</option>
                                    <option value="Access Y'ello & Beta">Access Y'ello & Beta</option>
                                    <option value="ACCIONO MFB">ACCIONO MFB</option>
                                    <option value="Addosser Microfinance Bank">Addosser Microfinance Bank</option>
                                    <option value="Advans La Fayette">Advans La Fayette</option>
                                    <option value="Alat By Wema">Alat By Wema</option>
                                    <option value="AssetMatrix MFB">AssetMatrix MFB</option>
                                    <option value="Bowen MFB">Bowen MFB</option>
                                    <option value="Carbon">Carbon</option>
                                    <option value="Cellulant">Cellulant</option>
                                    <option value="CIti Bank">CIti Bank</option>
                                    <option value="Contec Global">Contec Global</option>
                                    <option value="CoreStep Microfinance Bank">CoreStep Microfinance Bank</option>
                                    <option value="Coronation">Coronation</option>
                                    <option value="Diamond Bank">Diamond Bank</option>
                                    <option value="Eartholeum">Eartholeum</option>
                                    <option value="e-BARCs MFB">e-BARCs MFB</option>
                                    <option value="Ecobank Mobile">Ecobank Mobile</option>
                                    <option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option>
                                    <option value="Ecobank Xpress Account">Ecobank Xpress Account</option>
                                    <option value="Ekondo MFB">Ekondo MFB</option>
                                    <option value="Enterprise Bank">Enterprise Bank</option>
                                    <option value="Eyowo">Eyowo</option>
                                    <option value="eTranzact">eTranzact</option>
                                    <option value="FBN Mobile">FBN Mobile</option>
                                    <option value="FCMB Easy Account">FCMB Easy Account</option>
                                    <option value="FET">FET</option>
                                    <option value="FFS MFB">FFS MFB</option>
                                    <option value="FINCA MFB">FINCA MFB</option>
                                    <option value="FirstMonie Wallet">FirstMonie Wallet</option>
                                    <option value="Fidelity Bank">Fidelity Bank</option>
                                    <option value="Fidelity Mobile">Fidelity Mobile</option>
                                    <option value="FinaTrust MFB">FinaTrust MFB</option>
                                    <option value="First Bank Of Nigeria">First Bank Of Nigeria</option>
                                    <option value="First City Monument Bank FCMB">First City Monument Bank FCMB</option>
                                    <option value="FortisMobile">FortisMobile</option>
                                    <option value="GTMobile">GTMobile</option>
                                    <option value="Globus Bank">Globus Bank</option>
                                    <option value="GoMoney">GoMoney</option>
                                    <option value="Guaranty Trust Bank GTB">Guaranty Trust Bank GTB</option>
                                    <option value="Hedonmark">Hedonmark</option>
                                    <option value="Heritage Banking">Heritage Banking</option>
                                    <option value="Hope PSB">Hope PSB</option>
                                    <option value="Innovectives Kesh">Innovectives Kesh</option>
                                    <option value="Intellifin">Intellifin</option>
                                    <option value="Jaiz Bank Plc">Jaiz Bank Plc</option>
                                    <option value="Kegow">Kegow</option>
                                    <option value="Keystone Bank">Keystone Bank</option>
                                    <option value="Kredi Money Microfinance Bank">Kredi Money Microfinance Bank</option>
                                    <option value="Kuda MFB">Kuda MFB</option>
                                    <option value="Letshego Microfinance Bank">Letshego Microfinance Bank</option>
                                    <option value="Lotus Bank">Lotus Bank</option>
                                    <option value="Mint - Finex MFB">Mint - Finex MFB</option>
                                    <option value="Monie Point">Monie Point</option>
                                    <option value="Mkudi">Mkudi</option>
                                    <option value="MoneyBox">MoneyBox</option>
                                    <option value="Nigeria Int'l Bank (CITIGROUP)">Nigeria Int'l Bank (CITIGROUP)</option>
                                    <option value="One Finance">One Finance</option>
                                    <option value="Paga">Paga</option>
                                    <option value="Palmpay">Palmpay</option>
                                    <option value="Parkway">Parkway</option>
                                    <option value="Parkway-ReadyCash">Parkway-ReadyCash</option>
                                    <option value="Polaris Bank Plc">Polaris Bank Plc</option>
                                    <option value="Providus Bank Plc">Providus Bank Plc</option>
                                    <option value="Rubies MFB">Rubies MFB</option>
                                    <option value="Stanbic IBTC @ease Wallet">Stanbic IBTC @ease Wallet</option>
                                    <option value="Stanbic Mobile">Stanbic Mobile</option>
                                    <option value="Standard Chartered Bank">Standard Chartered Bank</option>
                                    <option value="Sterling Bank">Sterling Bank</option>
                                    <option value="TRJBank">TRJBank</option>
                                    <option value="TagPay">TagPay</option>
                                    <option value="TessyMobile">TessyMobile</option>
                                    <option value="Titan Trust Bank">Titan Trust Bank"</option>
                                    <option value="Union Bank Of Nigeria">Union Bank Of Nigeria</option>
                                    <option value="United Bank For Africa">United Bank For Africa</option>
                                    <option value="Unity Bank Plc">Unity Bank Plc</option>
                                    <option value="VFB MFB">VFB MFB</option>
                                    <option value="VNetworks">VNetworks</option>
                                    <option value="Wema Bank">Wema Bank</option>
                                    <option value="Wetland MFB">Wetland MFB</option>
                                    <option value="Zenith Bank">Zenith Bank</option>
                                    <option value="Zenith Mobile">Zenith Mobile</option>
                                    <option value="Zinternet - KongaPay">Zinternet - KongaPay</option>
                                    <option value="9PSB">9PSB</option>
                                </select>
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>About You</label>
                                <input v-model="profile.about" class='textarea'  name="about" id="about" cols="40" rows="4" placeholder="Tell us about yourself">    
        
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Address</label>
                                <input v-model="profile.address" class='textarea' name="address" id="address" cols="40" rows="15" placeholder="Enter your address"> 
                                
                            </div>
                            <div class="col-lg-12 mb-2">
                                <label>Gender</label>
                                <select v-model="profile.gender"  class="input" required>
                                    <option hidden>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Your Twitter Account URL</label>
                                <input v-model="profile.twitterURL" type="url" class="input" required>
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Your Facebook Account URL</label>
                                <input v-model="profile.facebookURL" type="url" class="input" required>
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Your Instagram Account URL</label>
                                <input v-model="profile.instagramURL" type="url" class="input" required>
                            </div>
                            <div class="col-lg-12 mt-2">
                                <button  type="submit" class="btn btn-success" :disabled="loading" >Submit Details<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                            </div>
                        </div>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" :data-bs-dismiss="modal">Skip Form</button>
                </div>
                </div>
            </div>
            </div>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
import ProfileService from '../../service/profile.service'
import moment from 'moment'
export default {
    name: 'dashboard',
    data() {
    return {
      content: '',
      message: '',
      successful: false,
      loading: false,
      modal: "modal",
       profile: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        accountname: '',
        accountnumber: '',
        bankname: '',
        about: '',
        address: '',
        twitterURL: '',
        facebookURL: '',
        instagramURL: '',


      },
      
    };
  },

  created() {


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

      }
    );
  },
  computed: {
    currentUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (user) {
          console.log(user)
        return user;
      }
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },

    seller() {
        
        this.loading = true;
        ProfileService.becomeSeller(this.profile).then(
          response => {
            this.message = response.data.message;
            this.successful = true;
            this.loading = false;
            this.modal = "modal";
            this.$router.push("/organiser/dashboard");
            
            

            },
          error => {    
            this.message =
              (error.response && error.response.data && error.response.data.message) ||
              /* error.messag */error.response.data.errors[0].message|| "something went wrong please try again";
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
        }
    },
       

  

  mounted(){
    window.scrollTo(0,0)

    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/main.js')
    document.head.appendChild(externalScript)
  }
}
</script>