<template>
  <div :class="['popup', { open: isOpen }]">
    <div class="popup__close" @click="closePopup"></div>
    <div class="popup__container">
      <div class="popup__content content">
        <div class="poput__top">
          <h2 class="popup__title">Поделиться</h2>
        </div>
        <ul class="list-reset popup__list social-list">
          <li class="social-list__item">
            <i class="fa-brands fa-whatsapp"></i>
          </li>
          <li class="social-list__item">
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li class="social-list__item">
            <i class="fa-brands fa-telegram"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  left: 0;
  bottom: -100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: bottom 0.2s ease-in-out;
}

.popup.open {
  bottom: 0;
}

.popup__close {
  z-index: 8000;
  width: 100%;
  height: 100%;
}

.popup__container {
  position: absolute;
  z-index: 10000;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  width: 100%;
  max-width: 400px;
  height: 200px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.04);
  background-color: #fff;
}

.popup__content {
  margin-top: 30px;
}

.popup__title {
  font-family: "Raleway", sans-serif;
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
}

.popup__btn:not(:last-child) {
  margin-bottom: 10px;
}

.social-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.social-list__item i {
  font-size: 28px;
  cursor: pointer;
}
</style>
