const state = {
    user: JSON.parse(window.localStorage.getItem("user")) ? window.localStorage.getItem("user") : null,

}

const mutations = {
    SET_User: (state, value) => {
        state.user = value
    },

}

const actions = {
    setAccount({ commit }, data) {
        commit('SET_User', data);
    },

}

export default {
    state,
    mutations,
    actions
}