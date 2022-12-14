import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.useAttrs(Vuex);

function initialState() {
  return {
    query: {},
  };
}

const state = initialState();

export const actions = {
  validQuery({ commit }, query) {
    commit("setQuery", query);
    return api.postComment(query).then((resp) => {
      commit(resp.data);
    });
  },
};

export const mutations = {
  setQuery(state, query) {
    state.query = query;
  },
};
