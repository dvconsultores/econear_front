<template>
  <section id="portafolio" class="divcol gap2">
    <aside id="container-header" class="divcol center tcenter align">
      <h2 class="h5_em p">My portfolio</h2>
      <!-- <v-text-field
        v-model="search"
        hide-details
        solo
        label="Search for wallets"
        append-icon="mdi-magnify"
        style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF"
        class="customeFilter"
      ></v-text-field> -->
    </aside>

    <section class="container-profit fwrap spacee acenter gap2">
      <v-card v-for="(item,i) in dataProfit" :key="i"
        class="card" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,2vw,2em);--b:none">
        <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
          <aside class="divcol" style="gap:.5em">
            <div class="space gap2">
              <div class="acenter" style="gap:.5em">
                <img :src="require(`@/assets/logos/${item.token}.svg`)" alt="near" style="--w:2.2em; --h:2.2em">
                <h3 class="h7_em p bold">{{item.crypto}}</h3>
              </div>

              <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                --c:${item.state_percent?'var(--success)':'var(--error)'}`">
                {{item.state_percent?'+':'-'}}{{item.percent}}%
              </v-chip>
            </div>
            <span class="h11_em">$ <span class="light">{{item.dollar}}</span></span>
          </aside>

          <aside class="divcol" style="gap:.2em">
            <span>
              24h change
              <span class="margin2left" :style="item.state_change?'color:var(--success)':'color:var(--error)'">
                {{item.state_change?'+':'-'}}{{item.change}}
              </span>
            </span>

            <span>
              All time profit/loss
              <span class="margin2left" :style="item.state_profit?'color:var(--success)':'color:var(--error)'">
                {{item.state_profit?'+':'-'}}{{item.profit}}
              </span>
            </span>
          </aside>
        </v-sheet>
      </v-card>
    </section>

    <aside class="space gap2 responsive_controls">
      <h2 class="h9_em p">Assets</h2>

      <div class="acenter gap1">
        <v-tabs class="tab-right doble">
          <v-tab @click="organizationStyle=true">
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-tab>
          <v-tab @click="organizationStyle=false">
            <v-icon>mdi-view-grid</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs class="tab-right doble" >
          <v-tab @click="changeCoin('near')">
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF;font-size:1em" @click="changeCoin('dolar')">
            $
          </v-tab>
        </v-tabs>
      </div>
    </aside>

    <!-- tabla  -->
    <v-data-table
      v-if="organizationStyle"
      id="dataTable"
      class="card"
      :headers="headersTable"
      :items="dataTable"
      hide-default-footer
      mobile-breakpoint="-1"
      style="--p:clamp(1em,2vw,2em)"
    >
      <template v-slot:[`item.nft`]="{ item }">
        <div class="center gap1 h11_em">
          <img class="aspect" :src="item.img" alt="nft" style="--w:4.710625em">
          <div class="divcol tstart" style="width:170px">
            <span>{{item.name}}</span>
            <span>{{item.desc}}</span>
          </div>
        </div>
      </template>

      <template v-slot:[`item.token_id`]="{ item }">
        <!-- <span :style="item.state_change?'color:#22B573':'color:var(--error)'"> -->
        <span>
          {{item.token_id}}
        </span>
      </template>
      <template v-slot:[`item.price`]="{ item }">
        <span v-show="seeCoin == 1">
          {{item.price}}
        </span>
        <span v-show="seeCoin == 2">
          {{item.price_usd}}
        </span>
      </template>
      <template v-slot:[`item.market_icon`]="{ item }">
        <img v-if="item.market_icon" :title="item.market_name" :src="item.market_icon" alt="market">
        <span v-else>
          {{item.marketplace}}
        </span>
        <!-- <span>
          {{item.marketplace}}
        </span> -->
      </template>
    </v-data-table>

    <!-- mosaico -->
    <section v-if="!organizationStyle" class="mosaico card grid"
      style="--gtc: repeat(auto-fit, minmax(min(100%,var(--size)),1fr)); gap:1.5em;--p:clamp(1em,2vw,2em);--size:16.2225em">
      <v-card v-for="(item,i) in dataTable" :key="i" class="divcol alignmobile" color="#112131" style="border-radius: .4vmax">
        <img class="h11_em" :src="item.img" alt="nft" style="--w:100%">
        <aside class="contenido divcol" style="gap:.2em">
          <span class="Title tcenter h11_em">{{item.name}}</span>
          <div class="space h11_em">
            <span>Token ID</span>
            <span>
              {{item.token_id}}
            </span>
            <!-- <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
              {{item.state_change?'+':'-'}}{{item.change}}%
            </span> -->
          </div>

          <div class="space h11_em">
            <span>Price</span>
            <span v-show="seeCoin == 1">{{item.price}}</span>
            <span v-show="seeCoin == 2">{{item.price_usd}}</span>
          </div>

          <!-- <div class="space h11_em">
            <span>Floor Price</span>
            <span>{{item.price}}</span>
          </div> -->

          <div class="space h11_em">
            <span>Market</span>
            <span>{{item.market_name}}</span>
          </div>

          <!-- <div class="space">
            <span class="h11_em">Rarity</span>
            <v-chip style="border-radius: .3vmax"
              :color="item.rarity=='rare'?'#26A17B':
              item.rarity=='common'?'var(--warning)':
              item.rarity=='legendary'?'#0000B6':
              item.rarity=='mystic'?'#6A25D2':null">
              <span class="tfirst h11_em">{{item.rarity}}</span>
            </v-chip>
          </div> -->
        </aside>
      </v-card>
    </section>
  </section>
</template>

<script>
import LineChart from './chart/LineChart.vue'
import PieChart from './chart/PieChart.vue'
import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'
import {Action, createTransaction, functionCall} from 'near-api-js/lib/transaction'
import { base_decode } from 'near-api-js/lib/utils/serialize'
import { PublicKey } from 'near-api-js/lib/utils'

const { connect, transactions, keyStores, WalletConnection, Contract, utils } = nearAPI
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
  name: "portafolio",
  i18n: require("./i18n"),
  components: { LineChart, PieChart },
  data() {
    return {
      search: "",
      dataProfit: [
        {
          token: "near",
          crypto: "46,529",
          dollar: "232,245.65",
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "ethereum",
          crypto: "36,379",
          dollar: "32,245.65",
          percent: 1.8,
          state_percent: false,
          change: "8,747",
          state_change: false,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "usdt",
          crypto: "46,529",
          dollar: "232,245.65",
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "usdc",
          crypto: "46,529",
          dollar: "232,245.65",
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "dai",
          crypto: "46,529",
          dollar: "232,245.65",
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
      ],
      dataControlsCharts: [
        { key: "line", icon: "chart-line", name: "Line Chart", active: true },
        { key: "pie", icon: "chart-pie", name: "Pie Chart", active: false },
        { key: "statistics", icon: "chart-line-variant", name: "Statistics", active: false },
      ],
      dataStatistics: {
        profit: {
          crypto: "46,529",
          dollar: "232,245.65",
          percent: "+12.8",
        },
        econear: {
          crypto: "36,379",
          dollar: "32,245.65",
          percent: "-1.8",
        },
        near: {
          crypto: "46,529",
          dollar: "232,245.65",
          percent: "+12.8",
        },
      },
      organizationStyle: true,
      headersTable: [
        { value: "nft", text: "NFT", align: "center", sortable: false },
        { value: "token_id", text: "Token ID", align: "center", sortable: false },
        { value: "price", text: "Price", align: "center", sortable: false },
        { value: "market_icon", text: "Marketplace", align: "center", sortable: false },
        // { value: "holdings", text: "Holdings", align: "center", sortable: false },
      ],
      dataTable2: [],
      dataTable: [
        // { 
        //   img: require('@/assets/images/c2.png'),
        //   name: "Collection o Nft Name",
        //   desc: "Lorem ipum dolor sit",
        //   token_id: "0.89",
        //   price: "104.4 N",
        //   market_icon: require('@/assets/images/c2.png'),
        //   marketplace: "marketplace.paras.near",
        //   holdings: "1234/3333",
        //   state_change: false,
        //   rarity: "common",
        // }
      ],
      index: 0,
      nearPrice: 0,
      seeCoin: 1
    }
  },
  async mounted() {
    await this.priceNEAR()
    this.getNftCollection()
    
  },
  methods: {
    changeCoin(item) {
      if (item === 'near') {
        this.seeCoin = 1
      } else {
        this.seeCoin = 2
      }
    },
    async priceNEAR(){
      this.axios.get("https://nearblocks.io/api/near-price")
        .then((response) => {
          this.nearPrice = response.data.usd
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async getNftCollection(){
      const near = await connect(config);
      const wallet = new WalletConnection(near);

      const url = "api/v1/ListNftOwner"
      let item = {
        "owner": wallet.getAccountId(),//"legendkiller.near",
        "limit": "20",
        "index": this.index
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataTable2 = []

          for (var i = 0; i < response.data.length; i++) {
          
            let collection = { 
              index: this.index + i,
              img: response.data[i].media || require("@/assets/nfts/nft1.png"),
              name: response.data[i].titulo,
              desc: response.data[i].collection,
              token_id: response.data[i].token_id,
              price_yocto: response.data[i].precio,
              market_icon: response.data[i].market_icon,
              market_name: response.data[i].market_name || "-",
              marketplace: response.data[i].marketplace || "-",
              holdings: "1234/3333",
              state_change: false,
              rarity: "common",
            }
            if (collection.price_yocto) {
              collection.price = utils.format.formatNearAmount(collection.price_yocto) + " N"
              collection.price_usd = utils.format.formatNearAmount(collection.price_yocto) * this.nearPrice + " $"
            } else {
              collection.price = "-"
              collection.price_usd = "-"
            }

            console.log(collection)
            
            this.dataTable2.push(collection)
            //this.dataNfts.push(collection)
          }
          this.dataTable = this.dataTable2
          this.index = this.dataTable.length
          //this.verifyMore()

        }).catch((error) => {
          console.log(error)
        })
    },
  }
};
</script>

<style src="./Portafolio.scss" lang="scss" />
