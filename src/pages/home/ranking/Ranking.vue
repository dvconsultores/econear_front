<template>
  <section id="ranking" class="divcol gap2">
    <!-- <h2 class="h7_em p">All Time Best</h2> -->

    <aside class="container-controls space gap2 fwrap_inv" style="--fb: 1 1 200px">
      <v-tabs v-model="tab">
        <v-tab v-for="(item,i) in dataControls" :key="i" class="options" @click="getRanking(collection, item)">
          <h6 class="p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>

      <v-text-field
        v-model="search"
        hide-details
        solo
        label="Search for NFT's and collections"
        append-icon="mdi-magnify"
        style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
        class="customeFilter search openRankingSearch"
        autocomplete="off"
        @click:append="searchCollection()"
        @keydown.enter.prevent="searchCollection()"
        @input="inputSearch()"
      ></v-text-field>
    </aside>

    <v-menu ref="menu" v-model="menuSearch" bottom offset-y activator=".openRankingSearch">
      <v-list id="menuSearch" class="card scrolly" v-show="dataMenuSearch.length != 0">
        <v-list-item v-for="(item,i) in dataMenuSearch" :key="i" @click="getRanking(item.contract)" v-show="dataMenuSearch.length != 0">
          <img :src="item.img" alt="referencial image">
          <div class="divcol">
            <h6 class="p bold">{{item.name}}</h6>
            <span>{{item.contract}}</span>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- tabla 1  -->
    <v-data-table
      v-if="dataTableBool"
      id="dataTable"
      class="card"
      :search="searchTable"
      :headers="headersTable"
      :items="dataTable"
      hide-default-footer
      mobile-breakpoint="-1"
      :items-per-page="dataTable.length"
    >
      <template v-slot:[`header.volume`]>
        <button class="acenter align" style="cursor:default;gap:.2em">
          <label for="volume" style="cursor:pointer">Volume</label>
          <v-select
            id="volume"
            v-model="sort.volume.value"
            :items="sort.volume.items"
            solo
            hide-details
            append-icon="mdi-chevron-down"
            style="--w:min-content;--h:24px;--p:0 0 0 .5em;--bg:#0D2C3F;--bs: 3px 0 5px 1px rgb(0,0,0,.4);--c:#FFFFFF;--br:.4vmax"
            @change="getRanking()"
          ></v-select>
        </button>
      </template>

      <!-- <template v-slot:[`header.price`]>
        <button class="acenter align" style="cursor:default;gap:.2em">
          <label for="price" style="cursor:pointer">Floor price</label>
          <v-select
            id="price"
            v-model="sort.price.value"
            :items="sort.price.items"
            solo
            hide-details
            append-icon="mdi-chevron-down"
            style="--w:min-content;--h:24px;--p:0 0 0 .5em;--bg:#0D2C3F;--bs: 3px 0 5px 1px rgb(0,0,0,.4);--c:#FFFFFF;--br:.4vmax"
            @change="getRanking()"
          ></v-select>
        </button>
      </template> -->

      <template v-slot:[`item.number`]="{ item }">
        <span>{{dataTable.indexOf(item)+1}}</span>
      </template>

      <template v-slot:[`item.name`]="{ item }">
        <!-- @click="$router.push('/project-details')" -->
        <div class="nftDetail start gap1" @click="$router.push(`/project-details/${item.contract_id}`)">
          <img class="aspect" :src="item.img || image" alt="nft" style="--w:4.710625em">
          <div class="divcol tstart">
            <span>{{item.name}}</span>
            <span>{{item.desc}}</span>
          </div>
        </div>
      </template>

      <template v-slot:[`item.volume`]="{ item }">
        <span :style="item.state_volume?'color:#22B573':'color:var(--error)'">{{item.volume}}</span>
      </template>

      <template v-slot:[`item.price`]="{ item }">
        <span :style="item.state_price?'color:#22B573':'color:var(--error)'">{{item.price}}</span>
      </template>

      <template v-slot:[`item.change`]="{ item }">
        <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
          {{item.state_change?'+':''}}{{item.change}}%
        </span>
      </template>

      <template v-slot:[`item.vote`]="{ item }">
        <div class="center" style="gap:.5em">
          <span>{{item.vote_positivo}}</span>
          <div class="acenter">
            <v-btn :class="{clr_primary: item.positivo == 1}" icon @click="votar(item.contract_id, true)">
              <img src="@/assets/icons/like.svg" alt="like">
            </v-btn>
            <v-btn :class="{clr_primary: item.negativo == 1}" :disabled="!item.permission" icon @click="votar(item.contract_id, false)">
              <img src="@/assets/icons/dislike.svg" alt="dislike">
            </v-btn>
          </div>
          <span>{{item.vote_negativo}}</span>
        </div>
      </template>

      <!-- <template v-slot:[`item.confidence`]="{ item }">
        <v-chip style="border-radius: .3vmax"
          :color="item.confidence=='high'?'#22B573':
          item.confidence=='moderate'?'var(--warning)':
          item.confidence=='low'?'var(--error)':null">
          <span class="tfirst">{{item.confidence}}</span>
        </v-chip>
      </template> -->

      <template v-slot:[`item.view`]="{ item }">
        <v-btn class="btn" @click="$router.push(`/view-collections/${item.contract_id}`)">
          View Collections
        </v-btn>
      </template>
    </v-data-table>

    <center v-else style="margin-block:10em">
      <v-progress-circular
        :size="110"
        :width="10"
        indeterminate
        color="white"
      ></v-progress-circular>
    </center>


    <!-- <section id="container-footer" class="divcol gap1" style="padding-block:6em 7em">
      <h2 class="h6_em tcenter">Want to get Your Project Listed?</h2>
      <p class="divcol center tcenter">
        <span>Can't find your project? List your favorite project now!</span>
        <span>Get your community to vote for your project and gain exposure.</span>
      </p>
      <v-btn class="h10_em btn align" style="--p:1em 1.5em">Upload Collection</v-btn>
    </section> -->
  </section>
