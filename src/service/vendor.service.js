import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

class VendorService {
  getEvents() {
    return axios.get(API_URL + "getAllEvents", { headers: authHeader() });
  }

  getAllJobs() {
    return axios.get(API_URL + "getAllJob", { headers: authHeader() });
  }

  getSingleJob(jobId) {
    return axios.get(API_URL + "getJob/" + jobId, { headers: authHeader() });
  }

  getAllUrls() {
    return axios.get(API_URL + "url/getallUrl", { headers: authHeader() });
  }

  getUserAds() {
    return axios.get(API_URL + "getUserAds", { headers: authHeader() });
  }

  getAllAds() {
    return axios.get(API_URL + "getAllAds", { headers: authHeader() });
  }

  createUrl(urlForm) {
    return axios.post(
      "https://elfrique-proj.herokuapp.com/api/v1/url/shorten",
      urlForm,
      {
        headers: authHeader2(),
      }
    );
  }

  createJobs(jobForm, eventId) {
    return axios.post(API_URL + "createjob/" + eventId, jobForm, {
      headers: authHeader(),
    });
  }

  createAdvert(advertForm) {
    return axios.post(API_URL + "createAds", advertForm, {
      headers: authHeader(),
    });
  }

  createProposal(jobForm, eventId) {
    return axios.post(API_URL + "createProposal/" + eventId, jobForm, {
      headers: authHeader(),
    });
  }

  getCategories(contestId) {
    return axios.get(API_URL + "getallCategories/" + contestId, {
      headers: authHeader(),
    });
  }

  addsponsor(sponsorForm, contestId) {
    return axios.post(API_URL + "addSponsor/" + contestId, sponsorForm, {
      headers: authHeader(),
    });
  }

  addInfo(infoForm, contestId) {
    return axios.post(API_URL + "addInfo/" + contestId, infoForm, {
      headers: authHeader2(),
    });
  }

  addCategory(categoryForm, contestId) {
    return axios.post(API_URL + "createCategories/" + contestId, categoryForm, {
      headers: authHeader2(),
    });
  }

  addNominees(nomineeForm, contestName, categoryId) {
    return axios.post(
      API_URL + "createNominees/" + contestName + "/" + categoryId,
      nomineeForm,
      {
        headers: authHeader(),
      }
    );
  }

  allEvents() {
    return axios.get(API_URL + "allEvents", { headers: authHeader() });
  }
}

export default new VendorService();
