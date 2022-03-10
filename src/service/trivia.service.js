import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

class VoteService {
  createTrivia(TriviaForm) {
    return axios.post(API_URL + "createTrivia", TriviaForm, {
      headers: authHeader(),
    });
  }

  getTrivias() {
    return axios.get(API_URL + "getAllTrivia", { headers: authHeader() });
  }

  addQuestion(questionForm, triviaId) {
    return axios.post(API_URL + "addQuestion/" + triviaId, questionForm, {
      headers: authHeader(),
    });
  }

  getAllContests() {
    return axios.get(API_URL + "allVoteContest", { headers: authHeader() });
  }
}

export default new VoteService();
