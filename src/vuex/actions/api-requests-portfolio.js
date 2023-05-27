import axios from "axios";
import { API_DOMAIN } from '/config.js'

export default {
    // получить порфтолио
    GET_PORTFOLIO_FROM_API({ commit }, idCard) {
        return axios(`${API_DOMAIN}/api/v1/portfolioCard?id_card=${idCard}`, {
            method: "GET",
        })
            .then((portfolio) => {
                commit("SET_PORTFOLIO_TO_STATE", portfolio.data);
                return portfolio;
            })
            .catch((error) => {
                return error;
            });
    },
}