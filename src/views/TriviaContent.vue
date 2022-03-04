<template>
    <title>Trivia Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <section class="voting-content">
        <div class="container header-cont">
            <div class="row">
                <div class="col-md-4">
                    <div class="img-area">
                        <img src="@/assets/images/trivia-listimg.jpg">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-title-area">
                        <h1>Testing for Wipe Out Naija</h1>
                        <small>Organised by : <span>Organiser Name Here</span></small>
                        <div class="details-header">
                            <h5>Price</h5>
                            <p><i class="bi bi-credit-card-fill"></i> : Free</p>
                            <h5>Duration</h5>
                            <p><i class="bi bi-alarm"></i> : 3 Minutes</p>
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

        <div class="container event-form-content mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-pills mb-5 mt-2" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active tabs-button" id="pills-trivia-tab" data-bs-toggle="pill" data-bs-target="#pills-trivia" type="button" role="tab" aria-controls="pills-trivia" aria-selected="true"><i class="bi bi-people-fill"></i> Trivia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-organ-tab" data-bs-toggle="pill" data-bs-target="#pills-organ" type="button" role="tab" aria-controls="pills-organ" aria-selected="false"><i class="fas fa-tv"></i> Organisers</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <!--Trivia-->
                        <div class="tab-pane fade show active" id="pills-trivia" role="tabpanel" aria-labelledby="pills-trivia-tab">
                            <div class="event-details">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h1>Event Details</h1>
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae ipsam incidunt suscipit itaque saepe delectus tempora tenetur esse animi voluptas at debitis, aperiam placeat excepturi voluptate maxime ullam eos quas molestiae. Omnis dolorem nihil error molestiae beatae, consectetur ab eum nostrum autem, voluptas provident velit ea recusandae odit eveniet.</h6>
                                        <h1 class="mt-5">Instructions</h1>
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae ipsam incidunt suscipit itaque saepe delectus tempora tenetur esse ani.</h6>
                                    </div>
                                    <form>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <h1>Get Trivia</h1>
                                                <h6>Enter the following details to access trivia question</h6>
                                            </div>
                                            <div class="col-lg-6 mb-3">
                                                <label>Email address</label>
                                                <input class="input" type="email" placeholder="Enter email address">
                                            </div>
                                            <div class="col-lg-6 mb-3">
                                                <label>Phone number</label>
                                                <input class="input" type="tel" placeholder="Enter phone number">
                                            </div>
                                            <div class="col-lg-6 mb-3">
                                                <label>Name</label>
                                                <input class="input" type="text" placeholder="Enter your name">
                                            </div>
                                            <div class="col-lg-6 mb-3">
                                                <label>City</label>
                                                <input class="input" type="text" placeholder="Enter your city">
                                            </div>
                                            <div class="col-lg-12 text-center">
                                                    <button type="submit">Continue</button>
                                                </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!--Organiser-->
                        <div class="tab-pane fade" id="pills-organ" role="tabpanel" aria-labelledby="pills-organ-tab">
                            <div class="container organiser-area">
                                <div class="row justify-content-center px-2">
                                    <div class="col-lg-12">
                                        <h1>Oragniser Details</h1>
                                        <h4>Name</h4>
                                        <p>Organiser Name Here</p>
                                        <h4>Email</h4>
                                        <p>organiseremailhere@email.com</p>
                                        <h4>Phone Number</h4>
                                        <p>08062632031</p>
                                        <h4>About</h4>
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id alias modi suscipit doloribus cum debitis in explicabo, ex impedit sit quia, nisi, enim assumenda accusamus? Assumenda maxime suscipit fuga facere cum ut sunt porro optio ipsum iure sint, eveniet nesciunt accusantium necessitatibus ratione soluta quia molestiae. Esse itaque ex doloremque.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
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