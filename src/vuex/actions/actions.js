export default {
    SET_COMPANY({ commit }, company) {
        commit("SET_COMPANY_TO_STATE", company);
    },

    SET_ONE({ commit }, one) {
        commit("SET_ONE_TO_STATE", one);
    }
}