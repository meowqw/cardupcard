<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div><card-home /></div>
    </swiper-slide>
    <swiper-slide>
      <div><card-portfolio /></div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import cardHome from "./card-home.vue";
import cardPortfolio from "./card-portfolio.vue";

export default {
  name: "card-main",
  components: {
    Swiper,
    SwiperSlide,
    cardHome,
    cardPortfolio,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
