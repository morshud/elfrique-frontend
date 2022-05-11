<template>
    <title>Blogs | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Blog Details-->
    <section class="blog-details">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 details">
                    <div class="blog-title text-center">
                        <h1>{{Content.title}}</h1>
                        <div class="line-rule"></div>
                        <p>{{format_date(Content.createdAt)}} | By {{Content.author}}</p>
                    </div>
                    <div class="blog-image">
                        <img :src="Content.img_url" ondragstart="return false;" alt="Blog image">
                    </div>
                    <div class="note">
                        <p>{{Content.details}}</p>
                    </div>
                    <div class="share-post text-center">
                        <h4>If you enjoyed this article, please share with your friends</h4>
                        <a href="#" target="_blank" title="Share on Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" target="_blank" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" target="_blank" title="Share on Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="goback">
                        <router-link to="/blogs" class="routers"><a><i class="bi bi-arrow-left-circle-fill"></i> Back to blog page</a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

             
            BlogService.getSingleBlog(this.$route.params.id).then(response => {
                this.Content = response.data.blog;
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