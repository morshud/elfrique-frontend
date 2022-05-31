import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";
//const API_URL = "http://localhost:3000/api/v1/";

class GetDashboard {
  getDashboard(id) {
    return axios.get(API_URL + "getDashboard", {
      params: {
      id
    }});
  }
}


export default new GetDashboard();