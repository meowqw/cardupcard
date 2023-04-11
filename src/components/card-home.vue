<template>
  <cardAppearanceClassicHome :card="card" :socials="socials"></cardAppearanceClassicHome>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

import cardAppearanceClassicHome from "./appearance/classic/card-appearance-classic-home.vue";

export default {
  name: "card-home",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      card: {},
      socials: {},
    }
  },
  components: {
    cardAppearanceClassicHome
  },
  methods: {
    ...mapActions(["GET_CARD_FROM_API"]),

    // добавляем социалки которые не none
    setSocials(socials) {
      if (socials) {
        for (let social in socials) {
          if (socials[social]) {
            this.socials[social] = socials[social]
          }
        }
        delete this.socials.date_create;
        delete this.socials.date_update;
        delete this.socials.id;

      }
    },
    goToPage(link) {
      this.$router.push('/'+ this.$route.params.cardLink + link);
    }
  },
  computed: {
    ...mapGetters(["CARD"]),
  },
  created() {

    // подружаем информациб о карточке
    this.GET_CARD_FROM_API(this.$route.params.cardLink).then(() => {
      
      this.card = this.CARD[0];

      this.setSocials(this.card.id_social);
      
    });
  },
};
</script>

<style scoped>
</style>