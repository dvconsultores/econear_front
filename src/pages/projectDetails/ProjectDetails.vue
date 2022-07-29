<template>
  <section id="projectDetails" class="divcol">
    <aside class="container-header">
    </aside>

    <aside class="container-profile divcol center gap1 tcenter">
      <div class="contactions acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialActions" :key="i" icon style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social actions" style="--w:2.5em">
        </v-btn>
      </div>

      <v-avatar width="12.48875em" height="12.48875em">
        <img src="@/assets/images/muestra.jpg" alt="avatar" style="--b:3px solid var(--success);--w:100%">
      </v-avatar>
      <v-chip class="center" style="border-radius: .3vmax;min-width:6.174375em" color="#6A25D2">
        <span class="tfirst">Utility</span>
      </v-chip>
      <h2 class="p bold">MonkeONear Gen 0</h2>
      <div class="acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialRed" :key="i" icon :href="item.link" target="_blank" style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social red" style="--w:2.674375em">
        </v-btn>
      </div>
    </aside>

    <p class="description p align" style="max-width:65ch">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus ultrices. Nulla facilisi.
    </p>

    <v-card class="infoup card fwrap align">
      <div class="divcol">
        <label>Total Supply</label>
        <span>{{dataInfo.supply}}</span>
      </div>

      <div class="divcol">
        <label>owners</label>
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

    <section class="infodown fwrap">
      <v-card v-for="(item,i) in dataInfo.down" :key="i" class="card align">
        <v-sheet color="var(--clr-card)" class="jspace">
          <div class="divcol">
            <div class="infotext bold acenter" style="gap:.7em">
              <span>{{item.key=='market'?'Market Cap':item.key=='holders'?'Holders':item.key=='volume'?'Volume (24H)':item.key=='floor'?'Floor price':null}}</span>
              <img src="@/assets/icons/info.svg" alt="info" style="--w:.9em">
            </div>
            <span class="number bold acenter" style="gap:.7em">
              <img v-if="item.key=='volume'||item.key=='floor'" src="@/assets/logos/near.svg" alt="near" style="--w:.8em">
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
    </section>

    <h3 class="h9_em p">Buy On:</h3>

    <section class="card grid" style="--p:2em;gap:1em;--gtc: repeat(auto-fit,minmax(min(100%,16.124375em),1fr))">
      <v-card v-for="(item,i) in dataBuy" :key="i" class="card" style="--p:1em;display:flex;gap:1em;">
        <img :src="item.img" alt="markets" style="--w:4.710625em">
        <span class="h9_em">{{item.name}}</span>
      </v-card>
    </section>

    <aside class="container-controls divcol gap1">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i" @click="dataControls.forEach(e=>{e.active=false});item.active=true">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>

    <!-- overview section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='overview')].active">
      <section class="container-potential card" style="--p:2em">
        <h3 class="h9_em">BlueChip Potential</h3>

        <div class="fwrap gap2" style="--fb: 1 1 20em">
          <v-card v-for="(item,i) in dataPotential" :key="i" color="var(--clr-card)" class="jspace align">
            <div class="divcol">
              <div class="infotext bold acenter" style="gap:.7em">
                <span>{{item.key=='holders'?'Blue Chip Holders':item.key=='whales'?'Whales':null}}</span>
                <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
              </div>
              <div class="astart gap1">
                <span class="number bold acenter" style="gap:.7em">{{item.price}}</span>
                <span class="percent" :style="`color:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
                  {{item.percent}}%
                </span>
              </div>
              <div class="holding acenter" style="gap:.7em">
                <span>Holding {{item.holding}} NFTs</span>
                <img src="@/assets/icons/info-gray.svg" alt="info" style="--w:1em">
              </div>
            </div>

            <v-chip class="btn center" 
              style="--bg:var(--primary);--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 3.5em);--h:2em">
              #{{item.number}}
            </v-chip>
          </v-card>
        </div>
      </section>

      <!-- chart market -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">MarketCap &amp; Volume</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartMarket ref="chartmarket"></ChartMarket>
      </section>


      <!-- chart price -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Price ($NEAR)</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartPrice ref="chartprice"></ChartPrice>
      </section>


      <section class="fwrap" style="--fb:1 1 45em; gap:1em">
        <!-- chart sales -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Sales and liquidity</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartSales ref="chartsales"></ChartSales>
        </aside>


        <!-- chart buyers -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Buyers &amp; Traders</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartBuyers ref="chartbuyers"></ChartBuyers>
        </aside>
      </section>


      <!-- chart holders -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Holders</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartHolders ref="chartholders"></ChartHolders>
      </section>


      <section class="fwrap" style="--fb:1 1 45em; gap:1em">
        <!-- chart holding amount -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Holding Amount Distribution</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartHoldingAmount ref="chartholdingamount"></ChartHoldingAmount>
        </aside>


        <!-- chart holding period -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Holding Period Distribution</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartHoldingPeriod ref="chartholdingperiod"></ChartHoldingPeriod>
        </aside>
      </section>

      <section class="card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Top sales</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 4" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'ALL':null}}</span>
            </v-btn>
          </v-btn-toggle>
        </div>

        <!-- tabla top sales  -->
        <v-data-table
          class="dataTable card"
          :headers="headersTableTop"
          :items="dataTableTop"
          hide-default-footer
          style="--p:2em"
        >
          <template v-slot:[`header.number`]>
            <span>#</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>

          <template v-slot:[`item.number`]="{ item }">
            {{dataTableTop.indexOf(item) + 1}}
          </template>

          <template v-slot:[`item.name`]="{ item }">
            <div class="acenter gap1 tstart">
              <img :src="item.img" alt="nft image" style="--w:4.710625em">
              <span style="max-width:18ch" class="bold">{{item.name}}</span>
            </div>
          </template>
          
          <template v-slot:[`item.price`]="{ item }">
            {{item.price}}N
          </template>

          <template v-slot:[`item.history`]="{ item }">
            <v-sparkline
              :value="item.history"
              :line-width="3"
              color="var(--secondary)"
              stroke-linecap="round"
              :smooth="10"
              auto-draw
            ></v-sparkline>
          </template>

          <template v-slot:footer>
            <div class="fill_w center">
              <v-btn-toggle mandatory color="#60D2CA">
                <v-btn color="transparent">
                  <v-icon color="#707070">mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn v-for="n in 5" :key="n" color="transparent">
                  <span>{{n}}</span>
                </v-btn>
                <v-btn color="transparent">
                  <v-icon color="#707070">mdi-chevron-right</v-icon>
                </v-btn>
              </v-btn-toggle>
            </div>
          </template>
        </v-data-table>
      </section>
    </template>


    <!-- social section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='social')].active">
      <!-- chart discord -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Discord</h3>

          <v-btn-toggle mandatory color="#60D2CA">
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartDiscord ref="chartdiscord"></ChartDiscord>
      </section>

      <!-- chart twitter -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Twitter</h3>

          <v-btn-toggle mandatory color="#60D2CA">
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartTwitter ref="charttwitter"></ChartTwitter>
      </section>
    </template>


    <!-- nft section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='nft')].active">
      <!-- chart rarity distribution -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Rarity Distribution</h3>
        </div>

        <ChartRarityDistribution ref="chartraritydistribution"></ChartRarityDistribution>
      </section>

      <!-- chart rarity and price -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Rarity and price</h3>
        </div>

        <ChartRarityPrice ref="chartrarityprice"></ChartRarityPrice>
      </section>

      <!-- nfts -->
      <section class="container-chart card divcol gap2" style="--p:2em">
        <div class="space wrap gap1">
          <div class="divcol">
            <h3 class="h9_em p">NFTs</h3>
            <div class="acenter" style="gap:.2em">
              <span class="infotext bold">444</span>
              <img src="@/assets/icons/info-gray.svg" alt="info icon" style="--w:.9em">
            </div>
          </div>

          <v-text-field
            v-model="searchNft"
            hide-details
            solo
            label="Search NFT by #"
            append-icon="mdi-magnify"
            style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF;max-width:30.061875em;"
            class="search"
          ></v-text-field>
        </div>

        <div class="container-nfts grid" style="--gtc: repeat(auto-fit,minmax(min(100%,21.2225em),1fr));gap:3em 1em">
          <v-card v-for="(item,i) in dataNfts" :key="i" color="transparent" class="divcol" :class="{widthLimiter: widthLimiter}">
            <img :src="item.img" alt="nft images" style="--w:100%;">

            <v-sheet class="card" style="--p:1em">
              <h6>{{item.name}}</h6>
              <div class="divcol" style="gap:.2em">
                <div class="space">
                  <span>Last price:</span>
                  <span>{{item.price}}N</span>
                </div>
                <div class="space">
                  <span>Rarity rank:</span>
                  <v-chip class="btn center" id="rank"
                    style="--bg:var(--primary);--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 2.75875em);--h:1.868125em">
                    #{{item.rank}}
                  </v-chip>
                </div>
                <div class="space">
                  <span>Rarity:</span>
                  <v-chip style="border-radius: .3vmax" id="rarity"
                    :color="item.rarity=='rare'?'#26A17B':
                    item.rarity=='common'?'var(--warning)':
                    item.rarity=='legendary'?'#0000B6':
                    item.rarity=='mystic'?'#6A25D2':null">
                    <span class="tfirst">{{item.rarity}}</span>
                  </v-chip>
                </div>
              </div>
            </v-sheet>
          </v-card>
        </div>
      </section>
    </template>


    <!-- leaderboard section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='leaderboard')].active">
      <section class="container-leaderboard">
      </section>
    </template>
  </section>
