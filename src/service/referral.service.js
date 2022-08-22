import axios from "axios";
import authHeader from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class ReferralService {
  getReferral() {
    return axios.get(API_URL + "getUserRef", { headers: authHeader() });
  }
}
export default new ReferralService();
