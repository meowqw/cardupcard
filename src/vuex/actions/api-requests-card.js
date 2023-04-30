import axios from "axios";
import { API_DOMAIN } from '/config.js'

export default {
    // получить карточку
    GET_CARD_FROM_API({ commit }, link) {
        return axios(`${API_DOMAIN}/api/v1/cardLink/?link=${link}&token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
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