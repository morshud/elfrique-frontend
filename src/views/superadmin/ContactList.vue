<template>
    <title>Contact List | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Contact List</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">SMS Notification</li>
                    <li class="breadcrumb-item active">Contact List</li>
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
                            <div class="event-setting-btn-div">
                                <a type="button" class="btn-add" data-bs-toggle="modal" data-bs-target="#eventContact">
                                Add Contact
                                </a>
                                <!-- Modal -->
                                <div class="modal fade" id="eventContact" tabindex="-1" aria-labelledby="eventContactLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="eventContactLabel">Event Management System</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-12 header-modal text-center">
                                                            <p>Add Contact</p>
                                                        </div>
                                                        <div class="col-lg-12 mt-3">
                                                            <input type="text" placeholder="Enter contact name">
                                                        </div>
                                                        <div class="col-lg-12 mt-3">
                                                            <input type="tel" placeholder="Enter phone number">
                                                        </div>
                                                        <div class="col-lg-12 mt-2">
                                                            <button>Add Contact</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <p class="text-center p-text">SMS Notification Contacts</p>
                            <table class="table datatable card-table-table">
                                <thead> 
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Date Added</th>
                                    <th scope="col">Options</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Moses Ayo</td>
                                    <td>08123456789</td>
                                    <td>2018-11-07 16:55:03</td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Options
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                                <li><a class="dropdown-item" href="#">Delete</a></li>
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