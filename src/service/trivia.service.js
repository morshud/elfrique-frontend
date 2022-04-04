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

  getAllTrivias() {
    return axios.get(API_URL + "allTrivia", { headers: authHeader() });
  }

  getSingleTrivia(id) {
    return axios.get(API_URL + "getSingleTrivia/" + id, {
      headers: authHeader(),
    });
  }

  createPlayer(playerForm, triviaId) {
    return axios.post(API_URL + "createPlayer/" + triviaId, {
      email: playerForm.email,
      name: playerForm.name,
      phonenumber: playerForm.phonenumber,
      city: playerForm.city,
    });
  }
}

export default new VoteService();
