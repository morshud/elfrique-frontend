const initialState = {
  voteContent: {},
  contest: {},
  contestant: {},
  event: {},
  trivia: {},
  player: {},
  country: "",
  paymentForm: {},
};

export const vote = {
  namespaced: true,
  state: initialState,
  actions: {
    getVoteContent({ commit }, voteContent) {
      commit("setVoteContent", voteContent);
    },

    getMessage({ commit }, message) {
      commit("setMessage", message);
    },

    getSingleContest({ commit }, contest) {
      commit("setSingleContest", contest);
    },
    getContestant({ commit }, contestant) {
      commit("setContestant", contestant);
    },

    getSingleEvent({ commit }, event) {
      commit("setSingleEvent", event);
    },
    getSingleTrivia({ commit }, event) {
      commit("setSingleTrivia", event);
    },
    getTriviaPlayer({ commit }, player) {
      commit("setTriviaPlayer", player);
    },
    getEvisaCountry({ commit }, country) {
      commit("setEvisaCountry", country);
    },
    getPaymentForm({ commit }, paymentForm) {
      commit("setPaymentForm", paymentForm);
    },
  },
  mutations: {
    setVoteContent(state, voteContent) {
      state.voteContent = voteContent;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setSingleContest(state, contest) {
      state.contest = contest;
    },
    setContestant(state, contestant) {
      state.contestant = contestant;
    },
    setSingleEvent(state, event) {
      state.event = event;
    },
    setSingleTrivia(state, trivia) {
      state.trivia = trivia;
    },
    setTriviaPlayer(state, player) {
      state.player = player;
    },
    setEvisaCountry(state, country) {
      state.country = country;
    },
    setPaymentForm(state, paymentForm) {
      state.paymentForm = paymentForm;
    },
  },
};
