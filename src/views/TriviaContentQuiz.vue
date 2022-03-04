<template>
    <title>Trivia Management System | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <section class="voting-content trivia-content">
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
                            <h5>Time</h5>
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

        <div class="container">
            <div class="row">
                <div class="col-lg-12 mt-3 quiz-box">
                    <form>
                        <div class="question mb-4">
                            <h1>1. Which of the group do you think will win the next weekend games?</h1>
                            <div>
                                <input type="radio" name="quiz1" value="group a"> <span>Group A</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz1" value="group b"> <span>Group B</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz1" value="group c"> <span>Group C</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz1" value="group d"> <span>Group D</span>
                            </div>
                        </div>
                        <div class="question  mb-4">
                            <h1>2. Which of the group do you think will win the next weekend games?</h1>
                            <div>
                                <input type="radio" name="quiz2" value="group a"> <span>Group A</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz2" value="group b"> <span>Group B</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz2" value="group c"> <span>Group C</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz2" value="group d"> <span>Group D</span>
                            </div>
                        </div>
                        <div class="question  mb-4">
                            <h1>3. Which of the group do you think will win the next weekend games?</h1>
                            <div>
                                <input type="radio" name="quiz3" value="group a"> <span>Group A</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz3" value="group b"> <span>Group B</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz3" value="group c"> <span>Group C</span>
                            </div>
                            <div>
                                <input type="radio" name="quiz3" value="group d"> <span>Group D</span>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Submit Quiz</button>
                        </div>
                    </form>
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