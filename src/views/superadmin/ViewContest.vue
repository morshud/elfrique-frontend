<template>
    <title>View Contest | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>View Contest</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">Voting</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-voting" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">View Contest</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body card-table">
                <div class="buttons-table">
                    <button type="button">Copy</button>
                    <button type="button">CSV</button>
                    <button type="button">Excel</button>
                    <button type="button">PDF</button>
                    <button type="button">Print</button>
                </div>
                <div class="search-table">
                    <form>
                        <input type="text" placeholder="Search...">
                    </form>
                </div>
                <!--Table-->
                <table class="table datatable card-table-table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Type</th>
                        <th scope="col">Fee</th>
                        <th scope="col">Status</th>
                        <th scope="col">Vote Link</th>
                        <th scope="col">Options</th>
                        <th scope="col">View Analytics</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>33</td>
                        <td>Web App</td>
                        <td><img src="@/assets/images/welcomebg.jpg"></td>
                        <td>2022-01-29 09:45:50</td>
                        <td>Paid</td>
                        <td>50</td>
                        <td>OFF</td>
                        <td><a href="#">Vote Link</a></td>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Options
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                    <li><a class="dropdown-item" href="#">Delete</a></li>
                                    <li><a class="dropdown-item" href="#">Disable Contest View</a></li>
                                    <li><a class="dropdown-item" href="#">Open Voting</a></li>
                                    <li><a class="dropdown-item" href="#">Enable Auto Switch</a></li>
                                    <li><a class="dropdown-item" href="#">Enable Cash Payment</a></li>
                                    <li><a class="dropdown-item" href="#">Enable Airtime Payment</a></li>
                                    <li><a class="dropdown-item" href="#">Enable Profile View</a></li>
                                    <li><a class="dropdown-item" href="#">Enable Graph View</a></li>
                                    <li><a class="dropdown-item" href="#">Switch To Interswitch</a></li>
                                    <li><a class="dropdown-item" href="#">Switch To Flutterwave</a></li>
                                    <li><a class="dropdown-item" href="#">Switch To Payu</a></li>
                                    <li><a class="dropdown-item" href="#">Vote Setting</a></li>
                                    <li><a class="dropdown-item" href="#">Payout Setting</a></li>
                                </ul>
                            </div>
                        </td>
                        <td><a href="#">View Analytics</a></td>
                    </tr>
                    </tbody>
                </table>
                <nav>
                    <ul class="pagination pagination-md">
                        <li class="page-item disabled">
                            <a class="page-link"><span aria-hidden="true">&laquo;</span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link"><span aria-hidden="true">&raquo;</span></a>
                        </li>
                    </ul>
                </nav>
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
    import VoteService from '../../service/vote.service'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data() {
        return {
            Content: ''

            
        }
        }, 

        computed: {
        loggedIn() {
            return this.$store.state.admin.status.loggedIn;
            },
        },

        created() {

              if (!this.loggedIn) {
                this.$router.push('/superadmin');
              }
            VoteService.getAllContestForAdmin().then(response => {
                this.Content = response.data.voteContests;
                console.log(this.Content);
            })

        },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>