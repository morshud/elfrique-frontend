<template>
    <title>Add Category | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Category</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active"><router-link to="/superadmin/overview-voting" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active"><router-link to="/superadmin/start-voting" class="routers"><a>Start Voting</a></router-link></li>
                    <li class="breadcrumb-item active">Add Category</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Number of Categories</label>
                                <input class="input" type="number" placeholder="Choose number of categories">
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="vote option">Vote Option</label>
                                <select name="gateway" id="gateway">
                                    <option value="select vote option">Select Your Vote Option</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit" value="proceed">Load</button>
                            </div>
                        </div>
                    </form>
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