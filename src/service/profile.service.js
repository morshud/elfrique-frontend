import axios from "axios";
import authHeader from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class ProfileService {
  getProfile() {
    return axios.get(API_URL + "getuserProfile", { headers: authHeader() });
  }

  editProfile(profile) {
    return axios.post(API_URL + "edituserProfile", profile, {
      headers: authHeader(),
    });
  }

  changePassword(password) {
    return axios.post(API_URL + "changepassword", password, {
      headers: authHeader(),
    });
  }

  becomeSeller(profile) {
    return axios.post(API_URL + "becomeSeller", profile, {
      headers: authHeader(),
    });
  }
}

export default new ProfileService();
