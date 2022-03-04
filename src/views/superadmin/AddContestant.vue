<template>
    <title>Add Contestant | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Contestant</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active"><router-link to="/superadmin/overview-voting" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active"><router-link to="/superadmin/start-voting" class="routers"><a>Start Voting</a></router-link></li>
                    <li class="breadcrumb-item active">Add Contestants</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Number of Contestants</label>
                                <input class="input" type="number" placeholder="Set number of contestants">
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="vote option">Vote Option</label>
                                <select name="gateway" id="gateway">
                                    <option value="select vote option">Select Your Vote Option</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Load</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Voting Management System</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card">
                    <div class="card-body card-table">
                        <div class="modal-table-form">
                            <form>
                                <!--Table-->
                                <table class="table datatable card-table-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Contestant Full Name</th>
                                        <th scope="col">Contestant Image</th>
                                        <th scope="col">Contestant Number</th>
                                        <th scope="col">About Contestant</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input type="text"></td>
                                        <td><input type="file"></td>
                                        <td><input type="number"></td>
                                        <td><textarea cols="30" rows="2"></textarea></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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