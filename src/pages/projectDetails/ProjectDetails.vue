<template>
  <section id="projectDetails" class="divcol">
    <!-- <aside class="container-header">
    </aside> -->

    <aside class="container-profile divcol center gap1 tcenter">
      <v-avatar width="12.48875em" height="12.48875em">
        <img :src="dataInfo.img" alt="avatar" style="--b:3px solid var(--success);--w:100%;--h:100%;--br:50%">
      </v-avatar>
      <v-chip class="center" style="border-radius: .3vmax;min-width:6.174375em" color="#6A25D2">
        <span>{{contract_nft}}</span>
      </v-chip>
      <h2 class="p bold">{{dataInfo.name}}</h2>
      <!-- <div class="acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialRed" :key="i" icon :href="item.link" target="_blank" style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social red" style="--w:2.674375em">
        </v-btn>
      </div>
      
      <div class="contactions acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialActions" :key="i" icon style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social actions" style="--w:2.5em">
        </v-btn>
      </div> -->
    </aside>

    <!-- <p class="description p align" style="max-width:65ch">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus ultrices. Nulla facilisi.
    </p> -->

    <v-card class="infoup card fwrap align">
      <div class="divcol">
        <label>Total Supply</label>
        <span>{{dataInfo.supply}}</span>
      </div>

      <div class="divcol">
        <label>Owners</label>
        <span>{{dataInfo.owners}}</span>
      </div>

      <div class="divcol">
        <label>Total Volume</label>
        <div class="acenter" style="gap:.4em">
          <span>{{dataInfo.total_volume}}</span>
          <img src="@/assets/logos/near.svg" alt="near" style="--w:1.3em">
        </div>
      </div>
    </v-card>

    <!-- <section class="infodown fwrap">
      <v-card v-for="(item,i) in dataInfo.down" :key="i" class="card align">
        <v-sheet color="var(--clr-card)" class="jspace" max-height="150px">
          <div class="divcol">
            <div class="infotext bold acenter" style="gap:.7em">
              <span>{{item.key=='market'?'Market Cap':item.key=='holders'?'Holders':item.key=='volume'?'Volume (24H)':item.key=='price'?'Floor price':null}}</span>
              <img src="@/assets/icons/info.svg" alt="info" style="--w:.9em">
            </div>
            <span class="number bold acenter" style="gap:.7em">
              <img v-if="item.key=='volume'||item.key=='price'" src="@/assets/logos/near.svg" alt="near" style="--w:.8em">
              {{item.price}}
            </span>
            <span class="percent" :style="`color:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
              {{item.percent}}%
            </span>
          </div>

          <v-chip class="btn center" 
            style="--bg:var(--primary);--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 3.5em);--h:2em">
            #{{item.number}}
          </v-chip>
        </v-sheet>
      </v-card>
    </section> -->

    <h3 class="h9_em p">Buy On:</h3>

    <section class="card grid" style="--p:clamp(1em,2vw,2em);gap:1em;--gtc: repeat(auto-fit,minmax(min(100%,16.124375em),1fr))">
      <v-card v-for="(item,i) in dataBuy" :key="i" class="card" style="--p:1em;display:flex;gap:1em;">
        <img :src="item.img" alt="markets" style="--w:4.710625em">
        <span class="h9_em">{{item.name}}</span>
      </v-card>
    </section>

    <!-- overview section -->


    <!-- social section -->


    <!-- nft section -->

  </section>
</template>

