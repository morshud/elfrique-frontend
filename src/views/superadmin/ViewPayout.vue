<template>
    <title>View Payout | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>View Payouts</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">View Payouts</li>
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
                        <th scope="col">Product</th>
                        <th scope="col">Product ID</th>
                        <th scope="col">Organiser</th>
                        <th scope="col">Approval Status</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Options</th>
                        <th scope="col">Narration</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Form</td>
                        <td>330</td>
                        <td>organiseremailaddress@email.com</td>
                        <td><span class="text-success fw-bolder">Approved</span></td>
                        <td><span class="text-success fw-bolder">Paid</span></td>
                        <td>250</td>
                        <td>2022-2-3</td>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Options
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">View User Account Details</a></li>
                                    <li><a class="dropdown-item" href="#">Approve Payout</a></li>
                                    <li><a class="dropdown-item" href="#">Indicate Payment For Organiser</a></li>
                                    <li><a class="dropdown-item" href="#">Indicate Payment For Referrer</a></li>
                                </ul>
                            </div>
                        </td>
                        <td><a href="#">View Narration</a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Vote</td>
                        <td>120</td>
                        <td>organiseremailaddress@email.com</td>
                        <td><span class="text-danger fw-bolder">Not Approved</span></td>
                        <td><span class="text-danger fw-bolder">Pending Payment</span></td>
                        <td>500</td>
                        <td>2022-1-30</td>
                        <td>
                            <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Options
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">View User Account Details</a></li>
                                <li><a class="dropdown-item" href="#">Approve Payout</a></li>
                                <li><a class="dropdown-item" href="#">Indicate Payment For Organiser</a></li>
                                <li><a class="dropdown-item" href="#">Indicate Payment For Referrer</a></li>
                            </ul>
                            </div>
                        </td>
                        <td><a href="#">View Narration</a></td>
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
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>