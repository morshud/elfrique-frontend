import axios from "axios";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";


class Notification {
  addNotification(notificationData) {
    return axios.post(API_URL + "addNotification", notificationData)
  }

  findUserNotification(data) {
    return axios.get(API_URL + "findUserNotification", {
      params: {
        data
      }
    })
  }

  deleteNotification(noticeId, notificationId) {
    return axios.delete(API_URL + "deleteNotification/" + noticeId, notificationId)
  }

  deleteAllNotification(noticeId, notificationId) {
    return axios.delete(API_URL + "deleteAllNotification/" + noticeId, notificationId)
  }
}

export default new Notification()