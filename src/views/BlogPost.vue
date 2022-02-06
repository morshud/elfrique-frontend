<template>
    <title>Blogs | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Blog Details-->
    <section class="blog-details">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 details">
                    <div class="blog-title text-center">
                        <h1>Blog Title Goes Here</h1>
                        <div class="line-rule"></div>
                        <p>June 27, 2021 | By Elfrique</p>
                    </div>
                    <div class="blog-image">
                        <img src="@/assets/images/blog-img.jpg" alt="Blog image">
                    </div>
                    <div class="note">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, rem blanditiis? Doloremque, autem dolorem ratione fugiat optio magnam doloribus illo unde minus maiores temporibus repellat fugit, repudiandae natus, itaque nobis saepe voluptatibus reprehenderit libero provident laboriosam? Aperiam quaerat delectus saepe fugit? Repellat officiis quibusdam qui optio, hic, mollitia nesciunt quod vel rem consequatur magnam. Quo rerum eligendi expedita reprehenderit ullam facilis, non nulla iure commodi officia nisi vel, tempore, pariatur magni consequuntur incidunt culpa hic molestiae quasi laboriosam provident cumque maiores. Reiciendis, nihil tempore! Harum dolorem aliquam reprehenderit, culpa corrupti maxime, porro quo aliquid eum dolorum fugit laborum perspiciatis totam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore numquam, accusantium maxime optio quae aliquid laborum quod voluptas incidunt veritatis esse ullam, dolorum illum doloribus a provident velit minima delectus! Debitis alias placeat quidem voluptatum temporibus adipisci tempore sunt? Quasi quam, dolorem dolor, repudiandae possimus laboriosam accusamus repellat dolores natus placeat nihil officiis sequi quis quaerat voluptas ducimus ut, corporis molestias porro nulla est nam. Dolorum dicta delectus aliquid provident placeat fugit ea voluptatibus, blanditiis autem magnam ab illum.</p>
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
    import Footer from './elfrique-footer.vue'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-footer':Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>