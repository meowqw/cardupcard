import { createStore } from "vuex";

import apiRequestsCard from "./actions/api-requests-card";
import apiRequestsPortfolio from "./actions/api-requests-portfolio";
import commonActions from "./actions/actions";

import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {
    ...apiRequestsCard,
    ...apiRequestsPortfolio,
    ...commonActions
}

export default createStore({
    state: {
        card: null,
        portfolioList: [],
        company: null,
    },
    mutations,
    actions,
    getters
});