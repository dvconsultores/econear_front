<template>
  <v-app id="layout" class="relative">
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <router-view></router-view>
    </v-main>
    <Footer ref="footer" />
  </v-app>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./Layout.scss";

export default {
  name: "layout",
  components: { Footer, Header },
  data() {
    return { wrapperSpace: true }
  },
  mounted() {
    const el = document.querySelectorAll('[class*="scrollx"]');
    el.forEach((el) => {el.addEventListener("wheel", (e) => {
      e.preventDefault();el.scrollLeft += e.deltaY
    })});
  },
  methods: {
  }
}
</script>
