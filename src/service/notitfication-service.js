import axios from "axios";
import { _API_URL } from "../configs";

const API_URL = _API_URL;

class Notification {
  addNotification(notificationData) {
    return axios.post(API_URL + "addNotification", notificationData);
  }

  findUserNotification(data) {
    return axios.get(API_URL + "findUserNotification", {
      params: {
        data,
      },
    });
  }

  deleteNotification(noticeId, notificationId) {
    return axios.delete(
      API_URL + "deleteNotification/" + noticeId,
      notificationId
    );
  }

  deleteAllNotification(noticeId, notificationId) {
    return axios.delete(
      API_URL + "deleteAllNotification/" + noticeId,
      notificationId
    );
  }
}

export default new Notification();
