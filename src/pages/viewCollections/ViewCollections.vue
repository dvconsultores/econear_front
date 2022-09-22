<template>
  <section id="viewCollections" class="divcol">
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

    <aside class="container-controls space gap2 fwrap_inv" style="--fb: 1 1 200px">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i" class="options" @click="getRanking(collection, item)">
          <h6 class="p" @click="orderList(item)">{{item.name}}</h6>
        </v-tab>
      </v-tabs>

      <v-text-field
        v-model="search"
        hide-details
        solo
        label="Search for NFT's and collections"
        append-icon="mdi-magnify"
        style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
        class="customeFilter openRankingSearch"
        autocomplete="off"
        @click:append="searchCollection()"
        @keydown.enter.prevent="searchCollection()"
        @input="inputSearch()"
      ></v-text-field>
    </aside>

    <section v-if="variableCarga" class="container-list">
      <v-card v-for="(item, i) in dataList" :key="i" class="card divcol" :style="`--max-width: ${dataList.length <= 3 ? '20em' :'auto'}`">
        <h6>{{item.name}}</h6>
        <span>{{item.contract}}</span>
        <img :src="item.nft || image" :alt="`${item.name} NFT`">
        <span><b>Marketplace: </b><a style="color:var(--success)">{{item.marketplace}}</a></span>
        <div class="space gap2 wrap">
          <div class="acenter" style="gap:.6ch">
            <span class="price">{{item.price}}</span>
            <img src="@/assets/logos/near.svg" alt="near">
            <span style="color: #9ca3af">~ {{conversion(item.price)}}</span>
          </div>

          <v-btn class="btn">Buy now</v-btn>
        </div>
      </v-card>
    </section>

    <v-btn v-if="variableCarga && seeMoreVisible" text :disabled="seeMoreDis" @click="seeMore()" class="align" style="color:var(--success); font-size: 1.4025em; margin-block:3em">See more...</v-btn>

    <center v-if="!variableCarga" style="margin-block:10em">
      <v-progress-circular
        :size="110"
        :width="10"
        indeterminate
        color="white"
      ></v-progress-circular>
    </center>
  </section>
</template>

<script>
import * as nearAPI from 'near-api-js'

const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI
const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "mainnet",
  keyStore, 
  nodeUrl: "https://rpc.mainnet.near.org",
  walletUrl: "https://wallet.mainnet.near.org",
  helperUrl: "https://helper.mainnet.near.org",
  explorerUrl: "https://explorer.mainnet.near.org",
};
export default {
  name: "viewCollections",
  i18n: require("./i18n"),
  data() {
    return {
      seeMoreDis: false,
      seeMoreVisible: true,
      variableCarga: false,
      image: require('@/assets/nfts/nft1.png'),
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
        img: null,
        name: null,
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
      dataControls: [
        { id: 0, name: "Any", active: true },
        { id: 1, name: "By high price", active: false },
        { id: 2, name: "By low price", active: false },
      ],
      search: "",
      limit: 20,
      index: 0,
      dataList: [],
      dataList2: [],
      contract_nft: this.$route.params.id
    }
  },
  async mounted() {
    console.log(this.contract_nft)
    this.getNftCollection()
    this.getDataCollection()
  },
  methods: {
    conversion(item) {
      console.log(item)
      return item
    },
    orderList (item) {
      console.log(item)
      this.variableCarga = false
      if (item.id === 0) {
        this.dataControls[0].active = true
        this.dataControls[1].active = false
        this.dataControls[2].active = false
      } else if (item.id === 1) {
        this.dataControls[0].active = false
        this.dataControls[1].active = true
        this.dataControls[2].active = false
      }
      else if (item.id === 2) {
        this.dataControls[0].active = false
        this.dataControls[1].active = false
        this.dataControls[2].active = true
      }
      this.getNftCollection()
    },
    async getNftCollection(){
      this.index = 0
      const url = "api/v1/listnft"
      let item = {
        "collection": this.contract_nft,
        "marketplace": "%",
        "limit": this.limit,
        "index": this.index,
        "sales": "true",
        "order": "",
        "type_order": ""
      }

      if (this.dataControls[0].active === true) {
        console.log("entro aqui")
        item.order = ""
        item.type_order = ""
      }
      else if (this.dataControls[1].active === true) {
        console.log("entro aqui2")
        item.order = "precio"
        item.type_order = "desc"
      }
      else if (this.dataControls[2].active === true) {
        console.log("entro aqui3")
        item.order = "precio"
        item.type_order = "asc"
      }
      console.log("COLLECION", item)
      this.axios.post(url, item)
        .then((response) => {
          console.log("NFTS", response.data)
          this.dataList2 = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              nft: response.data[i].media,//,
              name: response.data[i].titulo + " #" + response.data[i].token_id,
              contract: response.data[i].collection,
              marketplace: response.data[i].marketplace,
              price: utils.format.formatNearAmount(response.data[i].precio),
            }
            this.dataList2.push(collection)
          }
          this.dataList = this.dataList2
          this.index = this.dataList.length
          console.log("INDx", this.index)
          //this.dataList = this.dataList.concat(this.dataList2)
          this.variableCarga = true
          this.verifyMore()
        }).catch((error) => {
          console.log("ERRORRRR",error)
        })
    },
    async seeMore(){
      this.seeMoreDis = true
      const url = "api/v1/listnft"
      let item = {
        "collection": this.contract_nft,
        "marketplace": "%",
        "limit": this.limit,
        "index": this.index,
        "sales": "true",
        "order": "precio",
        "type_order": "asc"
      }

      console.log("ENTRO")
      
      this.axios.post(url, item)
        .then((response) => {
          this.dataList2 = []
          console.log("SEEMORE", response.data)
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              nft: response.data[i].media,//,
              name: response.data[i].titulo + " #" + response.data[i].token_id,
              contract: response.data[i].collection,
              marketplace: response.data[i].marketplace,
              price: utils.format.formatNearAmount(response.data[i].precio),
            }
            this.dataList2.push(collection)
          }
          this.dataList = this.dataList.concat(this.dataList2)
          this.index = this.dataList.length
          this.seeMoreDis = false
          this.verifyMore()
        }).catch((error) => {
          this.seeMoreDis = false
          console.log("ERRORRRR",error)
        })
    },
    async verifyMore(){
      const url = "api/v1/listnft"
      let item = {
        "collection": this.contract_nft,
        "marketplace": "%",
        "limit": this.limit,
        "index": this.index,
        "sales": "true",
        "order": "precio",
        "type_order": "asc"
      }
      
      this.axios.post(url, item)
        .then((response) => {
          if (response.data.length === 0) {
            this.seeMoreVisible = false
          }
        }).catch((error) => {
          console.log("ERRORRRR",error)
        })
    },
    async getDataCollection(){
      const url = "api/v1/collectiondetails"
      let item = {
        "collection": this.contract_nft,
      }
      console.log("DATA", this.contract_nft)
      this.axios.post(url, item)
        .then((response) => {
          console.log("DATA1", response.data[0])
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
        console.log("DATA", data)
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

<style src="./ViewCollections.scss" lang="scss" />
