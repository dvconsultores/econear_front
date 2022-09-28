<template>
  <v-app id="layout" class="relative">
    <Header ref="header" />
    <Alerts ref="alerts"></Alerts>
    <v-main :class="$route.path !== '/contact'?'with':'without'" class="parent">
      <router-view></router-view>
    </v-main>
    <Footer v-show="$route.path !== '/contact'" @SelectMore="(item) => {$refs.header.SelectItem_More(item)}" ref="footer" />
  </v-app>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Alerts from '@/components/alerts/Alerts'
import "./Layout.scss";

export default {
  name: "layout",
  components: { Footer, Header, Alerts },
  data() {
    return { wrapperSpace: true }
  },
  mounted() {
    const el = document.querySelectorAll('[class*="scrollx"]');
    el.forEach((el) => {el.addEventListener("wheel", (e) => {
      e.preventDefault();el.scrollLeft += e.deltaY
      if (el === document.querySelector("#containerSliderHero")&&window.innerWidth <= 880) {el.scrollLeft = null}
    })});
  },
  methods: {
  }
}
</script>
