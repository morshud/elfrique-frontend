import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

class SearchService {
  getSearchContent(product, keyword) {
    return axios.get(API_URL + "search/" + product + "?keyword=" + keyword, {
      headers: authHeader(),
    });
  }
}
export default new SearchService();
