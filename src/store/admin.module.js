import AuthService from "../service/auth.service";

const SuperAdmin = JSON.parse(localStorage.getItem("user"));
const initialState =
  SuperAdmin && SuperAdmin.role === "admin"
    ? { status: { loggedIn: true }, SuperAdmin }
    : { status: { loggedIn: false }, SuperAdmin: null };

export const admin = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.loginSuperAdmin(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logoutAdmin();
      commit("logout");
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.SuperAdmin = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.SuperAdmin = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
};
