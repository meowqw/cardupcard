<template>
  <cardAppearanceClassicPortfolio
    :card="card"
    :portfolioList="portfolioList"
  ></cardAppearanceClassicPortfolio>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

import cardAppearanceClassicPortfolio from "./appearance/classic/card-appearance-classic-portfolio.vue";

export default {
  name: "card-portfolio",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      portfolioList: [],
      card: {},
    };
  },
  components: {
    cardAppearanceClassicPortfolio,
  },
  methods: {
    ...mapActions(["GET_CARD_FROM_API", "GET_PORTFOLIO_FROM_API"]),

    goToPage(link) {
      this.$router.push("/" + this.$route.params.cardLink + link);
    },
  },
  computed: {
    ...mapGetters(["CARD", "PORTFOLIO"]),
  },
  created() {
    // подружаем информациб о карточке
    this.GET_CARD_FROM_API(this.$route.params.cardLink).then(() => {
      this.card = this.CARD[0];

      // получаем элементы порфолио
      this.GET_PORTFOLIO_FROM_API(this.card.id).then(() => {
        this.portfolioList = this.PORTFOLIO;
      });
    });
  },
};
</script>

<style scoped>
</style>