<template>
  <section id="restringed" class="divcol acenter gap2">
    <article class="center divcol tcenter">
      <h3>Restringed page !</h3>
      <h5>para ver esta seccion tienes que ser propietario de monkeOnear</h5>
      <img src="@/assets/images/anuncio.png" alt="Announcement Image" style="--w:min(100%,40em)">
    </article>
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
