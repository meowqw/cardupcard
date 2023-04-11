import { createStore } from "vuex";

import apiRequestsCard from "./actions/api-requests-card";
import apiRequestsPortfolio from "./actions/api-requests-portfolio";

import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {
    ...apiRequestsCard,
    ...apiRequestsPortfolio
}

export default createStore({
    state: {
        card: null,
        portfolioList: [],
    },
    mutations,
    actions,
    getters
});