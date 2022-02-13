const initialState = {
  voteContent: {},
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
  },
  mutations: {
    setVoteContent(state, voteContent) {
      state.voteContent = voteContent;
    },
    setMessage(state, message) {
      state.message = message;
    },
  },
};
