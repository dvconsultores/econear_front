<template>
  <section id="home" class="divcol">
    <Hero ref="hero"></Hero>
    <Market ref="market"></Market>
    <Ranking ref="ranking"></Ranking>
  </section>
</template>

<script>
import Hero from './hero/Hero'
import Market from './market/Market'
import Ranking from './ranking/Ranking'
import CheckMyMonke from './checkMyMonkes/CheckMyMonkes.vue';
export default {
  name: "home",
  components: { Hero, Market, Ranking },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
@use "@/styles/app" as *;

#home {
  font-size: 16px;
  gap:clamp(2em, 6vw, 6em);
  padding-inline: var(--margin-global);
}
</style>
