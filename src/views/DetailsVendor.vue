<template>
    <title>Event Vendor Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!--Service Header-->
    <section class="service-header detailsVendorHeader">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-11 text-center">
                    <h1>DJ Services Needed</h1>
                </div>
            </div>
        </div>
    </section>
    <!--Service Header Ends-->

    <div class="container header-cont voting-content detailsHead">
        <div class="row">
            <div class="col-md-5">
                <div class="img-area">
                    <img src="@/assets/images/vendor-dj.png" ondragstart="return false;">
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="text-title-area">
                    <h1>DJ Services Needed</h1>
                    <div class="details-header">
                        <p><i class="bi bi-archive"></i> : Wedding Ceremony</p>
                        <p><i class="bi bi-calendar3"></i> : Mar 4, 2022 | 9:00 AM</p>
                        <p><i class="bi bi-geo-alt"></i> : The Charis Events Center | Ikeja, LA</p>
                        <p class="bidPrice"><i class="bi bi-cash-coin"></i> : Starts at $30,000</p>
                    </div>
                    <div class="details-social">
                        <h5>Share on:</h5>
                        <a href="#" title="Share on facebook"><img src="@/assets/images/share-facebook.png"></a>
                        <a href="#" title="Share on whatsapp"><img src="@/assets/images/share-whatsapp.png"></a>
                        <a href="#" title="Share on telegram"><img src="@/assets/images/share-telegram.png"></a>
                        <a href="#" title="Share on instagram"><img src="@/assets/images/share-instagram.png"></a>
                        <a href="#" title="Share on twitter"><img src="@/assets/images/share-twitter.png"></a>
                        <a href="#" title="Share through email"><img src="@/assets/images/share-email.png"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container contentDetailsVendor">
            <div class="row">
                <div class="col-lg-7">
                    <div class="detailsVendor">
                        <ul class="nav nav-pills mb-4 mt-2" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active tabs-button" id="pills-des-tab" data-bs-toggle="pill" data-bs-target="#pills-des" type="button" role="tab" aria-controls="pills-des" aria-selected="true"> Job Description</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tabs-button" id="pills-photo-tab" data-bs-toggle="pill" data-bs-target="#pills-photo" type="button" role="tab" aria-controls="pills-photo" aria-selected="false"> Photos</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <!--Job Description-->
                            <div class="tab-pane fade show active" id="pills-des" role="tabpanel" aria-labelledby="pills-des-tab">
                                <h3>Description</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam!</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quod voluptatum id</li>
                                </ul>
                            </div>
                            <!--Photos-->
                            <div class="tab-pane fade" id="pills-photo" role="tabpanel" aria-labelledby="pills-photo-tab">
                                <section class="gallery-section">
                                    <div class="container gallery-container">
                                        <div id="projects">
                                            <ul id="gallery" class="myimgdivtoggle">
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/vendor-dj.png">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/vendor-dj.png">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/vendor-dj.png">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/vendor-dj.png">
                                                    </a>
                                                </li>
                                                <li class="gallery1">
                                                    <a href="#">
                                                        <img src="../assets/images/vendor-dj.png">
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
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <form class="formVendor">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>Bid For Job</h1>
                                <div class="lineHr"></div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>First name</label>
                                <input type="text" class="input">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Last name</label>
                                <input type="text" class="input">
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Email address</label>
                                <input type="email" class="input">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Phone number</label>
                                <input type="tel" class="input">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Bid amount (NGN)</label>
                                <input type="text" class="input">
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Additional info</label>
                                <div class='textarea' contenteditable></div>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit" class="button">Submit Bid</button>
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