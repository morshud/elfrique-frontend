<template>
  <title>
    Trivia Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <section class="voting-content trivia-content">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4">
          <div class="img-area">
            <img :src="trivia.image" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-title-area">
            <h1>{{ trivia.title }}</h1>
            <small
              >Organised by :
              <span
                >{{ trivia.adminuser.profile.firstname }}
                {{ trivia.adminuser.profile.lastname }}</span
              ></small
            >
            <div class="details-header">
              <h5>Price</h5>
              <p><i class="bi bi-credit-card-fill"></i> : {{ trivia.type }}</p>
              <h5>Duration</h5>
              <p><i class="bi bi-alarm"></i> : {{ trivia.duration }} Minutes</p>
            </div>
            <div class="details-social">
              <h5>Share on:</h5>
              <a href="#" title="Share on facebook"
                ><img src="@/assets/images/share-facebook.png"
              /></a>
              <a href="#" title="Share on whatsapp"
                ><img src="@/assets/images/share-whatsapp.png"
              /></a>
              <a href="#" title="Share on telegram"
                ><img src="@/assets/images/share-telegram.png"
              /></a>
              <a href="#" title="Share on instagram"
                ><img src="@/assets/images/share-instagram.png"
              /></a>
              <a href="#" title="Share on twitter"
                ><img src="@/assets/images/share-twitter.png"
              /></a>
              <a href="#" title="Share through email"
                ><img src="@/assets/images/share-email.png"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div  class="col-lg-12 mt-3 quiz-box">
          <form @submit.prevent="submitQuiz">
            <div  class="question mb-4">
              <div v-for="(question, index) in questions" :key="question.id">
              <div v-show="index === questionIndex">
                <h1>{{ question.question }}</h1>
                <div v-for="opt in question.questionOptions" :key="opt.id">
                  <input @change="selectOption(opt)" type="radio" v-bind:name="index" :value="opt"/>
                  <span>{{ opt.option }}</span>
                </div>
              </div>
              </div>
            </div>
            
            <div>
              <button v-if="questionIndex > 0" @click="prev">
                  Previous
                </button>
                <button @click="next">
                  Next
                </button>
              <button style="margin-left: 30px" type="submit">Submit Quiz</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer />
</template>

<script>
import Header from "./elfrique-header.vue";
import Footer from "./elfrique-footer.vue";
import TriviaService from "../service/trivia.service";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      trivia: "",
      loading: false,
      questions: "",
      answer: {
        "playerEmail": this.$store.state.vote.player.email,
        "trivia_answer": []
      },
      questionIndex: 0,
    };
  },
  computed: {
    player() {
      return this.$store.state.vote.player;
    },
  },

  created() {
    TriviaService.getSingleTrivia(this.$route.params.id)
      .then((response) => {
        this.trivia = response.data.trivia;
        this.questions = response.data.trivia.questions;
      })
      .then(() => {
        if (this.player.id == null) {
          this.$router.push("/trivia-content/" + this.trivia.id);
        }
      });
  },
  methods: {
    startQuiz() {
      this.$router.push("/trivia-content-quiz/" + this.trivia.id);
    },
    next() {
      this.questionIndex++;
    },
    // Go to previous question
    prev() {
      this.questionIndex--;
    },
    selectOption(index){
      
      const elementIndex = this.answer.trivia_answer.findIndex((obj => obj.questionId === index.questionId));
      if(elementIndex == -1){
        this.answer.trivia_answer.push({
          questionId: index.questionId, 
          answer: index.option
        })
      }else{
        this.answer.trivia_answer[elementIndex].answer = index.option;
      }
      
    },
    submitQuiz(){
      this.loading = true
      TriviaService.answerTrivia( this.trivia.id, this.answer).then(res => {
        this.loading = false
        console.log(res)
      })
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>