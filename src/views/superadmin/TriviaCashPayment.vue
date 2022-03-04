<template>
    <title>Trivia Cash Payment | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Cash Payment</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Trivia</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-trivia" class="routers"><a>Overview</a></router-link></li>
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
                                <th scope="col">Email</th>
                                <th scope="col">Name</th>
                                <th scope="col">Reference</th>
                                <th scope="col">Payment Gateway</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Country</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>myemail@meme.com</td>
                                <td>Faith Gift</td>
                                <td>RDDF303</td>
                                <td>Bank Payment</td>
                                <td>5000</td>
                                <td>Paid</td>
                                <td>Nigeria</td>
                                <td>2019-05-15 18:10:54</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">ACTIVATE PAYMENT</a></li>
                                            <li><a class="dropdown-item" href="#">DEACTIVATE PAYMENT</a></li>
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