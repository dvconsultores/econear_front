<template>
  <section id="home" class="divcol">
    <check-my-monkes ref="checkMyMonkes"></check-my-monkes>
  </section>
</template>

<script>
import Hero from './hero/Hero'
import Market from './market/Market'
import Ranking from './ranking/Ranking'
import CheckMyMonkes from './checkMyMonkes/CheckMyMonkes.vue';
export default {
  name: "home",
  components: { Hero, Market, Ranking, CheckMyMonkes },
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
