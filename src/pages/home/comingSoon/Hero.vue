<template>
  <section id="hero" class="divcol acenter gap2">
    <h1 class="h3_em h5_emmobile tcenter" style="margin-block:2.3em; max-width:60ch">
      COMING SOON
    </h1>
  </section>
</template>

<script>

const leftCards = 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%)';
const rightCards = 'polygon(0 0, 85% 0, 100% 10%, 100% 100%, 0 100%)';
export default {
  name: "hero",
  i18n: require("./i18n"),
  data() {
    return {
    }
  },
  async mounted() {
  },
  methods: {
  }
};
</script>

<style src="./Hero.scss" lang="scss" />
