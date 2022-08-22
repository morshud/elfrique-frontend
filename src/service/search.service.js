import axios from "axios";
import authHeader from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
//const API_URL = "http://localhost:3000/api/v1/";

class SearchService {
  getSearchContent(product, keyword) {
    return axios.get(API_URL + "search/" + product + "?keyword=" + keyword, {
      headers: authHeader(),
    });
  }

  getVendorSearchContent(location, keyword) {
    return axios.get(
      API_URL + "searchVendor/" + location + "?keyword=" + keyword,
      {
        params: {
          location,
        },
      }
    );
  }
}
export default new SearchService();
