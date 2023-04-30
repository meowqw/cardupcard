export default {
    // card
    SET_CARD_TO_STATE: (state, card) => {
      state.card = card;
    },
     // portfolio
     SET_PORTFOLIO_TO_STATE: (state, portfolioList) => {
      state.portfolioList = portfolioList;
    },

    SET_COMPANY_TO_STATE: (state, company)  => {
      state.company = company;
    },
}