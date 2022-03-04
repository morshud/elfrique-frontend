<template>
    <title>Event Form Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <section class="voting-content">
        <div class="container header-cont">
            <div class="row">
                <div class="col-md-4">
                    <div class="img-area">
                        <img src="@/assets/images/event-form-img.jpg">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-title-area">
                        <h1>The Contest TV Reality Show</h1>
                        <small>Organised by : <span>Organiser Name Here</span></small>
                        <div class="details-header">
                            <h5>Start</h5>
                            <p><i class="bi bi-calendar3"></i> : Thursday 27 Jan, 2022</p>
                            <p><i class="bi bi-alarm"></i> : 00:01</p>
                            <h5>End</h5>
                            <p><i class="bi bi-calendar3"></i> : Sunday 27 Feb, 2022</p>
                            <p><i class="bi bi-alarm"></i> : 23:99</p>
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
                <div class="col-md-2 justify-content-center text-center">
                    <div class="counter-div">
                        <div class="icon">
                            <i class="bi bi-alarm-fill"></i>
                        </div>
                        <div class="boxes days">
                            <span class="title">Days</span> <br>
                            <span>20</span>
                        </div>
                        <div class="boxes hours">
                            <span class="title">Hours</span> <br>
                            <span>2</span>
                        </div>
                        <div class="boxes minutes">
                            <span class="title">Min</span> <br>
                            <span>50</span>
                        </div>
                        <div class="boxes seconds">
                            <span class="title">Sec</span> <br>
                            <span>45</span>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container event-form-content mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-pills mb-5 mt-2" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active tabs-button" id="pills-form-tab" data-bs-toggle="pill" data-bs-target="#pills-form" type="button" role="tab" aria-controls="pills-form" aria-selected="true"><i class="bi bi-people-fill"></i> Forms</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-organ-tab" data-bs-toggle="pill" data-bs-target="#pills-organ" type="button" role="tab" aria-controls="pills-organ" aria-selected="false"><i class="fas fa-tv"></i> Organisers</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <!--Forms-->
                        <div class="tab-pane fade show active" id="pills-form" role="tabpanel" aria-labelledby="pills-form-tab">
                            <div class="event-details">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h1>Event Details</h1>
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae ipsam incidunt suscipit itaque saepe delectus tempora tenetur esse animi voluptas at debitis, aperiam placeat excepturi voluptate maxime ullam eos quas molestiae. Omnis dolorem nihil error molestiae beatae, consectetur ab eum nostrum autem, voluptas provident velit ea recusandae odit eveniet.</h6>
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h1>Register</h1>
                                                    <p class="amount"><i class="bi bi-credit-card-fill"></i> : Free</p>
                                                    <h6>Enter the following details to continue</h6>
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
                                                    <label>First name</label>
                                                    <input class="input" type="text" placeholder="Enter first name">
                                                </div>
                                                <div class="col-lg-6 mb-3">
                                                    <label>Last name</label>
                                                    <input class="input" type="text" placeholder="Enter last name">
                                                </div>
                                                <div class="col-lg-6 mb-3">
                                                    <label>date of Birth</label>
                                                    <input class="input" type="date">
                                                </div>
                                                <div class="col-lg-6 mb-3">
                                                    <label>Gender</label>
                                                    <select class="input">
                                                        <option value="choose" hidden>Choose Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6 mb-3">
                                                    <label>Upload Your Photo</label>
                                                    <input class="input" type="file" accept=".jpg, .jpeg, .png, .jfif">
                                                </div>
                                                <div class="col-lg-6 mb-3">
                                                    <label>State of Origin</label>
                                                    <input class="input" type="text" placeholder="Enter state">
                                                </div>
                                                <div class="col-lg-12 mb-3">
                                                    <label>Residential Address</label>
                                                    <textarea class="input" cols="30" rows="4" placeholder="Enter residential address"></textarea>
                                                </div>
                                                <div class="col-lg-12 text-center">
                                                    <button type="submit">Proceed</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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