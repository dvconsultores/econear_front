<template>
  <v-dialog v-model="modalMarketMore" max-width="35.25em" content-class="modalMarketMore">
    <v-card id="modalMarketMore" class="card divcol" style="--p:2em;--bg:hsl(210, 48%, 13%,.9);--br:.5vmax">
      <v-btn icon class="close" @click="modalMarketMore = false">
        <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
      </v-btn>
      <h3 class="h8_em">More {{DataMore.title}}</h3>
      <!-- content -->
      <v-card v-for="(item,i) in DataMore.list" :key="i"
        class="space gap1 tnowrap card" style="--bg:var(--primary)">
        <div class="acenter gap1">
          <span>{{i+1}}</span>
          <img :src="item.img || image" alt="Referencial Image" style="--w:clamp(4em,2vw,4.75em)">
          <div id="container-desc" class="divcol">
            <span class="h11_em">{{item.name}}</span>
            <span class="h12_em">{{item.user}}</span>
          </div>
        </div>

        <div class="divcol jcenter aend tend">
          <span v-if="item.percent || item.percent == 0" :style="item.state?'color:var(--success)':'color:var(--error)'"
            class="h11_em">
            {{item.state?'+':''}}{{item.percent}}%
          </span>

          <div v-if="item.near&&item.dollar" class="divcol">
            <span :style="item.state?'color:var(--success)':'color:var(--error)'" class="h11_em">
              {{item.near}}
            </span> 
            <span class="h12_em">{{item.dollar}}</span>
          </div>
        </div>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "modalMarketMore",
  i18n: require("./i18n"),
  props: {
    DataMore: Array,
  },
  data() {
    return {
      modalMarketMore: false,
      image: require('@/assets/nfts/nft1.png'),
    }
  },
  methods: {
  }
};
</script>

<style src="./Market.scss" lang="scss" />
