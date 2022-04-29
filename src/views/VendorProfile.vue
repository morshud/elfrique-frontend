<template>
    <title>Event Vendor Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <div class="container header-cont voting-content detailsHead vendorProfile">
        <div class="row">
            <div class="col-md-4">
                <div class="img-area">
                    <img src="../assets/images/vendor-profile.jpg" ondragstart="return false;">
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-7">
                <div class="text-title-area">
                    <h1>Chukka Uzo</h1>
                    <div class="details-header">
                        <p><i class="bi bi-briefcase"></i> : 20 Jobs Completed</p>
                        <p><i class="bi bi-card-checklist"></i> : 7 Reviews</p>
                        <p><i class="bi bi-star"></i> : 5 <i class="fa fa-star"></i></p>
                        <p><i class="bi bi-envelope-open"></i> : myemail@email.com</p>
                        <p><i class="bi bi-telephone"></i> : 08012345678, 08112345678</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container contentDetailsVendor vendorProfileDetails">
            <div class="row">
                <div class="col-lg-8">
                    <div class="detailsVendor">
                        <ul class="nav nav-pills mb-4 mt-2" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active tabs-button" id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="true"> About Vendor</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tabs-button" id="pills-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-gallery" type="button" role="tab" aria-controls="pills-gallery" aria-selected="false"> Gallery</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tabs-button" id="pills-review-tab" data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab" aria-controls="pills-review" aria-selected="false"> Reviews</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <!--About Vendor-->
                            <div class="tab-pane fade show active" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">
                                <h3>About Me</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod est assumenda molestiae sapiente accusamus? Sed tempore soluta exercitationem voluptatibus reprehenderit fuga nihil. Ipsum dolores soluta deserunt asperiores. Rerum fugit mollitia veniam autem aperiam ratione eveniet! Blanditiis minima odio sit doloribus, harum dignissimos totam facere voluptatem! Minus voluptatibus aspernatur perferendis dignissimos in illo velit eum doloremque accusantium at ducimus nesciunt neque nemo autem nostrum, harum maiores aperiam quo alias tenetur mollitia deleniti. Consectetur neque impedit ad quo minus, doloribus nesciunt eligendi? Sint atque possimus natus aut a quis saepe, aspernatur maxime vero dicta explicabo adipisci. Labore sunt tempora iure placeat dolor!</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam!</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quod voluptatum id</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam!</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quod voluptatum id</li>
                                </ul>
                            </div>
                            <!--Gallery-->
                            <div class="tab-pane fade" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab">
                                <section class="gallery-section">
                                    <div class="container gallery-container">
                                        <div id="projects">
                                            <ul id="gallery" class="myimgdivtoggle">
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/gallery1.jpg">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/gallery11.jpg">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/gallery111.jpg">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/gallery1111.jpg">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/gallery11111.jpeg">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- modal gallery -->
                                        <div class="gallery">
                                            <a class="close" href="#">
                                                <i>
                                                <span class="bar"></span>
                                                <span class="bar"></span>
                                                </i>
                                            </a>
                                            <img src="">
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <!--Reviews-->
                            <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                                <div class="row justify-content-center mt-4">
                                <div class="col-md-5 text-center">
                                    <div class="overallRated">
                                        <h1>5<span> out of 5</span></h1>
                                        <p class="star">
                                            <span><i class="fa fa-star rated"></i></span>
                                            <span><i class="fa fa-star rated"></i></span>
                                            <span><i class="fa fa-star rated"></i></span>
                                            <span><i class="fa fa-star rated"></i></span>
                                            <span><i class="fa fa-star rated"></i></span>
                                        </p>
                                        <p class="ratingText">7 reviews</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="progressDiv">
                                        <div class="starNumber">
                                            <p>5 stars</p>
                                        </div>
                                        <div class="starProgress">
                                            <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuemax="100">1 rating</div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="progressDiv">
                                        <div class="starNumber">
                                            <p>4 stars</p>
                                        </div>
                                        <div class="starProgress">
                                            <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuemax="100">1 rating</div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="progressDiv">
                                        <div class="starNumber">
                                            <p>3 stars</p>
                                        </div>
                                        <div class="starProgress">
                                            <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuemax="100">0 rating</div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="progressDiv">
                                        <div class="starNumber">
                                            <p>2 stars</p>
                                        </div>
                                        <div class="starProgress">
                                            <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuemax="100">1 rating</div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="progressDiv">
                                        <div class="starNumber">
                                            <p>1 star</p>
                                        </div>
                                        <div class="starProgress">
                                            <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuemax="100">0 rating</div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="reviews">
                                        <h1>Reviews (7)</h1>
                                        <div class="box">
                                            <h4>Simon Isaac</h4>
                                            <p class="star">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                            </p>
                                            <p class="time">3 hours ago</p>
                                            <p class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et quae qui saepe a. In, inventore beatae. Fuga, perspiciatis iste!</p>
                                        </div>
                                        <div class="box">
                                            <h4>Susan Adebimpe</h4>
                                            <p class="star">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                            </p>
                                            <p class="time">20 hours ago</p>
                                            <p class="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cupiditate porro quaerat esse dolorem optio.</p>
                                        </div>
                                        <div class="box">
                                            <h4>Susan Adebimpe</h4>
                                            <p class="star">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                            </p>
                                            <p class="time">1 day ago</p>
                                            <p class="comment">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div class="box">
                                            <h4>Simon Isaac</h4>
                                            <p class="star">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                            </p>
                                            <p class="time">3 hours ago</p>
                                            <p class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et quae qui saepe a. In, inventore beatae. Fuga, perspiciatis iste!</p>
                                        </div>
                                        <div class="box">
                                            <h4>Susan Adebimpe</h4>
                                            <p class="star">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                            </p>
                                            <p class="time">20 hours ago</p>
                                            <p class="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cupiditate porro quaerat esse dolorem optio.</p>
                                        </div>
                                        <div class="box">
                                            <h4>Susan Adebimpe</h4>
                                            <p class="star">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                            </p>
                                            <p class="time">1 day ago</p>
                                            <p class="comment">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div class="box">
                                            <h4>Susan Adebimpe</h4>
                                            <p class="star">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                            </p>
                                            <p class="time">20 hours ago</p>
                                            <p class="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cupiditate porro quaerat esse dolorem optio.</p>
                                        </div>
                                        <div class="boxBtn text-center">
                                            <a href="#" class="loadMoreBtn" id="loadMore">Load More Comments</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 contentDetailsVendor">
                    <form class="formVendor">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>Message Vendor</h1>
                                <div class="lineHr"></div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Name</label>
                                <input type="text" class="input">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Email address</label>
                                <input type="email" class="input">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Phone number</label>
                                <input type="tel" class="input">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Subject</label>
                                <input type="text" class="input">
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Additional info</label>
                                <div class='textarea' contenteditable></div>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit" class="button">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Newsletter from './elfrique-newsletter.vue'
    import Footer from './elfrique-footer.vue'
    import $ from "jquery"
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-newsletter':Newsletter,
      'elfrique-footer':Footer,
      },
      mounted(){
        window.scrollTo(0,0)

        $(document).ready(function(){
            $(".box").slice(0, 3).show();
            $("#loadMore").on("click", function(e){
                e.preventDefault();
                $(".box:hidden").slice(0, 2).slideDown();
                if($(".box:hidden").length == 0) {
                $("#loadMore").text("No Comment").addClass("noContent");
                }
            });
        })


        //Gallery
        $(document).ready(function(){
            // filter
            $('.nav-gallery a').on('click', function(event){
                event.preventDefault();
                // current class
                $('.nav-gallery li.current').removeClass('current');
                $(this).parent().addClass('current');

                // set new heading
                $('h1.heading').text($(this).text());
                
                // filter link text
                var category = $(this).text().toLowerCase().replace(' ', '-');
                
                // remove hidden class if "all" is selected
                if(category == null){
                    $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
                } else {
                    $('ul#gallery li').each(function(){
                    if(!$(this).hasClass(category)){
                        $(this).hide().addClass('hidden');
                    } else {
                        $(this).fadeIn('slow').removeClass('hidden');
                    }
                    });
                }
                return false;        
            });
            // lightbox
            $('ul#gallery a').on('click', function(event){
                event.preventDefault();
                var link = $(this).find('img').attr('src');
                $('.gallery img').attr('src', '');
                $('.gallery img').attr('src', link);
                $('.gallery').fadeIn('slow');
            });
            // close lightbox
            $('.gallery').on('click', function(event){
                event.preventDefault();
                $('.gallery').fadeOut('slow');
            });
        });

            $(document).ready(function(){
            $('.togglebtn').click(function(){
                $('.myimgdivtoggle').toggle();
            });
            });
      }
    }
</script>