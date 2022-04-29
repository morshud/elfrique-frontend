import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import spHeader from "./super-authHeader";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

class TransactionService {
  createVote(voteForm) {
    return axios.post(API_URL + "createVote", voteForm, {
      headers: authHeader(),
    });
  }

  submitVote(contestantId, voteForm) {
    return axios.post(API_URL + "vote/" + contestantId, voteForm, {});
  }

  getTransactionHistory() {
    return axios.get(API_URL + "getAllTransactions", {
      headers: authHeader(),
    });
  }
}

export default new TransactionService();
