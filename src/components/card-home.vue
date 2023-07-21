<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :auto-height="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :pagination="{ clickable: true, type: 'progressbar' }"
  >
    <swiper-slide>
      <div>
        <template v-if="!isLoad">
          <body class="page__body">
            <div class="site-container">
              <main class="main">
                <div class="main__container container loader__container">
                  <div class="loader__block">
                    <div class="loader">Loading…</div>
                  </div>
                  <h1 class="title-h2 loader__title">Идет загрузка</h1>
                </div>
              </main>
            </div>
          </body>
        </template>
        <template v-else>
          <body :class="'page__body ' + bg">
            <div class="site-container">
              <main class="main">
                <section :class="'home home-' + classStyle">
                  <div class="home-container container">
                    <div class="home__top" data-aos="zoom-in">
                      <div class="home__left">
                        <div class="home__img home-img">
                          <picture>
                            <source
                              :srcset="CARD[0].personal_img"
                              type="image/avif"
                            />
                            <source
                              :srcset="CARD[0].personal_img"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              :src="CARD[0].personal_img"
                              class="image"
                              width="385"
                              height="385"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                      <div class="home__right">
                        <div class="home__content home-content">
                          <div class="home-content__top">
                            <div class="home-content__top-left">
                              <h1 class="home-content__title home-title">
                                {{ CARD[0].name }} {{ CARD[0].surname }}
                              </h1>
                              <p class="home-content__descr home-descr">
                                {{ CARD[0].spec }}
                              </p>
                            </div>
                            <!-- <div class="home-content__top home-content__top--no-logo"> -->
                            <div class="home-content__top-right">
                              <div
                                class="home-content__logo"
                                v-if="CARD[0].logo_img"
                              >
                                <img
                                  loading="lazy"
                                  :src="CARD[0].logo_img"
                                  class="image"
                                  width="130"
                                  height="30"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <ul class="list-reset home-content__list">
                            <li class="home-content__item" v-if="CARD[0].phone">
                              <a
                                :href="'tel:' + CARD[0].phone"
                                class="home-content__link item-link item-link--tel"
                              >
                                <i class="fa-solid fa-mobile"></i>
                                <span class="item-link__span">{{
                                  CARD[0].phone
                                }}</span>
                              </a>
                            </li>

                            <li class="home-content__item" v-if="CARD[0].email">
                              <a
                                :href="'mailto:' + CARD[0].email"
                                class="home-content__link item-link item-link--mail"
                              >
                                <i class="fa-solid fa-envelope"></i>
                                <span class="item-link__span">{{
                                  CARD[0].email
                                }}</span>
                              </a>
                            </li>
                            <li
                              class="home-content__item"
                              v-if="CARD[0].personal_site"
                            >
                              <a
                                :href="CARD[0].personal_site"
                                class="home-content__link item-link item-link--site-link"
                              >
                                <i class="fa-solid fa-link"></i>
                                <span class="item-link__span">{{
                                  CARD[0].personal_site
                                }}</span>
                              </a>
                            </li>
                            <li class="home-content__item" v-if="CARD[0].dob">
                              <div
                                class="home-content__link item-link item-link--date"
                              >
                                <i class="fa-solid fa-calendar"></i>
                                <span class="item-link__span">{{
                                  CARD[0].dob
                                }}</span>
                              </div>
                            </li>
                            <li
                              class="home-content__item"
                              v-if="CARD[0].address"
                            >
                              <div
                                class="home-content__link item-link item-link--location"
                              >
                                <i class="fa-solid fa-location-dot"></i>
                                <span class="item-link__span">{{
                                  CARD[0].address
                                }}</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <ul
                          class="list-reset home-content__social-list social"
                          v-if="Object.keys(socials).length"
                        >
                          <!-- tg -->
                          <li
                            class="social__item social-item"
                            v-for="(socialValue, social) in socials"
                            :key="social"
                          >
                            <a
                              style="cursor: pointer"
                              @click="goToSocial(socialValue)"
                              class="social__link social-link"
                              ><i :class="'fa-brands fa-' + social"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <!-- <div class="home__btns home-btns">
                        <ul class="list-reset home-btns__list">
                          <li class="home-btns__item">
                            <button
                              class="btn-reset btn home-btns__btn"
                              onclick="document.location='flup-calendar.html'"
                            >
                              <i class="fa-regular fa-calendar-days"></i>
                              <span>Сеансы</span>
                            </button>
                          </li>
                          <li
                            class="home-btns__item"
                            v-if="PORTFOLIO != null && PORTFOLIO.length != 0"
                          >
                            <button
                              @click="goToPage('/portfolio')"
                              class="btn-reset btn home-btns__btn"
                            >
                              <i class="fa-solid fa-briefcase"></i>
                              <span>Портфолио</span>
                            </button>
                          </li>
                          <li
                            class="home-btns__item"
                            v-if="CARD[0].id_company_info"
                          >
                            <button
                              @click="goToPage('/company')"
                              class="btn-reset btn home-btns__btn"
                            >
                              <span>О компании</span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </button>
                          </li>
                        </ul>
                      </div> -->
                    </div>
                    <div :class="'home__bottom home-bottom ' + bg">
                      <ul class="list-reset home-bottom__list">
                        <li class="home-bottom__item">
                          <button
                            class="btn-reset btn home-bottom__btn"
                            @click="goOffer"
                          >
                            <!-- <i class="fa-solid fa-download"></i> -->
                            <span>Предложить сотрудничество</span>
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
      </div>
    </swiper-slide>
    <swiper-slide v-if="PORTFOLIO != null && PORTFOLIO.length != 0">
      <div>
        <body :class="'page__body ' + bg">
          <div class="site-container">
            <main class="main">
              <section :class="'portfolio portfolio-' + classStyle">
                <div class="portfolio__container container">
                  <div class="portfolio__content" data-aos="zoom-in">
                    <h1 class="portfolio__title">{{ CARD[0].subcard }}</h1>
                    <ul class="list-reset portfolio__list">
                      <!-- item -->
                      <li
                        v-for="portfolio in PORTFOLIO"
                        :key="portfolio.id"
                        class="portfolio__item portfolio-item"
                      >
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
                          <h2 class="portfolio-item__title">
                            {{ portfolio.name }}
                          </h2>
                          <div class="portfolio-item__date">
                            {{ portfolio.date }}
                          </div>
                          <p class="portfolio-item__descr">
                            {{ portfolio.description }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--                    <div class="portfolio__bottom portfolio-bottom">-->
                  <!--                      <ul class="list-reset portfolio-bottom__list">-->
                  <!--                        <li class="portfolio-bottom__item">-->
                  <!--                          <button-->
                  <!--                            class="btn-reset btn home-btns__btn"-->
                  <!--                            @click="goToPage('')"-->
                  <!--                          >-->
                  <!--                            <i class="fa-solid fa-arrow-left"></i>-->
                  <!--                            <span>Назад</span>-->
                  <!--                          </button>-->
                  <!--                        </li>-->
                  <!--                      </ul>-->
                  <!--                    </div>-->
                </div>
              </section>
            </main>
          </div>
        </body>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "card-home",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      socials: {},
      bg: "",
      classStyle: "",
      isLoad: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions([
      "GET_CARD_FROM_API",
      "GET_PORTFOLIO_FROM_API",
      "SET_COMPANY",
    ]),
    goOffer() {
      document.location.href = `tel:${this.CARD[0].phone}`;
    },

    // добавляем социалки которые не none
    setSocials() {
      if (this.CARD[0].id_social) {
        for (let social in this.CARD[0].id_social) {
          if (this.CARD[0].id_social[social]) {
            this.socials[social] = this.CARD[0].id_social[social];
          }
        }
        delete this.socials.date_create;
        delete this.socials.date_update;
        delete this.socials.id;
      }
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
    goToSocial(link) {
      location.href = link;
    },
  },
  computed: {
    ...mapGetters(["CARD", "PORTFOLIO", "COMPANY"]),
  },
  created() {
    // подружаем информациб о карточке
    if (!this.CARD) {
      this.GET_CARD_FROM_API(this.$route.params.cardLink).then(() => {
        if (this.CARD[0].length == 1) {
          location.href = API_DOMAIN;
        }

        // социалки
        this.setSocials(this.CARD[0].id_social);

        // установка стилей
        this.setStyles(this.CARD[0]);

        // установка компании
        this.SET_COMPANY(this.CARD[0].id_company_info);

        // получаем ифнормация о потфолио
        this.GET_PORTFOLIO_FROM_API(this.CARD[0].id).then(() => {
          // все прогрузилось
          this.isLoad = true;
        });
      });
    } else {
      this.isLoad = true;

      // установка стилей
      this.setStyles(this.CARD[0]);
    }
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style>
.swiper {
  /* overflow: hidden; */
  display: block;
}

.swiper-pagination-bullet-active {
  background: #1e1e1e;
}

.swiper-pagination {
  /* position: static; */
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background-color: #ff5c00;
}

.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
.swiper-vertical
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  height: 6px;
}

/* .swiper-slide {
  min-height: 650px;

  @media (max-width: 425px) {
    min-height: 800px;
  }
} */

.swiper-autoheight {
  /* min-height: auto; */
}

.swiper-wrapper {
  min-height: 650px;

  @media (max-width: 1024px) {
    min-height: 900px;
  }

  @media (max-width: 576px) {
    min-height: 850px;
  }

  @media (max-width: 425px) {
    min-height: 750px;
  }
}
</style>
