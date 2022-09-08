import axios from "axios";
import authHeader from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
//const API_URL = "http://localhost:3000/api/v1/";

class GetDashboard {
  getDashboard(id) {
    return axios.get(API_URL + "getDashboard", {
      params: {
        id,
      },
    });
  }
}

export default new GetDashboard();
