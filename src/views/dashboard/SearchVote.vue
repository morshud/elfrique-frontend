<template>
    <title>Search For Vote | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Search For Vote(s)</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Search For Vote</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Vote Reference Number</label>
                                <input class="input" type="text" placeholder="Enter vote reference number">
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit" value="proceed">Search <i class="bi bi-binoculars"></i></button>
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