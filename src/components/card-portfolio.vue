<template>
  <body :class="'page__body '+ bg">
    <div class="site-container">
      <main class="main">
        <section :class="'portfolio portfolio-'+classStyle">
          <div class="portfolio__container container">
            <div class="portfolio__content" data-aos="zoom-in">
              <h1 class="portfolio__title">Портфолио {{ CARD[0].name }}</h1>
              <ul class="list-reset portfolio__list">
                <!-- item -->
                <li v-for="portfolio in PORTFOLIO" :key="portfolio.id" class="portfolio__item portfolio-item">
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
                    <div class="portfolio-item__date">{{ formattedDate(portfolio.date) }}</div>
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
import { mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";
import moment from 'moment';

export default {
  name: "card-portfolio",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      bg: '',
      classStyle: ''
    };
  },
  components: {},

  methods: {

    formattedDate(date) {
      // Получить дату и отформатировать ее
      return moment(date).format('DD.MM.YYYY');
    },

    setStyles() {
      // фдап стиль имеет исключении в бг потому добавлено условие
      if (this.CARD[0].id_appearance.name == "flup") {
        this.bg = "bg-alto";
      }
      // берем стиль карточки
      this.classStyle = this.CARD[0].id_appearance.name;
    },

    goToPage(link) {
      this.$router.push("/" + this.$route.params.cardLink + link);
    },
  },
  computed: {
    ...mapGetters(["CARD", "PORTFOLIO"]),
  },
  created() {
    this.setStyles(this.CARD[0]);
  },
};
</script>

<style scoped>
</style>