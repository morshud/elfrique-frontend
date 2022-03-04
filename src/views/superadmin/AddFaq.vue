<template>
    <title>Add FAQ | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add FAQ</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">Add FAQ</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 mb-2 mt-2 text-center">
                    <h4>Upload A Question</h4>
                </div>
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mb-3">
                                <label>Select Product</label>
                                <select class="input" name="product">
                                    <option value="select product" hidden>Select Product</option>
                                    <option value="vote">Vote</option>
                                    <option value="forms">Forms</option>
                                    <option value="event">Event</option>
                                    <option value="trivia">Trivia</option>
                                    <option value="general">General</option>
                                    <option value="payment">Payment</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Question</label>
                                <textarea class="input" cols="30" rows="4"></textarea>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Answer</label>
                                <textarea class="input" cols="30" rows="4"></textarea>
                            </div>
                            <div class="col-lg-12 mt-1">
                                <button style="width: 150px" type="submit">Upload Question</button>
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