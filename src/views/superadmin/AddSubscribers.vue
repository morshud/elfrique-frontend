<template>
    <title>Add Subscribers | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Subscribers</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">Add Subscribers</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container subscribe-email-section mt-5 mb-5">
            <div class="row justify-content-center">
                <div class="col-lg-12 mb-2 text-center">
                    <h4>Add Subscribers Email</h4>
                </div>
                <div class="col-lg-10">
                    <form>
                        <input class="email-input" type="email" placeholder="Enter Email">
                        <input class="remove-input" type="text" value="Remove">
                        <div class="mt-3">
                            <button class="btn btn-primary me-2" type="button">Add <i class="bi bi-plus-circle"></i></button>
                            <button class="btn btn-success" type="submit">Save</button>
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