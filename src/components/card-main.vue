<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "card-main",
  components: {
  },
  setup() {
    const onSwiper = () => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