<script>
import ChartMarket from './chart/ChartMarket.vue'
import ChartPrice from './chart/ChartPrice.vue'
import ChartSales from './chart/ChartSales.vue'
import ChartBuyers from './chart/ChartBuyers.vue'
import ChartHolders from './chart/ChartHolders.vue'
import ChartHoldingAmount from './chart/ChartHoldingAmount.vue'
import ChartHoldingPeriod from './chart/ChartHoldingPeriod.vue'
import ChartDiscord from './chart/ChartDiscord.vue'
import ChartTwitter from './chart/ChartTwitter.vue'
import ChartRarityDistribution from './chart/ChartRarityDistribution.vue'
import ChartRarityPrice from './chart/ChartRarityPrice.vue'
export default {
  name: "details",
  i18n: require("./i18n"),
  components: { ChartMarket, ChartPrice, ChartSales, ChartBuyers, ChartHolders, ChartHoldingAmount, ChartHoldingPeriod, ChartDiscord, ChartTwitter, ChartRarityDistribution, ChartRarityPrice },
  data() {
    return {
      contract_nft: this.$route.params.id,
      chartHeight: "422.76px",
      dataSocialRed: [
        { social: "clip", link: "#" },
        { social: "twitter", link: "#" },
        { social: "discord", link: "#" },
        { social: "telegram", link: "#" },
      ],
      dataSocialActions: [
        { social: "heart" },
        { social: "share" },
        { social: "bell-white" },
      ],
      dataInfo: {
        name: null,
        img: null,
        supply: null,
        owners: null,
        total_volume: null,
        down: [
          { key: "market", price: "71,629", percent: "-0.12", number: 3 },
          { key: "holders", price: "361", percent: "+12.78", number: 23 },
          { key: "volume", price: "318", percent: "+73.26", number: 2 },
          { key: "price", price: "175", percent: "-1.78", number: 3970 },
        ]
      },
      dataBuy: [
        { img: require('@/assets/images/paras.png'), name: "Paras" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Paras" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
      ],
      dataControls: [
        { key: "overview", name: "Overview", active: true },
        { key: "social", name: "Social", active: false },
        { key: "nft", name: "NFT & rarity", active: false },
        { key: "leaderboard", name: "Leaderboard", active: false },
        { key: "activity", name: "Activity", active: false },
      ],
      dataPotential: [
        { key: "holders", price: "71,629", percent: "-0.12", number: 3, holding: "231 (52.02%)" },
        { key: "whales", price: "361", percent: "+12.78", number: 23, holding: "127 (28.6%)" },
      ],
      headersTableTopSales: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"name", text:"NFT", align:"center", sortable: false },
        { value:"buyer", text:"Buyer", align:"center", sortable: false },
        { value:"seller", text:"Seller", align:"center", sortable: false },
        { value:"price", text:"Price", align:"center", sortable: false },
        { value:"time", text:"Time", align:"center", sortable: false },
        { value:"history", text:"History", align:"center", sortable: false },
      ],
      dataTableTopSales: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear #232 Lorem ipsum dolor sit",
          buyer: "tonystark.near",
          seller: "justinsonbib.near",
          price: "315",
          time: "3 hours ago",
          history: [ 200, 675, 410, 390, 310, 460, 250, 240 ],
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear #232 Lorem ipsum dolor sit",
          buyer: "tonystark.near",
          seller: "justinsonbib.near",
          price: "315",
          time: "3 hours ago",
          history: [ 200, 675, 810, 190, 310, 460, 220, 140 ],
        },
      ],
      dataNfts: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear #312",
          price: "234",
          rank: 3,
          rarity: "common"
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "MonkeONear #312",
          price: "234",
          rank: 3,
          rarity: "rare"
        },
      ],
      widthLimiter: false,
      headersTableTopHolders: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"nft", text:"NFT", align:"center", sortable: false },
        { value:"near", text:"Holding value (N)", align:"center", sortable: false },
        { value:"dollar", text:"Holding value ($)", align:"center", sortable: false },
        { value:"buy", text:"Buy volume (N)", align:"center", sortable: false },
        { value:"sell", text:"Sell volume (N)", align:"center", sortable: false },
        { value:"recent", text:"Recent deal", align:"center", sortable: false },
      ],
      dataTableTopHolders: [
        {
          address: "thethirdeye.near",
          nft: 37,
          nft_percent: 8.33,
          near: 6475,
          dollar: 38850,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
        {
          address: "thethirdeye.near",
          nft: 37,
          nft_percent: 8.33,
          near: 6475,
          dollar: 38850,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
        {
          address: "thethirdeye.near",
          nft: 37,
          nft_percent: 8.33,
          near: 6475,
          dollar: 38850,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
      ],
      headersTableTopBuyers: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"bought", text:"Bought", align:"center", sortable: false },
        { value:"buy", text:"Buy volume (N)", align:"center", sortable: false },
      ],
      dataTableTopBuyers: [
        {
          address: "thethirdeye.near",
          bought: 37,
          buy: 6475,
        },
        {
          address: "thethirdeye.near",
          bought: 37,
          buy: 6475,
        },
      ],
      headersTableTopSellers: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"sold", text:"Sold", align:"center", sortable: false },
        { value:"sell", text:"Sell volume (N)", align:"center", sortable: false },
      ],
      dataTableTopSellers: [
        {
          address: "thethirdeye.near",
          sold: 37,
          sell: 6475,
        },
        {
          address: "thethirdeye.near",
          sold: 37,
          sell: 6475,
        },
      ],
      headersTableTopTraders: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"trade", text:"Trade", align:"center", sortable: false },
        { value:"near", text:"Trading volume (N)", align:"center", sortable: false },
        { value:"dollar", text:"Trading volume ($)", align:"center", sortable: false },
        { value:"buy", text:"Buy volume (N)", align:"center", sortable: false },
        { value:"sell", text:"Sell volume (N)", align:"center", sortable: false },
        { value:"recent", text:"Recent deal", align:"center", sortable: false },
      ],
      dataTableTopTraders: [
        {
          address: "thethirdeye.near",
          trade: 37,
          near: 13632,
          dollar: 38586,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
      ],
      headersTableActivity: [
        { value:"name", text:"NFT", align:"center", sortable: false },
        { value:"action", text:"Action", align:"center", sortable: false },
        { value:"price", text:"Price", align:"center", sortable: false },
        { value:"from", text:"From", align:"center", sortable: false },
        { value:"to", text:"To", align:"center", sortable: false },
        { value:"time", text:"Time", align:"center", sortable: false },
      ],
      dataTableActivity: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear Gen 0",
          number: 421,
          action: "sale",
          price: 174,
          price_dollar: 1083,
          from: "tonystark.near",
          to: "justinsonbib.near",
          time: "3 hours"
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "MonkeONear Gen 0",
          number: 421,
          action: "Transfer",
          from: "tonystark.near",
          to: "justinsonbib.near",
          time: "5 hours"
        },
      ],
    }
  },
  mounted() {
    this.getDataCollection()
    this.Responsive()
    window.onresize = () => this.Responsive()
  },
  methods: {
    Responsive() {
      if (window.innerWidth >= 880) {
        if (this.dataNfts.length<=3) {this.widthLimiter = true}
        else {this.widthLimiter = false}
        this.chartHeight = "422.76px"
      } else {
        this.chartHeight = "222.76px"
      }
    },
    async getDataCollection(){
      const url = "api/v1/collectiondetails"
      let item = {
        "collection": this.contract_nft,
      }
      this.axios.post(url, item)
        .then((response) => {
          if (response.data[0]) {
            this.dataInfo.supply = response.data[0].supply
            this.dataInfo.owners = response.data[0].owner_for_tokens
            this.dataInfo.total_volume = Number(parseFloat(response.data[0].total_volumen).toFixed(2)).toLocaleString("en-US")
            this.dataInfo.name = response.data[0].name
            this.dataInfo.img = response.data[0].icon
          }
          if (!this.dataInfo.img) {
            this.getImgCollection()
          }
        }).catch((error) => {
          console.log("ERRORRRR",error)
        })
    },
    getImgCollection() {
      this.axios.get("https://api-v2-mainnet.paras.id/collections?creator_id=" + this.contract_nft).then(res => {
          // console.log(res.data.data.results)
        let data = res.data.data.results
        data.forEach(element => {
          if ((element.collection).toLowerCase() === this.dataInfo.name.toLowerCase()) {
            this.dataInfo.img = 'https://ipfs.fleek.co/ipfs/' + element.media
          }
        });
        this.dataInfo.img = this.dataInfo.img || require('@/assets/nfts/nft1.png')
      })
    },
  }
};
</script>

<style src="./ProjectDetails.scss" lang="scss" />
