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

  addCategory(categoryForm, contestId) {
    return axios.post(API_URL + "createCategories/" + contestId, categoryForm, {
      headers: authHeader2(),
    });
  }

  getAllContests() {
    return axios.get(API_URL + "allVoteContest", { headers: authHeader() });
  }
}

export default new VoteService();
