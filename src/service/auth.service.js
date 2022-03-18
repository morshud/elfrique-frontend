import axios from "axios";
import spHeader from "./super-authHeader";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

class AuthService {
  async login(user) {
    const response = await axios.post(API_URL + "login", {
      email: user.email,
      password: user.password,
    });
    if (response.data.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
          token: response.data.token,
        })
      );
    }
    return response.data;
  }

  async loginSuperAdmin(user) {
    const response = await axios.post(API_URL + "adminLogin", {
      email: user.email,
      password: user.password,
    });
    if (response.data.token) {
      localStorage.setItem(
        "SuperAdmin",
        JSON.stringify({
          token: response.data.token,
        })
      );
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  logoutAdmin() {
    localStorage.removeItem("SuperAdmin");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      phonenumber: user.phonenumber,
      referral_email: user.referral_email,
      confirmpassword: user.confirmpassword,
    });
  }

  verify(email, token) {
    return axios.get(
      API_URL + "verifyemail?email=" + email + "&token=" + token
    );
  }

  getOrganizers() {
    return axios.get(API_URL + "getAllUsers", { headers: spHeader() });
  }
}

export default new AuthService();