</template>

<script>
import ChartMarket from './ChartMarket.vue'
import ChartPrice from './ChartPrice.vue'
import ChartSales from './ChartSales.vue'
import ChartBuyers from './ChartBuyers.vue'
import ChartDiscord from './ChartDiscord.vue'
import ChartTwitter from './ChartTwitter.vue'
import ChartRarityDistribution from './ChartRarityDistribution.vue'
import ChartRarityPrice from './ChartRarityPrice.vue'
export default {
  name: "details",
  i18n: require("./i18n"),
  components: { ChartMarket, ChartPrice, ChartSales, ChartBuyers, ChartDiscord, ChartTwitter, ChartRarityDistribution, ChartRarityPrice },
  data() {
    return {
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
        supply: "3333",
        owners: "1967",
        total_volume: "1,967,234.43",
        down: [
          { key: "market", price: "71,629", percent: "-0.12", number: 3 },
          { key: "holders", price: "361", percent: "+12.78", number: 23 },
          { key: "volume", price: "318", percent: "+73.26", number: 2 },
          { key: "floor", price: "175", percent: "-1.78", number: 3970 },
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
      headersTableTop: [
        { value:"number", text:"#", align:"center" },
        { value:"name", text:"NFT", align:"center" },
        { value:"buyer", text:"Buyer", align:"center" },
        { value:"seller", text:"Seller", align:"center" },
        { value:"price", text:"Price", align:"center" },
        { value:"time", text:"Time", align:"center" },
        { value:"history", text:"History", align:"center" },
      ],
      dataTableTop: [
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
    }
  },
  mounted() {
    this.Responsive()
    window.onresize = () => this.Responsive()
  },
  methods: {
    Responsive() {
      if (window.innerWidth >= 880&&this.dataNfts.length<=3) {
        this.widthLimiter = true
      } else {
        this.widthLimiter = false
      }
    },
  }
};
</script>

<style src="./ProjectDetails.scss" lang="scss" />
