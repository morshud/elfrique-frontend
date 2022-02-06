<template>
    <title>Add Info | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Info</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active"><router-link to="/organiser/start-voting" class="routers"><a>Start Voting</a></router-link></li>
                    <li class="breadcrumb-item active"><router-link to="/organiser/add-contestant" class="routers"><a>Add Contestant</a></router-link></li>
                    <li class="breadcrumb-item active"><router-link to="/organiser/add-sponsor" class="routers"><a>Add Sponsors</a></router-link></li>
                    <li class="breadcrumb-item active"><router-link to="/organiser/add-category" class="routers"><a>Add Category</a></router-link></li>
                    <li class="breadcrumb-item active">Add Info</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Info Number</label>
                                <input class="input" type="number" placeholder="Set how many">
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="vote option">Vote Option</label>
                                <select name="gateway" id="gateway">
                                    <option value="select vote option">Select Your Vote Option</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit" value="proceed">Submit</button>
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