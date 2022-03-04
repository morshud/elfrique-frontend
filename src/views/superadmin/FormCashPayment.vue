<template>
    <title>Form Cash Payment | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Cash Payment</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Forms</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-forms" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Cash Payment</li>
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
                                <th scope="col">Email/Telephone</th>
                                <th scope="col">Form Field Name</th>
                                <th scope="col">Form Field Value</th>
                                <th scope="col">Reference</th>
                                <th scope="col">Payment Gateway</th>
                                <th scope="col">Amount</th>
                                <th scope="col">State</th>
                                <th scope="col">Country</th>
                                <th scope="col">Continent</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">View Filled Forms</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>myemail@meme.com</td>
                                <td>
                                    <span>Full-Name</span> <br><br>
                                    <span>Date-of-Birth</span> <br><br>
                                    <span>Gender</span> <br><br>
                                    <span>Residential-Address</span> <br><br>
                                    <span>State-of-Origin</span> <br><br>
                                    <span>LGA</span> <br><br>
                                    <span>Short-Bio</span> <br><br>
                                    <span>Phone-Number</span> <br><br>
                                    <span>WhatsApp-Number</span> <br><br>
                                    <span>Bust-or-Chest-Size</span> <br><br>
                                    <span>Waist</span> <br><br>
                                    <span>Hip</span> <br><br>
                                    <span>Height</span> <br><br>
                                </td>
                                <td>
                                    <span>Taiwo Alade</span> <br><br>
                                    <span>1978-12-06</span> <br><br>
                                    <span>Male</span> <br><br>
                                    <span>Lekki, Lagos State</span> <br><br>
                                    <span>Kwara</span> <br><br>
                                    <span>Lekki LGA</span> <br><br>
                                    <span>Just me and myself</span> <br><br>
                                    <span>08180416178</span> <br><br>
                                    <span>08180416178</span> <br><br>
                                </td>
                                <td>RDDF303</td>
                                <td>Bank Payment</td>
                                <td>5000</td>
                                <td>Lagos</td>
                                <td>Nigeria</td>
                                <td>Africa</td>
                                <td>2019-05-15 18:10:54</td>
                                <td><a href="#">View</a></td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">ACTIVATE FORM</a></li>
                                            <li><a class="dropdown-item" href="#">DEACTIVATE FORM</a></li>
                                        </ul>
                                    </div>
                                </td>
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