<template>
  <section id="hero" class="divcol acenter gap2">
    <h1 class="h4_em h5_emmobile tcenter">
      The whole <br class="vermobile"><span class="mask" :style="`--mask:'NEAR ecosystem'`">NEAR ecosystem</span><br>at one place.
    </h1>

    <v-btn class="btn h10_em center"
      style="--p:0 2em;--h:64px;--w:13.5em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">Get Started</v-btn>

    <blockquote class="fill_w">
      <aside v-for="(item,i) in dataCards" :key="i" class="wrapperCards"
        :style="`--top:${item.style.top};--left:${item.style.left};--right:${item.style.right}`">
        <v-card class="hero-cards divcol center tcenter gap1"
            :style="`--clip:${item.style.clip}`">
          <h3 class="p">{{item.title}}</h3>
          <v-btn class="btn">Buy Here</v-btn>
          <img :src="item.img" alt="Card Image" style="--w:min(100%,10.25em)">
        </v-card>
      </aside>
    </blockquote>
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
      dataCards: [
        {
          img: require('@/assets/images/c1.png'),
          title: "New Collection",
          style: { clip: leftCards, top: "-200px", left: "0"}
        },
        {
          img: require('@/assets/images/c2.png'),
          title: "Top Volume Projects",
          style: { clip: leftCards, top: "-50px", left: "20%"}
        },
        {
          img: require('@/assets/images/c3.png'),
          title: "Top Collection",
          style: { clip: rightCards , top: "50px"}
        },
        {
          img: require('@/assets/images/c4.png'),
          title: "Top Voted Projects",
          style: { clip: rightCards, top: "-50px", right: "20%"}
        },
        {
          img: require('@/assets/images/c5.png'),
          title: "Top Floor Featured Projects",
          style: { clip: rightCards, top: "-200px", right: "0"}
        },
      ]
    }
  },
  methods: {
  }
};
</script>

<style src="./Hero.scss" lang="scss" />
