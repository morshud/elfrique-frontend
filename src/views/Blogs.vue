<template>
    <title>Blogs | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Breadcrumb-->
    <section class="breadcrumb-sec bread-blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1>Blogs</h1>
                    <div class="line-rule"></div>
                    <p><router-link to="/" class="routers"><a class="back-link" title="Back to homepage">Home</a></router-link> <i class="bi bi-arrow-bar-right"></i> <a>Blogs</a></p>
                </div>
            </div>
        </div>
    </section>
    <!--Breadcrumb Ends-->

    <!--Blog Section-->
    <section class="blog-section">
        <div class="container">
            <div class="row justify-content-center">
                 <div v-for="con in Content" :key="con.id" class="col-md-4 py-3">
                    <div class="card">
                        <router-link to="/blogPost" class="routers"><img :src="con.img_url" ondragstart="return false;" class="card-img-top" alt="blog image"></router-link>
                        <div class="card-body">
                            <button>Blog Category</button>
                            <span>{{format_date(con.createdAt)}} | By {{con.author}}</span>
                            <router-link to="/blogPost" class="routers"><h5 class="card-title">{{con.title}}</h5></router-link>
                            <!--NOTE: Max of only 35 char-->
                             <p class="card-text">{{con.detaills}}.</p>
                            <router-link :to="'/blogPost/' + con.id" class="routers"><a class="btn-read">Read More <i class="bi bi-arrow-right"></i></a></router-link>
                        </div>
                    </div>
                </div>
            
                
                <div class="col-md-2 py-3 justify-content-center text-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <!--Blog Section Ends-->

  <elfrique-newsletter/>
  <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Newsletter from './elfrique-newsletter.vue'
    import Footer from './elfrique-footer.vue'
    import BlogService from '../service/blog.service.js'
    import moment from 'moment'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-newsletter':Newsletter,
      'elfrique-footer':Footer,
      },
      data() {
        return {
            Content: ''   
        }
        }, 

        created() {

            BlogService.getBlogs().then(response => {
                this.Content = response.data.blogs;
                console.log(this.Content);
            })

        },
        methods: { 
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
    }
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>