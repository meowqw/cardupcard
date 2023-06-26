import axios from "axios";
import { API_DOMAIN } from '/config.js'

export default {
    // получить карточку
    GET_CARD_FROM_API({ commit }, link) {
        return axios(`${API_DOMAIN}/api/v1/cardLink?link=${link}`, {
            method: "GET",
        })
            .then((card) => {
                commit("SET_CARD_TO_STATE", card.data);
                return card;
            })
            .catch((error) => {
                return error;
            });
    },
}