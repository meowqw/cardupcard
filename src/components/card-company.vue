<template>
  <cardAppearanceClassicCompany :socials="socials" :company="company"></cardAppearanceClassicCompany>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

import cardAppearanceClassicCompany from "./appearance/classic/card-appearance-classic-company.vue";


export default {
  name: "card-company",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      company: [],
      socials: {},
    };
  },
  components: {
    cardAppearanceClassicCompany,
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
      
      // получаем ифнормацию о комании
      this.company = this.CARD[0].id_company_info;

      this.setSocials(this.company.id_social);
      
    });
  },
};
</script>