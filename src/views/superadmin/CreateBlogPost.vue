<template>
    <title>Create Blog Post | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Create Blog</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Blogs</li>
                    <li class="breadcrumb-item active">Create Blog</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div create-event-div">
            <div class="row justify-content-center">
                <form>
                    <div class="row justify-content-center">
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="row">
                                <!--Blog Title-->
                                <div class="col-lg-12 mt-2">
                                    <label>Blog Title</label>
                                    <input class="input" type="text" placeholder="Enter blog title">
                                </div>
                                <!--Blog Image-->
                                <div class="col-lg-12 mt-4">
                                    <label>Blog Image</label>
                                    <input class="input" type="file" accept=".jpg, .jpeg, .png, .jfif">
                                    <small class="text-danger font-weight-bold">(only .jpg, .jpeg, .png, .jfif or .webp format)</small>
                                </div>
                                <!--Blog Details-->
                                <div class="col-lg-12 mt-4">
                                    <label for="event description">Blog Details</label>
                                    <textarea class="input" cols="30" rows="4" placeholder="Enter details here..."></textarea>
                                </div>
                                <!--Blog Author-->
                                <div class="col-lg-12 mt-4">
                                    <label>Blog Author</label>
                                    <input class="input" type="text" placeholder="Enter name">
                                </div>
                                <!--Blog Date-->
                                <div class="col-lg-6 mt-4">
                                    <label>Date Posted</label>
                                    <input class="input" type="date">
                                </div>
                                <!--Blog Time-->
                                <div class="col-lg-6 mt-4">
                                    <label>Time Posted</label>
                                    <input class="input" type="time">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-11 mt-4">
                            <button type="submit">Create Blog Post</button>
                        </div>
                    </div>
                </form>
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

        let externalScriptQuill = document.createElement('script')
        let externalScriptRich = document.createElement('script')

        externalScriptQuill.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/quill.min.js')
        externalScriptRich.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/rich-text.js')

        document.head.appendChild(externalScriptQuill)
        document.head.appendChild(externalScriptRich)
      }
    }
</script>