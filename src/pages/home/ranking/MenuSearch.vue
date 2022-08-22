<template>
  <v-menu v-model="menuSearch" bottom offset-y activator=".openRankingSearch">
    <v-list id="menuSearch" class="card scrolly" v-show="Search!=''">
      <v-list-item v-for="(item,i) in dataMenuSearch" :key="i" @click="Filter(item)" v-show="item.name.includes(Search)&&Search!=''">
        <img :src="item.img" alt="referencial image">
        <div class="divcol">
          <h6 class="p bold">{{item.name}}</h6>
          <span>{{item.contract}}</span>
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
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear2", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear3", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear4", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear5", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear6", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear7", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear8", contract: "lorem ipsum pardumn dolor" },
        { img: require("@/assets/nfts/nft1.png"), name: "monkeonnear9", contract: "lorem ipsum pardumn dolor" },
      ]
    }
  },
  methods: {
    Filter(item) {
      // funcion para filrar datatable
      console.log(item)
    },
  }
};
</script>

<style src="./Ranking.scss" lang="scss" />
