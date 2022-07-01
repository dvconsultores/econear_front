<template>
  <section id="home" class="divcol" style="font-size: 16px; gap:6em;padding-inline: var(--margin-global)">
    <Hero ref="hero"></Hero>
    <Market ref="ranking"></Market>
  </section>
</template>

<script>
import Hero from './hero/Hero'
import Market from './market/Market'
export default {
  name: "home",
  components: { Hero, Market },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>
