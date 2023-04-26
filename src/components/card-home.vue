<template>
  <body :class="'page__body '+ bg">
    <div class="site-container">
      <main class="main">
        <section :class="'home home-'+ classStyle">
          <div class="home-container container">
            <div class="home__top" data-aos="zoom-in">
              <div class="home__left">
                <div class="home__img home-img">
                  <picture>
                    <source :srcset="card.personal_img" type="image/avif" />
                    <source :srcset="card.personal_img" type="image/webp" />
                    <img
                      loading="lazy"
                      :src="card.personal_img"
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
                        {{card.name}}
                      </h1>
                      <p class="home-content__descr home-descr">
                        {{card.spec}}
                      </p>
                    </div>
                    <!-- <div class="home-content__top home-content__top--no-logo"> -->
                    <div class="home-content__top-right ">
                      <div class="home-content__logo" v-if="card.logo_img">
                        <img
                          loading="lazy"
                          :src="card.logo_img"
                          class="image"
                          width="130"
                          height="30"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <ul class="list-reset home-content__list">

                    <li class="home-content__item" v-if="card.phone">
                      <a
                        :href="'tel:'+card.phone"
                        class="home-content__link item-link item-link--tel"
                      >
                        <i class="fa-solid fa-mobile"></i>
                        <span class="item-link__span">{{ card.phone }}</span>
                      </a>
                    </li>

                    <li class="home-content__item" v-if="card.email">
                      <a
                        :href="'mailto:'+card.email"
                        class="home-content__link item-link item-link--mail"
                      >
                        <i class="fa-solid fa-envelope"></i>
                        <span class="item-link__span">{{ card.email }}</span>
                      </a>
                    </li>
                    <li class="home-content__item" v-if="card.personal_site">
                      <a
                        :href="card.personal_site"
                        class="home-content__link item-link item-link--site-link"
                      >
                        <i class="fa-solid fa-link"></i>
                        <span class="item-link__span">{{card.personal_site}}</span>
                      </a>
                    </li>
                    <li class="home-content__item" v-if="card.dob">
                      <div class="home-content__link item-link item-link--date">
                        <i class="fa-solid fa-calendar"></i>
                        <span class="item-link__span">{{card.dob.split('T')[0].replaceAll('-', '.')}}</span>
                      </div>
                    </li>
                    <li class="home-content__item" v-if="card.address">
                      <div
                        class="home-content__link item-link item-link--location"
                      >
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="item-link__span"
                          >{{card.address}}</span
                        >
                      </div>
                    </li>
                  </ul>
                </div>
                <ul class="list-reset home-content__social-list social">
                  <!-- tg -->
                  <li class="social__item social-item" v-for="(socialValue, social) in socials" :key="social">
                      <a style="cursor: pointer;" @click="goToSocial(socialValue)" class="social__link social-link"
                        ><i :class="'fa-brands fa-'+social"></i
                      ></a>
                    </li>
                </ul>
              </div>
              <div class="home__btns home-btns">
                <ul class="list-reset home-btns__list">
                  <!-- <li class="home-btns__item">
                    <button
                      class="btn-reset btn home-btns__btn"
                      onclick="document.location='flup-calendar.html'"
                    >
                      <i class="fa-regular fa-calendar-days"></i>
                      <span>Сеансы</span>
                    </button>
                  </li> -->
                  <li class="home-btns__item" v-if="portfolioList != null && portfolioList.length != 0">
                    <button @click="goToPage('/portfolio')"
                      class="btn-reset btn home-btns__btn"
                    >
                      <i class="fa-solid fa-briefcase"></i>
                      <span>Портфолио</span>
                    </button>
                  </li>
                  <li class="home-btns__item" v-if="card.id_company_info">
                    <button @click="goToPage('/company')"
                      class="btn-reset btn home-btns__btn"
                    >
                      <span>О компании</span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="'home__bottom home-bottom '+ bg">
              <ul class="list-reset home-bottom__list">
                <li class="home-bottom__item">
                  <button class="btn-reset btn home-bottom__btn">
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

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

export default {
  name: "card-home",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      card: {},
      socials: {},
      portfolioList: null,
      bg: '',
      classStyle: ''
    };
  },
  methods: {
    ...mapActions(["GET_CARD_FROM_API", "GET_PORTFOLIO_FROM_API"]),

    // добавляем социалки которые не none
    setSocials(socials) {
      if (socials) {
        for (let social in socials) {
          if (socials[social]) {
            this.socials[social] = socials[social];
          }
        }
        delete this.socials.date_create;
        delete this.socials.date_update;
        delete this.socials.id;
      }
    },
    goToPage(link) {
      this.$router.push("/" + this.$route.params.cardLink + link);
    },
    goToSocial(link) {
      location.href = link
    },
  },
  computed: {
    ...mapGetters(["CARD", "PORTFOLIO"]),
  },
  created() {
    // подружаем информациб о карточке
    this.GET_CARD_FROM_API(this.$route.params.cardLink).then(() => {
      this.card = this.CARD[0];
      if (this.card.length == 1) {
        location.href = API_DOMAIN
      }

      this.setSocials(this.card.id_social);

      if (this.card.id_appearance.name == 'flup') {
        this.bg = 'bg-alto'
      }
      this.classStyle = this.card.id_appearance.name;

      this.GET_PORTFOLIO_FROM_API(this.card.id).then(() => {
        this.portfolioList = this.PORTFOLIO;
      });
    });
  },
};
</script>

<style scoped>
</style>