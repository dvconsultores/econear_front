<template>
  <v-menu v-model="menuSearch" bottom offset-y activator=".openRankingSearch">
    <v-list id="menuSearch" class="card scrolly" v-show="Search!=''">
      <v-list-item v-for="(item,i) in dataMenuSearch" :key="i" @click="Filter(item)" v-show="item.name.includes(Search)&&Search!=''">
        <img :src="item.img" alt="referencial image">
        <div class="divcol">
          <h6 class="p bold">{{item.name}}</h6>
          <span>{{item.desc}}</span>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "menuSearch",
  i18n: require("./i18n"),
  props: {
    Search: String,
  },
  data() {
    return {
      menuSearch: false,
      dataMenuSearch: [
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear2", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear3", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear4", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear5", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear6", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear7", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear8", desc: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear9", desc: "lorem ipsum pardumn dolor" },
      ]
    }
  },
  methods: {
    Filter(item) {
      console.log(item)
    },
  }
};
</script>

<style src="./Ranking.scss" lang="scss" />
