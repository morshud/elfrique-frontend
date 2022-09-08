import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
//const API_URL = "http://localhost:3000/api/v1/";

class EventService {
  createEvent(eventForm) {
    return axios.post(API_URL + "createEvent", eventForm, {
      headers: authHeader(),
    });
  }

  createRef(dataForm) {
    return axios.post(API_URL + "userEventReferral", dataForm, {
      headers: authHeader2(),
    });
  }

  patchEventReferral(dataForm) {
    return axios.patch(API_URL + "userEventReferral", dataForm, {
      headers: authHeader2(),
    });
  }

  deleteEventReferral(id) {
    return axios.delete(API_URL + "userEventReferral/" + id, {
      headers: authHeader2(),
    });
  }
  /* createAward(awardForm) {
    return axios.post(API_URL + "createAward", awardForm, {
      headers: authHeader(),
    });
  } */
  getUserEvents() {
    return axios.get(API_URL + "getAllUserEvents", { headers: authHeader2() });
  }

  getUserEventReferral() {
    return axios.get(API_URL + "userEventReferrals", {
      headers: authHeader2(),
    });
  }

  getEvents() {
    return axios.get(API_URL + "getAllEvents", { headers: authHeader() });
  }

  getContests() {
    return axios.get(API_URL + "getallVote", { headers: authHeader() });
  }

  getSingleEvent(id) {
    return axios.get(API_URL + "getSingleEvent/" + id, {
      headers: authHeader(),
    });
  }

  createTickets(ticketForm, eventId) {
    return axios.post(API_URL + "createTickets/" + eventId, ticketForm, {
      headers: authHeader2(),
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

  allEventsforAdmin() {
    return axios.get(API_URL + "getEvents", { headers: authHeader() });
  }
}

export default new EventService();
