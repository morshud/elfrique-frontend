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
                <div class="col-lg-12 instructions">
                    <h1>Testing for Wipe Out Naija - Trivia</h1>
                    <p>(USERNAME HERE) thank you for showing interest in participating in (TRIVIA TITLE HERE).</p>
                    <p>Please before you start, take your time to go through the instruction(s) below. Your time starts as soon as you click the start button, so please ensure that you are ready to take it befor you click.</p>
                    <h1 class="mt-4">Instruction(s)</h1>
                    <p>Users are to select the correct answers to the questions. </p>
                    <form>
                        <button type="button">Start Quiz</button>
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