<template>
  <v-menu v-model="menuSearch" bottom offset-y activator=".openRankingSearch">
    <v-list id="menuSearch" class="card scrolly" v-show="Search.length != 0">
      <v-list-item v-for="(item,i) in Search" :key="i" @click="Filter(item)" v-show="Search.length != 0">
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
    Search: Array,
    menuSearch: Boolean,
  },
  data() {
    return {
    }
  },
  async mounted() {
  },
  // computed: {
  //   dataMenuSearch = this.Search
  // },
  methods: {
    Filter(item) {
      // funcion para filrar datatable
      console.log(item)
    },
  }
};
</script>

<style src="./Ranking.scss" lang="scss" />
