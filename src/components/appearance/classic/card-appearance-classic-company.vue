<template>
  <div>
    <body class="page__body page__body--ubuntu bg-light">
      <div class="site-container">
        <main class="main main--no-p">
          <section class="home">
            <div
              class="home__container home__container--no-p container home__container--gap-20 bg-light"
            >
              <div
                class="home__top home__top--row-gap-20 home__top--w-100 shadow-med home__top--br-dark-10"
                data-aos="zoom-in"
              >
                <div class="home__left home__left--classic home__left--6-col">
                  <div
                    class="home__img home-img home-img--cirle home-img--br-max home-img--block"
                  >
                    <picture>
                      <source :srcset="company.logo_img" type="image/avif" />
                      <source :srcset="company.logo_img" type="image/webp" />
                      <img
                        loading="lazy"
                        :src="company.logo_img"
                        class="image"
                        width="200"
                        height="200"
                        alt="Анастасия Б."
                      />
                    </picture>
                  </div>
                </div>
                <div
                  class="home__right home__right--w-768 home__right--gap-35 home__right--6-col home__right--p-t-40 home__right--p-b-30 home__right--p-20 home__right--start"
                >
                  <div class="home__content home-content home-content--w-100">
                    <div class="home-content__top home-content__top--no-logo">
                      <div
                        class="home-content__top-left home-content__top-left--row-gap-5px"
                      >
                        <h1
                          class="home-content__title home-title fz-32 fw-400 color-dark uppercase"
                        >
                          {{ company.name }}
                        </h1>
                        <p
                          class="home-content__descr home-descr fz-16 ls-0-195 color-gray uppercase ff-raleway"
                        >
                        {{ company.activity }}
                        </p>
                      </div>
                    </div>
                    <ul
                      class="list-reset home-content__list home-content__list--row-gap-15 bg-light"
                    >
                      <li
                        v-if="company.phone != 'null' && company.phone.length > 0"
                        class="home-content__item home-content__item--padding-bottom-5 home-content__item--dark-border-bottom"
                      >
                        <a
                          :href="'tel:' + company.phone"
                          class="home-content__link item-link item-link--tel color-dark"
                          ><i class="fa-solid fa-mobile"></i>
                          <span class="item-link__span fz-16 fw-300">{{
                            company.phone
                          }}</span></a
                        >
                      </li>
                      <li
                        v-if="company.email != 'null' && company.email.length > 0"
                        class="home-content__item home-content__item--padding-bottom-5 home-content__item--dark-border-bottom"
                      >
                        <a
                          :href="'mailto:' + company.email"
                          class="home-content__link item-link item-link--mail color-dark"
                          ><i class="fa-solid fa-envelope"></i>
                          <span class="item-link__span fz-16 fw-300">{{
                            company.email
                          }}</span></a
                        >
                      </li>
                      <li
                        v-if="company.foundation != 'null' && company.foundation.length > 0"
                        class="home-content__item home-content__item--padding-bottom-5 home-content__item--dark-border-bottom"
                      >
                        <div
                          class="home-content__link item-link item-link--date color-dark"
                        >
                          <i class="fa-solid fa-calendar"></i>
                          <span class="item-link__span fz-16 fw-300">{{
                            company.foundation
                          }}</span>
                        </div>
                      </li>
                      <li
                        v-if="company.address != 'null' && company.address.length > 0"
                        class="home-content__item home-content__item--padding-bottom-5 home-content__item--dark-border-bottom"
                      >
                        <div
                          class="home-content__link item-link item-link--location color-dark"
                        >
                          <i class="fa-solid fa-location-dot"></i>
                          <span class="item-link__span fz-16 fw-300">{{
                            company.address
                          }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul
                    class="list-reset home-content__social-list social social--dark-border-bottom"
                  >
                    <!-- tg -->
                    <li
                      class="social__item social-item"
                      v-for="(socialValue, social) in socials"
                      :key="social"
                    >
                      <a
                        :href="socialValue"
                        class="social__link social-link color-dark"
                        ><i :class="'fa-brands fa-' + social"></i
                      ></a>
                    </li>
                  </ul>
                  <div class="home__btns home-btns">
                    <ul class="list-reset home-btns__list">
                      <li class="home-btns__item">
                        <button
                          @click="goToPage('')"
                          class="btn-reset btn btn--classic home-btns__btn fz-14 fw-400 lh-140 color-dark ff-raleway"
                        >
                          <span>Назад</span>
                          <i class="fa-solid fa-arrow-left"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="home__bottom home-bottom bg-light">
                <ul
                  class="list-reset home-bottom__list home-bottom__list--right"
                >
                  <li class="home-bottom__item">
                    <button
                      class="btn-reset btn btn--long fw-500 fz-16 lh-150 color-light home-bottom__btn shadow-light br-48 bg-dark ff-raleway"
                    >
                      <i class="fa-solid fa-download"></i>
                      <span>Сохранить в контакты</span>
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
  name: "card-appearance-classic-company",
  props: {
    company: Object,
    socials: Object,
  },
  methods: {
    goToPage(link) {
      this.$router.push("/" + this.$route.params.cardLink + link);
    },
  },
};
</script>