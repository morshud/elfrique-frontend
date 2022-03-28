import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

class ReferralService {
  getReferral() {
    return axios.get(API_URL + "getUserRef", { headers: authHeader() });
  }
}
export default new ReferralService();
