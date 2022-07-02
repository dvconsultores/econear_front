<template>
  <section id="home" class="divcol" style="font-size: 16px; gap:6em;padding-inline: var(--margin-global)">
    <Hero ref="hero"></Hero>
    <Market ref="market"></Market>
    <Ranking ref="ranking"></Ranking>
  </section>
</template>

<script>
import Hero from './hero/Hero'
import Market from './market/Market'
import Ranking from './ranking/Ranking'
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
