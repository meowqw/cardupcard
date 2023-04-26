<template>
  <body :class="'page__body '+ bg">
    <div class="site-container">
      <main class="main">
        <section :class="'portfolio portfolio-'+classStyle">
          <div class="portfolio__container container">
            <div class="portfolio__content" data-aos="zoom-in">
              <h1 class="portfolio__title">Портфолио {{ card.name }}</h1>
              <ul class="list-reset portfolio__list">
                <!-- item -->
                <li v-for="portfolio in portfolioList" :key="portfolio.id" class="portfolio__item portfolio-item">
                  <div class="portfolio-item__img">
                    <picture>
                      <source :srcset="portfolio.img" type="image/avif" />
                      <source :srcset="portfolio.img" type="image/webp" />
                      <img
                        loading="lazy"
                        :src="portfolio.img"
                        class="image"
                        width="290"
                        height="290"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div class="portfolio-item__info">
                    <h2 class="portfolio-item__title">{{ portfolio.name }}</h2>
                    <div class="portfolio-item__date">{{portfolio.date.split('T')[0].replaceAll('-', '.') }}</div>
                    <p class="portfolio-item__descr">
                      {{portfolio.description }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="portfolio__bottom portfolio-bottom">
              <ul class="list-reset portfolio-bottom__list">
                <li class="portfolio-bottom__item">
                  <button
                    class="btn-reset btn home-btns__btn"
                    @click="goToPage('')"
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                    <span>Назад</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  </body>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

export default {
  name: "card-portfolio",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      portfolioList: [],
      card: {},
      bg: '',
      classStyle: ''
    };
  },
  components: {},
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

      if (this.card.id_appearance.name == 'flup') {
        this.bg = 'bg-alto'
      }
      this.classStyle = this.card.id_appearance.name;

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