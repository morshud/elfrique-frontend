import axios from "axios";
import authHeader from "./auth-header";

//const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";
const API_URL = "http://localhost:3000/api/v1/";

class SearchService {
  getSearchContent(product, keyword) {
    return axios.get(API_URL + "search/" + product + "?keyword=" + keyword, {
      headers: authHeader(),
    });
  }

  getVendorSearchContent(location, keyword) {
    return axios.get(API_URL + "searchVendor/" + location + "?keyword=" + keyword, {params: {
        location
      }});
  }
}
export default new SearchService();
