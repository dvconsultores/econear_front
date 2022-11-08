<template>
  <section id="compareProjects" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Compare Projects</h2>
      <p class="h10_em" style="max-width:60ch">
        Compare any NFT Collection here
      </p>
    </aside>

    <aside id="container-vs" class="spacea acenter divcolmobile">
      <div class="aend gap1 fill_wmobile">
        <img :src="project1.img" alt="project 1" style="--w:var(--size)">
        <div class="divcol" style="width:calc(100% - var(--size))">
          <h3 class="h10_em">{{project1.name}}</h3>
          <v-text-field
            v-model="project_name1"
            solo
            hide-details
            placeholder="project name"
            class="customeFilter search openRankingSearch"
            :error="validateAccount1"
            @click:append="searchCollection()"
            @keydown.enter.prevent="searchCollection()"
            @input="inputSearch(), debounce1()"
          ></v-text-field>
        </div>
      </div>

      <v-menu ref="menu" v-model="menuSearch" bottom offset-y activator=".openRankingSearch">
        <v-list id="menuSearch" class="card scrolly" v-show="dataMenuSearch.length != 0">
          <v-list-item v-for="(item,i) in dataMenuSearch" :key="i" @click="getData(item.contract)" v-show="dataMenuSearch.length != 0">
            <img :src="item.img" alt="referencial image">
            <div class="divcol">
              <h6 class="p bold">{{item.name}}</h6>
              <span>{{item.contract}}</span>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <span class="eliminarmobile">VS</span>

      <div class="aend gap1 fill_wmobile">
        <img :src="project2.img" alt="project 2" style="--w:var(--size)">
        <div class="divcol" style="width:calc(100% - var(--size))">
          <h3 class="h10_em">{{project2.name}}</h3>
          <v-text-field
            v-model="project_name2"
            solo
            hide-details
            class="customeFilter search openRankingSearch2"
            placeholder="project name"
            :error="validateAccount2"
            @click:append="searchCollection2()"
            @keydown.enter.prevent="searchCollection2()"
            @input="inputSearch2(),debounce2()"
          ></v-text-field>
        </div>
      </div>
      <v-menu ref="menu" v-model="menuSearch2" bottom offset-y activator=".openRankingSearch2">
        <v-list id="menuSearch2" class="card scrolly" v-show="dataMenuSearch2.length != 0">
          <v-list-item v-for="(item,i) in dataMenuSearch2" :key="i" @click="getData2(item.contract)" v-show="dataMenuSearch2.length != 0">
            <img :src="item.img" alt="referencial image">
            <div class="divcol">
              <h6 class="p bold">{{item.name}}</h6>
              <span>{{item.contract}}</span>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>
    </aside>

    <v-btn id="compare-button" class="btn h10_em center align fill_wmobile" :disabled="validateDis" @click="compareFn()"
      style="--p:0 2em;--h:50px;width:13.5em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--br:10px">
      Compare
    </v-btn>    

    <template>
      <aside v-show="showCompareInfo" class="container-controls space gap2">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControls" :key="i" @click="$refs.chart.changeGrafic(item)">
            <h6 class="p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>

        <!-- <v-tabs class="tab-right">
          <v-tab>
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF">
            $
          </v-tab>
        </v-tabs> -->
      </aside>

      <section v-show="showCompareInfo" class="section-down divcol" style="gap:2em">
        <Chart ref="chart"></Chart>
        <h3 class="h9_em p">Market stats</h3>

        <v-simple-table id="market" class="dataTableSimple">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h4 class="h8_em">Projects</h4>
                </th>
                <th>
                  <center>
                    <img :src="project1.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
                <th>
                  <center>
                    <img :src="project2.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in dataTableMarket"
                :key="item.compare"
              >
                <td>{{ item.compare }}</td>
                <td v-if="item.key!=='change'&&item.key!=='confidence'" class="tcenter">{{ item.project1 }}</td>
                <td v-if="item.key!=='change'&&item.key!=='confidence'" class="tcenter">{{ item.project2 }}</td>
                <!-- if color -->
                <td v-if="item.key=='change'" class="tcenter" :style="item.state1?'color:#22B573':'color:var(--error)'">
                  {{item.state1?'+':'-'}}{{ item.project1 }}
                </td>
                <td v-if="item.key=='change'" class="tcenter" :style="item.state2?'color:#22B573':'color:var(--error)'">
                  {{item.state2?'+':'-'}}{{ item.project2 }}
                </td>
                <!-- if circle progress bar -->
                <td v-if="item.key=='confidence'" class="confidence tcenter" :style="``">
                  <v-progress-circular
                    :rotate="-90"
                    :size="80"
                    :width="15"
                    :value="item.key=='confidence'?item.project1:null"
                    color="var(--success)"
                  >
                    <span>
                      {{ item.key=='confidence'?item.project1:null }}
                    </span>
                  </v-progress-circular>
                </td>
                <td v-if="item.key=='confidence'" class="confidence tcenter" :style="``">
                  <v-progress-circular
                    :rotate="-90"
                    :size="80"
                    :width="15"
                    :value="item.key=='confidence'?item.project2:null"
                    color="var(--success)"
                  >
                    <span>
                      {{ item.key=='confidence'?item.project2:null }}
                    </span>
                  </v-progress-circular>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!-- <h3 class="h9_em p">Socials</h3>

        <v-simple-table id="social" class="dataTableSimple">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h4 class="h8_em">Projects</h4>
                </th>
                <th>
                  <center>
                    <img :src="project1.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
                <th>
                  <center>
                    <img :src="project2.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in dataTableSocials"
                :key="item.compare"
              >
                <td>{{ item.compare }}</td>
                <td class="tcenter">{{ item.project1 }}</td>
                <td class="tcenter">{{ item.project2 }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->

        <!-- <h3 class="h9_em p">Additional Information</h3>

        <v-simple-table id="aditional" class="dataTableSimple">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h4 class="h8_em">Projects</h4>
                </th>
                <th>
                  <center>
                    <img :src="project1.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
                <th>
                  <center>
                    <img :src="project2.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in dataTableAdditional"
                :key="item.compare"
              >
                <td>{{ item.compare }}</td>
                <template v-if="item.key=='buy'">
                  <td class="tcenter">
                    <span class="center" style="gap:.8em">
                      <img :src="item.market1" alt="market 1" style="--w:1.5625em">
                      {{ item.project1 }}
                    </span>
                  </td>
                  <td class="tcenter">
                    <span class="center" style="gap:.8em">
                      <img :src="item.market2" alt="market 2" style="--w:1.5625em">
                      {{ item.project2 }}
                    </span>
                  </td>
                </template>
                <template v-if="item.key=='royalties'">
                  <td class="tcenter">{{ item.project1 }}</td>
                  <td class="tcenter">{{ item.project2 }}</td>
                </template>
                <template v-if="item.key=='watchlist'">
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/${item.project1}.svg`)" style="--w:4em">
                    </center>
                  </td>
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/${item.project2}.svg`)" style="--w:4em">
                    </center>
                  </td>
                </template>
                <template v-if="item.key=='alert'">
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/bell${item.project1?'':'-outline'}.svg`)" style="--w:1.5em">
                    </center>
                  </td>
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/bell${item.project2?'':'-outline'}.svg`)" style="--w:1.5em">
                    </center>
                  </td>
                </template>
                <template v-if="item.key=='category'">
                  <td class="tcenter">{{item.project1}}</td>
                  <td class="tcenter">{{item.project2}}</td>
                </template>
                <template v-if="item.key=='contract'">
                  <td class="tcenter">{{item.project1}}</td>
                  <td class="tcenter">{{item.project2}}</td>
                </template>
                <template v-if="item.key=='verification'">
                  <td class="tcenter">
                    <v-chip class="btn" :style="`--bs:none;--bg:transparent;
                      --b:1px solid ${item.project1?'var(--success)':'var(--error)'};--p:.5em .7em`">
                      <v-icon :style="`color:${item.project1?'var(--success)':'var(--error)'} !important;margin-right:.2em`">
                        mdi-{{item.project1?'check':'close'}}
                      </v-icon>
                      {{item.project1?'Verified by Econear':'No verified'}}
                    </v-chip>
                  </td>
                  <td class="tcenter">
                    <v-chip class="btn" :style="`--bs:none;--bg:transparent;
                      --b:1px solid ${item.project2?'var(--success)':'var(--error)'};--p: .5em.7em`">
                      <v-icon :style="`color:${item.project2?'var(--success)':'var(--error)'} !important;margin-right:.2em`">
                        mdi-{{item.project2?'check':'close'}}
                      </v-icon>
                      {{item.project2?'Verified by Econear':'No verified'}}
                    </v-chip>
                  </td>
                </template>
                <template v-if="item.key=='about'">
                  <td class="tcenter">{{item.project1}}</td>
                  <td class="tcenter">{{item.project2}}</td>
                </template>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->
      </section>
    </template>
  </section>
</template>

<script>
import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'

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
import Chart from './chart/Chart.vue'
export default {
  name: "compareProjects",
  i18n: require("./i18n"),
  components: { Chart },
  data() {
    return {
      menuSearch: false,
      dataMenuSearch: [],
      menuSearch2: false,
      dataMenuSearch2: [],
      validateDis: true,
      validateDis1: true,
      validateDis2: true,
      validateAccount1: false,
      validateAccount2: false,
      project_name1: null,
      project_name2: null,
      showCompareInfo: false,
      project1: {
        name: "Project Name 1",
        img: require('@/assets/nfts/nft1.png')
      },
      project2: {
        name: "Project Name 2",
        img: require('@/assets/nfts/nft1.png')
      },
      dataControls: [
        { name: "Floor price", active: false },
        { name: "Volume", active: false },
        { name: "Sales", active: false },
        { name: "Liquidity", active: false },
      ],
      dataTableMarket: [
        {
          compare: 'Floor Price',
          project1: null,
          project2: null,
        },
        // {
        //   key: "change",
        //   compare: 'Price change (24h)',
        //   project1: 2.62,
        //   project2: 2.62,
        //   state1: true,
        //   state2: false,
        // },
        {
          compare: 'Market Cap',
          project1: null,
          project2: null,
        },
        {
          compare: 'Volume (24h)',
          project1: null,
          project2: null,
        },
        {
          compare: 'Holders',
          project1: null,
          project2: null,
        },
        {
          compare: 'Total listed',
          project1: null,
          project2: null,
        },
        {
          compare: 'Total upvotes',
          project1: null,
          project2: null,
        },
        {
          compare: 'Total downvotes',
          project1: null,
          project2: null,
        },
        {
          compare: 'Supply',
          project1: null,
          project2: null,
        },
        // {
        //   compare: 'Average price (24h)',
        //   project1: 21.6,
        //   project2: 21.6,
        // },
        {
          compare: 'Lowest sale (24h)',
          project1: null,
          project2: null,
        },
        {
          compare: 'Highest sale (24h)',
          project1: null,
          project2: null,
        },
        // {
        //   compare: 'Rank by volume (7d)',
        //   project1: '9th rank',
        //   project2: '9th rank',
        // },
        // {
        //   compare: 'Rank by Marketcap',
        //   project1: '11th rank',
        //   project2: '12th rank',
        // },
        // {
        //   key: "confidence",
        //   compare: 'Confidence percentage',
        //   project1: '89%',
        //   project2: '89%',
        // },
      ],
      dataTableSocials: [
        {
          compare: 'Discord',
          project1: '5.80k',
          project2: '6.80k',
        },
        {
          compare: 'Twitter',
          project1: '12.9k',
          project2: '14.9k',
        },
        {
          compare: 'Instagram',
          project1: '9k',
          project2: '10k',
        },
        {
          compare: 'Medium',
          project1: '-',
          project2: 170,
        },
        {
          compare: 'Online members (Discord)',
          project1: '-',
          project2: 1062,
        },
        {
          compare: 'Website',
          project1: 'Loremipsum.com',
          project2: 'Loremipsum.como',
        },
      ],
      dataTableAdditional: [
        {
          key: "buy",
          compare: 'Buy on',
          market1: require("@/assets/logos/market-p.svg"),
          project1: 'Paras',
          market2: require("@/assets/logos/market-p.svg"),
          project2: 'Paras',
        },
        {
          key: "royalties",
          compare: 'Royalties',
          project1: '5%',
          project2: '5%',
        },
        {
          key: "watchlist",
          compare: 'Add to watchlist',
          project1: "add",
          project2: "add",
        },
        {
          key: "alert",
          compare: 'Create alert',
          project1: true,
          project2: false,
        },
        {
          key: "category",
          compare: 'Category',
          project1: "Staking + DAO",
          project2: "Staking + DAO",
        },
        {
          key: "contract",
          compare: 'Contract address',
          project1: "nearton_nft.near",
          project2: "nearton_nft.near",
        },
        {
          key: "verification",
          compare: 'Verification',
          project1: true,
          project2: false,
        },
        {
          key: "about",
          compare: 'About project',
          project1: "The first meta town on NEAR.",
          project2: "The first meta town on NEAR.",
        },
      ],
      auxDebounce: true,
    }
  },
  async mounted() {
    await this.$store.dispatch('pushHomeNormal')
  },
  methods: {
    inputSearch () {
      if (this.project_name1 == '' || this.project_name1 == null) {
        this.dataMenuSearch = []
        this.menuSearch = false
      }
    },
    inputSearch2 () {
      if (this.project_name2 == '' || this.project_name2 == null) {
        this.dataMenuSearch2 = []
        this.menuSearch2 = false
      }
    },
    searchCollection() {
      let item = {
        search: this.project_name1,
        top: 50
      }
      if (this.project_name1) {
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
    searchCollection2() {
      let item = {
        search: this.project_name2,
        top: 50
      }
      if (this.project_name2) {
        const url = "api/v1/buscarcollection"
        this.axios.post(url, item)
          .then((response) => {
            this.dataMenuSearch2 = []
            for (var i = 0; i < response.data.length; i++) {
              let item = {
                img: response.data[i].icon,
                name: response.data[i].name,
                contract: response.data[i].nft_contract
              }
         
              this.dataMenuSearch2.push(item)
            }
            this.menuSearch2 = true
          }).catch((error) => {
            //console.log(error)
            ////console.log("juan")
          })
      } else {
        this.dataMenuSearch2 = []
        this.menuSearch2 = false
      }
    },
    compareFn() {
      this.showCompareInfo=true
      this.$refs.chart.getGraficaFloor(this.project1.collection, this.project1.name)
      this.$refs.chart.getGraficaFloor2(this.project2.collection, this.project2.name)
      this.resetData()
      this.getDataCollection1(this.project1.collection)
      this.getDataCollection2(this.project2.collection)
    },
    resetData() {
      this.dataTableMarket = [
        {
          compare: 'Floor Price',
          project1: null,
          project2: null,
        },
        {
          compare: 'Market Cap',
          project1: null,
          project2: null,
        },
        {
          compare: 'Volume (24h)',
          project1: null,
          project2: null,
        },
        {
          compare: 'Holders',
          project1: null,
          project2: null,
        },
        {
          compare: 'Total listed',
          project1: null,
          project2: null,
        },
        {
          compare: 'Total upvotes',
          project1: null,
          project2: null,
        },
        {
          compare: 'Total downvotes',
          project1: null,
          project2: null,
        },
        {
          compare: 'Supply',
          project1: null,
          project2: null,
        },
        {
          compare: 'Lowest sale (24h)',
          project1: null,
          project2: null,
        },
        {
          compare: 'Highest sale (24h)',
          project1: null,
          project2: null,
        },
      ]
    },
    getDataCollection1(collection) {
      const url = "api/v1/compareprojects"
      let item = {
        "collection": collection
      }
    
      this.axios.post(url, item)
        .then((response) => {
          let data = response.data[0]
          this.dataTableMarket[0].project1 = Number(data.floor_price).toFixed(2)
          this.dataTableMarket[1].project1 = Number(data.market_cap).toLocaleString("en-US")
          this.dataTableMarket[2].project1 = Number(data.volumen24h).toFixed(2)
          this.dataTableMarket[3].project1 = data.holders
          this.dataTableMarket[4].project1 = data.total_listed
          this.dataTableMarket[5].project1 = data.voto_positivo
          this.dataTableMarket[6].project1 = data.voto_negativo
          this.dataTableMarket[7].project1 = data.total_supply
          this.dataTableMarket[8].project1 = Number(data.low_sales24h).toFixed(2)
          this.dataTableMarket[9].project1 = Number(data.hig_sales24h).toFixed(2)
        }).catch((error) => {
          //console.log(error)
        })
    },
    getDataCollection2(collection) {
      const url = "api/v1/compareprojects"
      let item = {
        "collection": collection
      }
    
      this.axios.post(url, item)
        .then((response) => {
          let data = response.data[0]
          this.dataTableMarket[0].project2 = Number(data.floor_price).toFixed(2)
          this.dataTableMarket[1].project2 = Number(data.market_cap).toLocaleString("en-US")
          this.dataTableMarket[2].project2 = Number(data.volumen24h).toFixed(2)
          this.dataTableMarket[3].project2 = data.holders
          this.dataTableMarket[4].project2 = data.total_listed
          this.dataTableMarket[5].project2 = data.voto_positivo
          this.dataTableMarket[6].project2 = data.voto_negativo
          this.dataTableMarket[7].project2 = data.total_supply
          this.dataTableMarket[8].project2 = Number(data.low_sales24h).toFixed(2)
          this.dataTableMarket[9].project2 = Number(data.hig_sales24h).toFixed(2)
        }).catch((error) => {
          //console.log(error)
        })
    },
    debounce1() {
      clearTimeout(this.timer1)
      //this.auxDebounce = true
      this.timer1 = setTimeout(this.searchCollection, 500)
    },
    debounce2() {
      clearTimeout(this.timer2)
      //this.auxDebounce = false
      this.timer2 = setTimeout(this.searchCollection2, 500)
    },
    async validateNear() {
      var item = this.project_name1
  
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const account = await near.account(item);
      await account.state()
          .then((response) => {
            this.getData(item)
          }).catch((error) => {
            this.validateDis1 = true
            this.validateAccount1 = true
            this.project1.name = "Project Name 1",
            this.project1.img = require('@/assets/nfts/nft1.png')

            if (this.validateDis1 === false && this.validateDis2 === false) {
              this.validateDis = false
            } else {
              this.validateDis = true
            }
          })
    },
    async validateNear2() {
      var item = this.project_name2
  
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const account = await near.account(item);
      await account.state()
          .then((response) => {
            this.getData2(item)
          }).catch((error) => {
            this.validateDis2 = true
            this.project2.name = "Project Name 2",
            this.project2.img = require('@/assets/nfts/nft1.png')
            this.validateAccount2 = true

            if (this.validateDis1 === false && this.validateDis2 === false) {
              this.validateDis = false
            } else {
              this.validateDis = true
            }
          })
    },
    async getData(collection){
      const url = "api/v1/collectiondetails"
      let item = {
        "collection": collection,
      }
      this.axios.post(url, item)
        .then((response) => {
          if (response.data[0]) {
            if (response.data[0].name) {
              this.project1.name = response.data[0].name
              this.project1.img = response.data[0].icon
              this.project1.collection = collection
              this.validateAccount1 = false
              this.validateDis1 = false
            } else {
              this.project1.name = "Project Name 1",
              this.project1.img = require('@/assets/nfts/nft1.png')
              this.validateAccount1 = true
              this.validateDis1 = true
            }
          }

          if (this.validateDis1 === false && this.validateDis2 === false) {
            this.validateDis = false
          } else {
            this.validateDis = true
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async getData2(collection){
      const url = "api/v1/collectiondetails"
      let item = {
        "collection": collection,
      }
      this.axios.post(url, item)
        .then((response) => {
          if (response.data[0]) {
            if (response.data[0].name) {
              this.project2.name = response.data[0].name
              this.project2.img = response.data[0].icon
              this.project2.collection = collection
              this.validateAccount2 = false
              this.validateDis2 = false
            } else {
              this.project2.name = "Project Name 2",
              this.project2.img = require('@/assets/nfts/nft1.png')
              this.validateAccount2 = true
              this.validateDis2 = true
            }
          }

          if (this.validateDis1 === false && this.validateDis2 === false) {
            this.validateDis = false
          } else {
            this.validateDis = true
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
  }
};
</script>

<style src="./CompareProjects.scss" lang="scss" />
