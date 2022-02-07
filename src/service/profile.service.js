import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

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
}

export default new ProfileService();
