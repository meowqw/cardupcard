<template>
  <div></div>
</template>

<script>
import { API_DOMAIN } from "/config.js";
export default {
  name: "card-company",
  mounted() {
    location.href = API_DOMAIN
  },
};
</script>