</template>

<script>
//import MenuSearch from './MenuSearch.vue'
import axios from 'axios'
import moment from 'moment';
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
  name: "ranking",
  i18n: require("./i18n"),
  //components: { MenuSearch },
  data() {
    return {
      collection: null,
      menuSearch: false,
      dataMenuSearch: [],
      dataTableBool: false,
      image: require('@/assets/nfts/nft1.png'),
      search: "",
      searchTable: "",
      tab: 0,
      dataControls: [
        { key: 'collection', id: 1, name: "All Time Best", active: false },
        { key: 'floor', id: 2, name: "Floor Price", active: false },
        { key: 'volume', id: 3, name: "Volume", active: false },
      ],
      //table
      sort: {
        volume: {
          value: "All time",
          items: ['24h', '48h', '7d', 'All time']
        },
        price: {
          value: "24h",
          items: ['24h', '48h', '7d']
        }
      },
      headersTable: [
        { value: "number", text: "#", align: "center", sortable: false },
        { value: "name", text: "Collection NFT", align: "center", sortable: false },
        { value: "supply", text: "Supply", align: "center", sortable: false },
        { value: "owners", text: "Owners", align: "center", sortable: false },
        { value: "volume", text: "Volume", align: "center", sortable: false },
        { value: "price", text: "Floor Price 24h", align: "center", sortable: false },
        { value: "change", text: "Change 24h", align: "center", sortable: false },
        { value: "date", text: "Launch Date", align: "center", sortable: false },
        { value: "vote", text: "Vote", align: "center", sortable: false },
        // { value: "confidence", text: "Confidence Level", align: "center", sortable: false },
        { value: "view", align: "center", sortable: false },
      ],
      dataTable: [
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   name: "Collection o Nft Name",
        //   desc: "Lorem ipsum dolor sit",
        //   supply: "12,0001",
        //   volume: "1,250.104,4  N",
        //   price: "104.4 N",
        //   change: "0.89",
        //   date: "Nov / 23 / 2022",
        //   vote: "3456",
        //   confidence: "high",
        //   state_volume: true,
        //   state_price: true,
        //   state_change: false,
        // },
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   name: "Collection o Nft Name",
        //   desc: "Lorem ipsum dolor sit",
        //   supply: "12,0001",
        //   volume: "1,250.104,4  N",
        //   price: "104.4 N",
        //   change: "0.89",
        //   date: "Nov / 23 / 2022",
        //   vote: "3456",
        //   confidence: "moderate",
        //   state_volume: false,
        //   state_price: false,
        //   state_change: true,
        // },
      ],
      //tabla 2
      // dataTable: {
      //   headers: [
      //     { key: "number", name: "#" },
      //     { key: "nft", name: "NFT" },
      //     { key: "supply", name: "Supply" },
      //     { key: "volume", name: "Volume", select:['24h', '7d', '30d', '90d', '1Y'] },
      //     { key: "price", name: "Floor price", select:['24h', '7d', '30d', '90d', '1Y'] },
      //     { key: "change", name: "Change 24h" },
      //     { key: "date", name: "Launch Date" },
      //     { key: "vote", name: "Vote" },
      //     { key: "confidence", name: "Confidence Level" },
      //   ],
      //   items: [
      //     {
      //       columns: [
      //         { key: "number" },
      //         { 
      //           key: "nft",
      //           img: require('@/assets/nfts/nft1.png'),
      //           name: "Collection o Nft Name",
      //           desc: "Lorem ipsum dolor sit"
      //         },
      //         { key: "supply", supply: "12,0001" },
      //         { key: "volume", volume: "1,250.104,4  N", state: true },
      //         { key: "price", price: "104.4 N", state: true },
      //         { key: "change", change: "0.89", state: false },
      //         { key: "date", date: "Nov / 23 / 2022" },
      //         { key: "vote", vote: "3456" },
      //         { key: "confidence", confidence: "high" },
      //       ]
      //     },
      //     {
      //       columns: [
      //         { key: "number" },
      //         { 
      //           key: "nft",
      //           img: require('@/assets/nfts/nft2.png'),
      //           name: "Collection o Nft Name",
      //           desc: "Lorem ipsum dolor sit"
      //         },
      //         { key: "supply", supply: "12,0001" },
      //         { key: "volume", volume: "1,250.104,4  N", state: true },
      //         { key: "price", price: "104.4 N", state: true },
      //         { key: "change", change: "0.89", state: false },
      //         { key: "date", date: "Nov / 23 / 2022" },
      //         { key: "vote", vote: "3456" },
      //         { key: "confidence", confidence: "moderate" },
      //       ]
      //     },
      //   ]
      // }
    }
  },
  async mounted() {
    this.getRanking()

    this.interval = setInterval(function () {
        this.getRanking()
    }.bind(this), 1800000);
  },
  methods: {

    inputSearch () {
      if (this.search == '' || this.search == null) {
        this.getRanking('%')
        this.dataMenuSearch = []
        this.menuSearch = false
      }
    },
    refreshVote() {
      const url = "api/v1/refreshvotes"
      this.axios.post(url)
        .then((response) => {
          document.documentElement.style.cursor = "default"
          this.getRanking()
        }).catch((error) => {
          //console.log(error)
          document.documentElement.style.cursor = "default"
        })
    },
    async votar (contract_id, vote) {
      document.documentElement.style.cursor = "progress"
      document.querySelectorAll("#ranking #dataTable .v-btn").forEach(item => item.style.pointerEvents = "none")
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['votar'],
          sender: wallet.account()
        })
        let aux = null
        await contract.votar({
          collections: contract_id,
          voto: vote,
        })
          .then((response) => {
            aux = true            
          }).catch((error) => {
            //console.log(error)
            aux = false
          })
        if (aux) {
          //setTimeout(this.refreshVote, 30000)
          this.refreshVote()
        } else {
          document.documentElement.style.cursor = "default"
          document.querySelectorAll("#vote #container-top .v-btn").forEach(item => item.style.pointerEvents = "all")
        }
      }
    },
    searchCollection() {
      let item = {
        search: this.search,
        top: 50
      }
      if (this.search) {
        const url = "api/v1/buscarcollection"
        this.axios.post(url, item)
          .then((response) => {
            this.dataMenuSearch = []
            for (var i = 0; i < response.data.length; i++) {
              let item = {
                img: response.data[i].icon,
                name: response.data[i].name,
                contract: response.data[i].nft_contract
              }
         
              this.dataMenuSearch.push(item)
            }
            this.menuSearch = true
          }).catch((error) => {
            //console.log(error)
          })
      } else {
        this.dataMenuSearch = []
        this.menuSearch = false
      }
    },
    async getRanking(collection, select){
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      this.collection = collection || this.collection
      this.dataTableBool = false
      this.dataTable = []
      const url = "api/v1/ranking"


      let item = {
        horas_vol: 24,
        horas_floor: 24,
        top: 50,
        order: null,
        collection: this.collection || '%',
        owner: wallet.getAccountId() || ""
      }

      if (this.sort.volume.value == 'All time') {
        item.horas_vol = 0
      }
      else if (this.sort.volume.value == '24h') {
        item.horas_vol = 24
      }
      else if (this.sort.volume.value == '48h') {
        item.horas_vol = 48
      }
      else if (this.sort.volume.value == '7d') {
        item.horas_vol = 168
      }

      if (this.sort.price.value == '24h') {
        item.horas_floor = 24
      }
      if (this.sort.price.value == '48h') {
        item.horas_floor = 48
      }
      if (this.sort.price.value == '7d') {
        item.horas_floor = 168
      }

      if (select) {
        if (select.id == 1) {
          item.order = "best"
        } else if (select.id == 2) {
          item.order = "floor"
        } else if (select.id == 3) {
          item.order = "volumen"
        } else {
          item.order = "best"
        }
      } else {
        item.order = "best"
      }

      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name,
              owners: response.data[i].owner_for_tokens,
              supply: response.data[i].supply,
              volume: parseFloat(response.data[i].volumen1).toFixed(2) + " N",
              price: parseFloat(response.data[i].floor_price).toFixed(2) + " N",
              change: parseFloat(response.data[i].porcentaje).toFixed(2),//"0.89",
              date: moment(response.data[i].fecha_creacion/1000000).format('YY / MM / DD'),
              contract_id: response.data[i].nft_contract,
              vote_positivo: response.data[i].voto_positivo,
              vote_negativo: response.data[i].voto_negativo,
              positivo: 0,
              negativo: 0,
              permission: response.data[i].permission_voto_nega,
              // confidence: "high",
              state_volume: true,
              state_price: true,
              state_change: true,
              desc: response.data[i].symbol,
            }
            if (response.data[i].floor_price < 0) {
              collection.state_price = false
            } 
            if (response.data[i].porcentaje < 0) {
              collection.state_change = false
            }
            this.dataTable.push(collection)
          }
          this.dataTableBool = true
          this.getVotaciones()
        }).catch((error) => {
          //console.log(error)
        })
    },
    async getVotaciones() {
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['get_voto_user'],
          sender: wallet.account()
        })
        for (var i = 0; i < this.dataTable.length; i++) {
          await contract.get_voto_user({
            collection: this.dataTable[i].contract_id,
            user_id: wallet.getAccountId(),
          })
            .then((response) => {
              this.dataTable[i].positivo = response.positivo
              this.dataTable[i].negativo = response.negativo
            }).catch((error) => {
              //console.log(error)
              this.dataTable[i].positivo = 0
              this.dataTable[i].negativo = 0
            })
        }
      }
      this.dataTableBool = true
    },
  }
};
</script>

<style src="./Ranking.scss" lang="scss" />
