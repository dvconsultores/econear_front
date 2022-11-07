<template>
  <section id="restringed" class="divcol acenter gap2">
    <article class="center divcol tcenter">
      <h3>Restricted page !</h3>
      <h5>To view this section you must be a MonkeONear GEN0 holder.</h5>
      <img src="@/assets/images/anuncio.png" alt="Announcement Image" style="--w:min(100%,40em)" @click="$router.push(`/project-details/monkeonear.neartopia.near`)">
    </article>
    <v-btn class="btn" @click="$router.push(`/view-collections/monkeonear.neartopia.near`)" style="--bg: var(--primary);--bs: 0px 0px 2.5px 1px #6FFFE9;--p: 0 0.75em; width: 7.875em;">Buy Here</v-btn>
  </section>
</template>

<script>
export default {
  name: "restringed",
  i18n: require("./i18n"),
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style src="./Restringed.scss" lang="scss" />
