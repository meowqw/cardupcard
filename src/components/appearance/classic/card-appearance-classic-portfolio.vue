<template>
  <div>
    <body class="page__body page__body--ubuntu bg-light">
      <div class="site-container">
        <main class="main">
          <section class="portfolio color-dark">
            <div class="portfolio__container container">
              <div
                class="portfolio__content portfolio__content--p-20 bg-light shadow-med home__top--br-dark-10"
                data-aos="zoom-in"
              >
                <h1
                  class="portfolio__title section-title fz-32 fw-400 color-dark uppercase"
                >
                  Портфолио {{ card.name }} {{ card.surname }}
                </h1>
                <ul class="list-reset portfolio__list">
                  <!-- item -->
                  <li v-for="portfolio in portfolioList" :key="portfolio.id"
                    class="portfolio__item portfolio-item portfolio-item--p-15 bg-light portfolio-item--border-dark-bottom"
                  >
                    <div class="portfolio-item__img shadow-min">
                      <picture>
                        <source :srcset="portfolio.img" type="image/avif" />
                        <source :srcset="portfolio.img" type="image/webp" />
                        <img
                          loading="lazy"
                          :src="portfolio.img"
                          class="image"
                          width="290"
                          height="290"
                          alt="plug"
                        />
                      </picture>
                    </div>
                    <div class="portfolio-item__info">
                      <h2
                        class="portfolio-item__title fw-400 fz-20 color-dark uppercase"
                      >
                        {{ portfolio.name }}
                      </h2>
                      <div
                        class="portfolio-item__date fz-16 fw-300 color-dove-gray ls-0-195"
                      >
                      {{portfolio.date.split('T')[0].replaceAll('-', '.') }}
                      </div>
                      <p class="portfolio-item__descr fz-16 lh-150 ls-0-02">
                        {{portfolio.description }}
                      </p>
                    </div>
                  </li>
                  <!-- item -->
                </ul>
              </div>
              <div class="portfolio__bottom portfolio-bottom bg-light">
                <ul class="list-reset portfolio-bottom__list">
                  <li class="portfolio-bottom__item">
                    <button
                      class="btn-reset btn btn--classic home-btns__btn fz-14 fw-400 lh-140 color-dark ff-raleway"
                      @click="goToPage('')"
                    >
                      <i class="fa-solid fa-arrow-left"></i> <span>Назад</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </body>
  </div>
</template>
  

<script>

export default {
  name: "card-appearance-classic-portfolio",
  props: {
    portfolioList: Array,
    card: Object,
  },
  methods: {
    goToPage(link) {
      this.$router.push("/" + this.$route.params.cardLink + link);
    },
  },
};
</script>
  
  <style scoped>
</style>