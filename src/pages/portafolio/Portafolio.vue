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
        class="customeFilter search"
      ></v-text-field> -->
    </aside>

    <section class="container-profit fwrap spacee acenter gap2">
      <v-card v-for="(item,i) in dataProfit" :key="i"
        class="card" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,2vw,2em);--b:none">
        <v-sheet :title="item.token" class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
          <aside class="divcol" style="gap:.5em">
            <div class="space gap2">
              <div class="acenter" style="gap:.5em">
                <img  :src="require(`@/assets/token/${item.img}`)" alt="near" style="--w:2.2em; --h:2.2em">
                <h3 class="h7_em p bold">{{item.crypto}}</h3>
              </div>

              <!-- <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                --c:${item.state_percent?'var(--success)':'var(--error)'}`">
                {{item.state_percent?'+':'-'}}{{item.percent}}%
              </v-chip> -->
            </div>
            <span class="h11_em">$ <span class="light">{{item.dollar}}</span></span>
          </aside>
<!-- 
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
          </aside> -->
        </v-sheet>
      </v-card>
    </section>

    <aside class="container-controls space gap2 wrap responsive_controls">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControlsCharts" :key="i" @click="dataControlsCharts.forEach(e=>{e.active=false});item.active=true">
          <v-icon>mdi-{{item.icon}}</v-icon>
          <h6 class="p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>

      <!-- <v-tabs class="tab-right doble">
        <v-tab>
          <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
        </v-tab>
        <v-tab style="color:#FFFFFF">
          $
        </v-tab>
      </v-tabs> -->
    </aside>

    <section class="container-charts card" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,1vw,2em);--b:none">
      <!-- <LineChart ref="linechart" v-show="dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='line')].active"></LineChart> -->
      <PieChart ref="piechart" v-show="dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='pie')].active"></PieChart>
      
      <section v-show="dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='statistics')].active" class="container-profit divcol gap2">
        <!-- profit -->
        <!-- <v-card class="card profit" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,2vw,2em);--b:none">
          <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
            <aside class="divcol" style="gap:.5em">
              <div class="space gap2">
                <h3 class="h7_em p bold">Total Profit / Loss</h3>
                
                <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                  --c:${dataStatistics.profit.percent.includes('+')?'var(--success)':'var(--error)'}`">
                  {{dataStatistics.profit.percent}}%
                </v-chip>
              </div>

              <div class="acenter" style="gap:.2em">
                <img src="@/assets/logos/near.svg" alt="near" style="--w:1.055625em">
                <span class="bold">{{dataStatistics.profit.crypto}}</span>
              </div>
            </aside>

            <span>$ {{dataStatistics.profit.dollar}}</span>
          </v-sheet>
        </v-card> -->

        <div class="fwrap spacee acenter gap2 gap2">
          <!-- near -->
          <v-card class="card" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,2vw,2em);--b:none">
            <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
              <aside class="divcol" style="gap:.5em">
                <div class="space gap2">
                  <div class="acenter" style="gap:.5em">
                    <img src="@/assets/token/near.svg" alt="econear" style="--w:2.2em">
                    <h3 class="h7_em p bold">NEAR</h3>
                  </div>

                  <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                    --c:${dataStatistics.near.percent.includes('+')?'var(--success)':'var(--error)'}`">
                    <span v-if="dataStatistics.near.percent != '---'" >{{dataStatistics.near.percent}}%</span> 
                    <span v-else >{{dataStatistics.near.percent}}</span> 
                  </v-chip>
                </div>
                <span class="h11_em">Best Performace</span>
              </aside>

              <aside class="divcol" style="gap:.2em">
                <!-- <div class="acenter" style="gap:.2em">
                  <img src="@/assets/logos/econear.svg" alt="econear" style="--w:1.055625em">
                  <span class="bold">{{dataStatistics.econear.crypto}}</span>
                </div> -->

                <span v-if="dataStatistics.near.dollar != '---'">$ {{dataStatistics.near.dollar}}</span>
                <span v-else >{{dataStatistics.near.dollar}}</span>
              </aside>
            </v-sheet>
          </v-card>
          
          <!-- usdt -->
          <v-card class="card" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,2vw,2em);--b:none">
            <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
              <aside class="divcol" style="gap:.5em">
                <div class="space gap2">
                  <div class="acenter" style="gap:.5em">
                    <img src="@/assets/token/usdt.svg" alt="econear" style="--w:2.2em">
                    <h3 class="h7_em p bold">USDT</h3>
                  </div>

                  <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                    --c:${dataStatistics.usdt.percent.includes('+')?'var(--success)':'var(--error)'}`">
                    <span v-if="dataStatistics.usdt.percent != '---'" >{{dataStatistics.usdt.percent}}%</span> 
                    <span v-else >{{dataStatistics.usdt.percent}}</span> 
                  </v-chip>
                </div>
                <span class="h11_em">Best Performace</span>
              </aside>

              <aside class="divcol" style="gap:.2em">
                <!-- <div class="acenter" style="gap:.2em">
                  <img src="@/assets/logos/econear.svg" alt="econear" style="--w:1.055625em">
                  <span class="bold">{{dataStatistics.econear.crypto}}</span>
                </div> -->

                <span v-if="dataStatistics.usdt.dollar != '---'">$ {{dataStatistics.usdt.dollar}}</span>
                <span v-else >{{dataStatistics.usdt.dollar}}</span>
              </aside>
            </v-sheet>
          </v-card>

           <!-- usdc -->
           <v-card class="card" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,2vw,2em);--b:none">
            <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
              <aside class="divcol" style="gap:.5em">
                <div class="space gap2">
                  <div class="acenter" style="gap:.5em">
                    <img src="@/assets/token/usdc.svg" alt="econear" style="--w:2.2em">
                    <h3 class="h7_em p bold">USDC</h3>
                  </div>

                  <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                    --c:${dataStatistics.usdc.percent.includes('+')?'var(--success)':'var(--error)'}`">
                    <span v-if="dataStatistics.usdc.percent != '---'" >{{dataStatistics.usdc.percent}}%</span> 
                    <span v-else >{{dataStatistics.usdc.percent}}</span> 
                  </v-chip>
                </div>
                <span class="h11_em">Best Performace</span>
              </aside>

              <aside class="divcol" style="gap:.2em">
                <!-- <div class="acenter" style="gap:.2em">
                  <img src="@/assets/logos/econear.svg" alt="econear" style="--w:1.055625em">
                  <span class="bold">{{dataStatistics.econear.crypto}}</span>
                </div> -->

                <span v-if="dataStatistics.usdc.dollar != '---'">$ {{dataStatistics.usdc.dollar}}</span>
                <span v-else >{{dataStatistics.usdc.dollar}}</span>
              </aside>
            </v-sheet>
          </v-card>

          <!-- dai -->
          <v-card class="card" style="--bg:hsl(212 47% 12% / .5);--p:clamp(.8em,2vw,2em);--b:none">
            <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
              <aside class="divcol" style="gap:.5em">
                <div class="space gap2">
                  <div class="acenter" style="gap:.5em">
                    <img src="@/assets/token/dai.svg" alt="econear" style="--w:2.2em">
                    <h3 class="h7_em p bold">DAI</h3>
                  </div>

                  <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                    --c:${dataStatistics.dai.percent.includes('+')?'var(--success)':'var(--error)'}`">
                    <span v-if="dataStatistics.dai.percent != '---'" >{{dataStatistics.dai.percent}}%</span> 
                    <span v-else >{{dataStatistics.dai.percent}}</span> 
                  </v-chip>
                </div>
                <span class="h11_em">Best Performace</span>
              </aside>

              <aside class="divcol" style="gap:.2em">
                <!-- <div class="acenter" style="gap:.2em">
                  <img src="@/assets/logos/econear.svg" alt="econear" style="--w:1.055625em">
                  <span class="bold">{{dataStatistics.econear.crypto}}</span>
                </div> -->

                <span v-if="dataStatistics.dai.dollar != '---'">$ {{dataStatistics.dai.dollar}}</span>
                <span v-else >{{dataStatistics.dai.dollar}}</span>
              </aside>
            </v-sheet>
          </v-card>
        </div>
      </section>
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

        <!-- <v-tabs class="tab-right doble" >
          <v-tab @click="changeCoin('near')">
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF;font-size:1em" @click="changeCoin('dolar')">
            $
          </v-tab>
        </v-tabs> -->
      </div>
    </aside>

    <!-- tabla  -->
    <v-data-table
      v-if="organizationStyle"
      id="dataTable"
      class="card"
      :headers="headersTable"
      :items="dataTable"
      
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
        <span :title="item.token_id">
          {{verificar(item.token_id, 14)}}
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
          <span :title="item.name" class="Title tcenter h11_em">{{verificar(item.name, 20)}}</span>
          <div class="space h11_em">
            <span>Token ID</span>
            <span :title="item.token_id">
              {{verificar(item.token_id, 14)}}
            </span>
            <!-- <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
              {{item.state_change?'+':'-'}}{{item.change}}%
            </span> -->
          </div>

          <!-- <div class="space h11_em">
            <span>Price</span>
            <span v-show="seeCoin == 1">{{item.price}}</span>
            <span v-show="seeCoin == 2">{{item.price_usd}}</span>
          </div> -->

          <!-- <div class="space h11_em">
            <span>Floor Price</span>
            <span>{{item.price}}</span>
          </div> -->

          <!-- <div class="space h11_em">
            <span>Market</span>
            <span>{{item.market_name}}</span>
          </div> -->

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
          token: "NEAR",
          img: "near.svg",
          crypto: null,
          dollar: null,
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        // {
        //   token: "ethereum",
        //   crypto: "36,379",
        //   dollar: "32,245.65",
        //   percent: 1.8,
        //   state_percent: false,
        //   change: "8,747",
        //   state_change: false,
        //   profit: "28,747",
        //   state_profit: true,
        // },
        {
          token: "USDT",
          img: "usdt.svg",
          crypto: null,
          dollar: null,
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "USDC",
          img: "usdc.svg",
          crypto: null,
          dollar: null,
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "DAI",
          img: "dai.svg",
          crypto: null,
          dollar: null,
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "UTO",
          img: "uto.svg",
          crypto: null,
          dollar: null,
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "NEXP",
          img: 'nexp.png',
          crypto: null,
          dollar: null,
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        }
      ],
      dataControlsCharts: [
        // { key: "line", icon: "chart-line", name: "Line Chart", active: true },
        { key: "pie", icon: "chart-pie", name: "Pie Chart", active: true },
        { key: "statistics", icon: "chart-line-variant", name: "Statistics", active: false },
      ],
      dataStatistics: {
        profit: {
          crypto: "46,529",
          dollar: "232,245.65",
          percent: "+12.8",
        },
        near: {
          crypto: "---",
          dollar: "---",
          percent: "---",
        },
        usdt: {
          crypto: "---",
          dollar: "---",
          percent: "---",
        },
        usdc: {
          crypto: "---",
          dollar: "---",
          percent: "---",
        },
        dai: {
          crypto: "---",
          dollar: "---",
          percent: "---",
        },
      },
      organizationStyle: true,
      headersTable: [
        { value: "nft", text: "NFT", align: "center", sortable: false },
        { value: "token_id", text: "Token ID", align: "center", sortable: false },
        // { value: "price", text: "Price", align: "center", sortable: false },
        // { value: "market_icon", text: "Marketplace", align: "center", sortable: false },
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
    this.pushHome()
    this.priceNEAR()
    // this.getNftCollection()
    this.getNFTContractsByAccount()
    this.getPriceChange("near")
    this.getPriceChange("usdt")
    this.getPriceChange("usdc")
    this.getPriceChange("dai")
  },
  methods: {
    getPriceChange(coin) {
      this.axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + coin)
        .then((response) => {
          let data = response.data[0]
          let token

          token = {
            dollar: String(data.current_price.toFixed(2)),
            value: data.current_price,
            percent: data.price_change_percentage_24h
          }
          if (token.percent >= 0) {
            token.percent = "+" + token.percent.toFixed(2)
          } else {
            token.percent = String(token.percent.toFixed(2))
          }

          if (coin === "near" ) {
            this.dataStatistics.near = token
          } else if (coin === "usdt" ) {
            this.dataStatistics.usdt = token
          } else if (coin === "usdc" ) {
            this.dataStatistics.usdc = token
          } else if (coin === "dai" ) {
            this.dataStatistics.dai = token
          }
        })
        .catch((e) => {
          this.getPriceChangeBinance(coin)
        })
    },
    getPriceChangeBinance(coin) {
      if (coin !== 'usdt' && coin !== 'usdc') {
        this.axios.get("https://api.binance.com/api/v3/ticker/24hr?symbol=" + coin.toUpperCase() +"USDT")
          .then((response) => {
            console.log(coin, response.data)
            let data = response.data
            let token

            token = {
              dollar: String(Number(data.lastPrice).toFixed(2)),
              value: Number(data.lastPrice),
              percent: Number(data.priceChangePercent)
            }
            if (token.percent >= 0) {
              token.percent = "+" + token.percent.toFixed(2)
            } else {
              token.percent = String(token.percent.toFixed(2))
            }

            if (coin === "near" ) {
              this.dataStatistics.near = token
            } else if (coin === "usdt" ) {
              this.dataStatistics.usdt = token
            } else if (coin === "usdc" ) {
              this.dataStatistics.usdc = token
            } else if (coin === "dai" ) {
              this.dataStatistics.dai = token
            }
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
    async pushHome () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (!wallet.isSignedIn()) {
        this.$router.push("/")
      }
    },
  async getNFTContractsByAccount() {
    const near = await connect(config);
    const wallet = new WalletConnection(near)
    if (wallet.isSignedIn()) {
      let accountId = wallet.getAccountId()
      const serviceUrl = `https://api.kitwallet.app/account/${accountId}/likelyNFTs`;
      const result = await this.axios.get(serviceUrl);
      //console.log("AQUI",result.data)
      for (var i = 0; i < result.data.length; i++) {
        if (!result.data[i].includes('mintbase')) {
          await this.getNFTByContract(result.data[i], accountId)
        }
      }
    }
  },
  async getNFTByContract(contract_id, owner_account_id) {
    try {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      const contract = new Contract(wallet.account(), contract_id, {
        viewMethods: ["nft_tokens_for_owner", "nft_metadata"],
        sender: wallet.account(),
      });

      const result = await contract.nft_tokens_for_owner({
        account_id: owner_account_id,
        from_index: "0",
        limit: 100
      });

      const metadata = await contract.nft_metadata();

      for (var i = 0; i < result.length; i++) {
        let collection = { 
          img: await this.buildMediaUrl(result[i].metadata.media, metadata.base_uri) || require("@/assets/nfts/nft1.png"),
          name: result[i].metadata.title || result[i].token_id,
          desc: contract_id,
          token_id: result[i].token_id,
        }
          
        this.dataTable.push(collection)
        // await this.getNFTById(contract_id, result[i].token_id)
      }
    } catch (err) {
      console.log("err", contract_id);
      return [];
    }
  },
  buildMediaUrl (media, base_uri) {
      if (!media || media.includes('://') || media.startsWith('data:image')) {
          return media;
      }

      if (base_uri) {
          return `${base_uri}/${media}`;
      }

      return `https://cloudflare-ipfs.com/ipfs/${media}`;
  },
  async getNFTById(nft_contract_id, nft_id) {
    const near = await connect(config);
    const wallet = new WalletConnection(near)
    const contract = new Contract(wallet.account(), nft_contract_id, {
      viewMethods: ["nft_token"],
      sender: wallet.account(),
    });

    const params = { token_id: nft_id };

    const result = await contract.nft_token(params);
  },



    verificar(item, num) {
      if (item.length > num) {
        return item.substring(0, num) + "..."
      }
      return item
    },
    async getBalance () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const account = await near.account(wallet.getAccountId());
        const response = await account.state();
        let valueStorage = Math.pow(10, 19)
        let valueYocto = Math.pow(10, 24)

        const storage = (response.storage_usage * valueStorage) / valueYocto 
        this.dataProfit[0].crypto = ((response.amount / valueYocto) - storage).toFixed(2)
        this.dataProfit[0].dollar = (this.dataProfit[0].crypto * this.nearPrice).toFixed(2)
      }
    },
    changeCoin(item) {
      if (item === 'near') {
        this.seeCoin = 1
      } else {
        this.seeCoin = 2
      }
    },
    async priceNEAR(){
      this.axios.get("https://api.binance.com/api/v3/ticker/24hr?symbol=NEARUSDT")
        .then((response) => {
          this.nearPrice = response.data.lastPrice
          this.getBalance()
          this.getBalances()
        })
        .catch((e) => {
          this.getBalance()
          this.getBalances()
        })
    },

    async getBalances(){
      const near = await connect(config);
      const wallet = new WalletConnection(near);

      const url = "api/v1/YourBalance"
      let item = {
        "user_id": wallet.getAccountId(),
      }

      this.axios.post(url, item)
        .then(async (response) => {
          this.dataProfit[1].crypto = Number(response.data.saldo_usdt).toFixed(2)
          this.dataProfit[1].dollar = (this.dataProfit[1].crypto * await this.getTokenPrice("dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near")).toFixed(2)
          //this.dataProfit[1].dollar = (this.dataProfit[1].crypto * this.nearPrice).toFixed(2)

          this.dataProfit[2].crypto = Number(response.data.saldo_usdc).toFixed(2)
          this.dataProfit[2].dollar = (this.dataProfit[2].crypto * await this.getTokenPrice("a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near")).toFixed(2)
          //this.dataProfit[2].dollar = (this.dataProfit[2].crypto * this.nearPrice).toFixed(2)

          this.dataProfit[3].crypto = Number(response.data.saldo_dai).toFixed(2)
          this.dataProfit[3].dollar = (this.dataProfit[3].crypto * await this.getTokenPrice("6b175474e89094c44da98b954eedeac495271d0f.factory.bridge.near")).toFixed(2)
          //this.dataProfit[3].dollar = (this.dataProfit[3].crypto * this.nearPrice).toFixed(2)

          this.dataProfit[4].crypto = Number(response.data.saldo_uto).toFixed(2)
          this.dataProfit[4].dollar = (this.dataProfit[4].crypto * await this.getTokenPrice("utopia.secretskelliessociety.near")).toFixed(2)
          //this.dataProfit[4].dollar = (this.dataProfit[4].crypto * this.nearPrice).toFixed(2)

          this.dataProfit[5].crypto = Number(response.data.saldo_nexp).toFixed(2)
          this.dataProfit[5].dollar = (this.dataProfit[5].crypto * await this.getTokenPrice("nexp.near")).toFixed(2)
          //this.dataProfit[5].dollar = (this.dataProfit[5].crypto * this.nearPrice).toFixed(2)

          let chartSeries = [Number(this.dataProfit[0].dollar), Number(this.dataProfit[1].dollar), Number(this.dataProfit[2].dollar), Number(this.dataProfit[3].dollar), Number(this.dataProfit[4].dollar), Number(this.dataProfit[5].dollar)]

          this.$refs.piechart.getGrafica(chartSeries)
        }).catch((error) => {
          console.log(error)
        })
    },
    async getTokenPrice(token) {
      let result = await this.axios.get("https://indexer.ref.finance/get-token-price?token_id=" + token)
        .then((response) => {
          if (response.data.price === "N/A") {
            return 0
          }
          return response.data.price
        })
        .catch((e) => {
          return 0
        })

      return Number(result)
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
              // price_yocto: response.data[i].precio,
              // market_icon: response.data[i].market_icon,
              // market_name: response.data[i].market_name || "-",
              // marketplace: response.data[i].marketplace || "-",
              // holdings: "1234/3333",
              // state_change: false,
              // rarity: "common",
            }
            if (collection.price_yocto) {
              collection.price = utils.format.formatNearAmount(collection.price_yocto) + " N"
              collection.price_usd = (utils.format.formatNearAmount(collection.price_yocto) * this.nearPrice).toFixed(2) + " $"
            } else {
              collection.price = "-"
              collection.price_usd = "-"
            }
            
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
