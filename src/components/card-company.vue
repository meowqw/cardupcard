<template>
  <body :class="'page__body ' + bg">
    <div class="site-container">
      <main class="main">
        <section :class="'home home-' + classStyle">
          <div class="home-container home-container--company container">
            <div class="home__top home__top--company" data-aos="zoom-in">
              <div class="home__left home__left--company">
                <div class="home__img home-img home-img--logo">
                  <img
                    loading="lazy"
                    :src="COMPANY.logo_img"
                    class="image br-10"
                    width="@img-widht"
                    height="100"
                    alt=""
                  />
                </div>
              </div>
              <div class="home__right home__right--company">
                <div class="home__content home-content">
                  <div class="home-content__top home-content__top--no-logo">
                    <div class="home-content__top-left">
                      <h1 class="home-content__title home-title">
                        {{ COMPANY.name }}
                      </h1>
                      <p class="home-content__descr home-descr">
                        {{ COMPANY.activity }}
                      </p>
                    </div>
                    <div class="home-content__top-right">
                      <div class="home-content__logo" v-if="CARD[0].logo_img">
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
                    <li class="home-content__item" v-if="COMPANY.phone">
                      <a
                        :href="'tel:' + COMPANY.phone"
                        class="home-content__link item-link item-link--tel"
                      >
                        <i class="fa-solid fa-mobile"></i>
                        <span class="item-link__span">{{ COMPANY.phone }}</span>
                      </a>
                    </li>
                    <li class="home-content__item" v-if="COMPANY.email">
                      <a
                        :href="'mailto:' + COMPANY.email"
                        class="home-content__link item-link item-link--mail"
                      >
                        <i class="fa-solid fa-envelope"></i>
                        <span class="item-link__span">{{ COMPANY.email }}</span>
                      </a>
                    </li>
                    <li class="home-content__item" v-if="COMPANY.company_site">
                      <a
                        :href="COMPANY.company_site"
                        class="home-content__link item-link item-link--site-link"
                      >
                        <i class="fa-solid fa-link"></i>
                        <span class="item-link__span">{{
                          COMPANY.company_site
                        }}</span>
                      </a>
                    </li>
                    <li class="home-content__item" v-if="COMPANY.foundation">
                      <div class="home-content__link item-link item-link--date">
                        <i class="fa-solid fa-calendar"></i>
                        <span class="item-link__span">{{
                          COMPANY.foundation
                        }}</span>
                      </div>
                    </li>
                    <li class="home-content__item" v-if="COMPANY.address">
                      <div
                        class="home-content__link item-link item-link--location"
                      >
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="item-link__span">{{
                          COMPANY.address
                        }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul class="list-reset home-content__social-list social" v-if="Object.keys(socials).length" >
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
              <div class="home__btns home-btns">
                <ul class="list-reset home-btns__list">
                  <li class="home-btns__item">
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
            <div class="home__bottom home-bottom">
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
import { mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

export default {
  name: "card-company",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      socials: {},
      bg: "",
      classStyle: "",
    };
  },
  methods: {
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
  },
  computed: {
    ...mapGetters(["CARD", "COMPANY"]),
  },
  created() {
    this.setSocials(this.COMPANY.id_social);
    this.setStyles(this.CARD[0]);
  },
};
</script>