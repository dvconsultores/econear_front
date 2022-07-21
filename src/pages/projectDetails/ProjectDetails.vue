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
        <img src="@/assets/images/muestra.jpg" alt="avatar" style="--b:3px solid var(--success)">
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
        <span class="acenter" style="gap:.4em">{{dataInfo.total_volume}}
          <img src="@/assets/logos/near.svg" alt="near" style="--w:.8em">
        </span>
      </div>
    </v-card>

    <section class="infodown fwrap">
      <v-card v-for="(item,i) in dataInfo.down" :key="i" class="card align">
        <v-sheet color="var(--clr-card)" class="jspace">
          <div class="divcol">
            <span class="infotext bold acenter" style="gap:.7em">
              {{item.key=='market'?'Market Cap':item.key=='holders'?'Holders':item.key=='volume'?'Volume (24H)':item.key=='floor'?'Floor price':null}}
              <img src="@/assets/icons/info.svg" alt="info" style="--w:1.1875em">
            </span>
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
        <v-tab v-for="(item,i) in dataControls" :key="i">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>

    <section class="container-potential card" style="--p:2em">
      <h3 class="h9_em">BlueChip Potential</h3>

      <div class="fwrap gap2" style="--fb: 1 1 20em">
        <v-card v-for="(item,i) in dataPotential" :key="i" color="var(--clr-card)" class="jspace align">
          <div class="divcol">
            <span class="infotext bold acenter" style="gap:.7em">
              {{item.key=='holders'?'Blue Chip Holders':item.key=='whales'?'Whales':null}}
              <img src="@/assets/icons/info.svg" alt="info" style="--w:1.1875em">
            </span>
            <div class="astart gap1">
              <span class="number bold acenter" style="gap:.7em">{{item.price}}</span>
              <span class="percent" :style="`color:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{item.percent}}%
              </span>
            </div>
            <span class="holding acenter" style="gap:.7em">
              Holding {{}} NFTs
              <img src="@/assets/icons/info-gray.svg" alt="info" style="--w:1.1875em">
            </span>
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
        <h3 class="h9_em">Holding Amount Distribution</h3>

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
          <div class="acenter gap1">
            <img :src="item.img" alt="nft image" style="--w:4.710625em">
            <span style="max-width:18ch" class="bold">{{item.name}}</span>
          </div>
        </template>
      </v-data-table>
    </section>
  </section>
</template>

<script>
import ChartMarket from './ChartMarket.vue'
import ChartPrice from './ChartPrice.vue'
import ChartSales from './ChartSales.vue'
import ChartBuyers from './ChartBuyers.vue'
export default {
  name: "details",
  i18n: require("./i18n"),
  components: { ChartMarket, ChartPrice, ChartSales, ChartBuyers },
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
        { name: "Overview" }, { name: "Social" }, { name: "NFT & rarity" }, { name: "Leaderboard" }, { name: "Activity" },
      ],
      dataPotential: [
        { key: "holders", price: "71,629", percent: "-0.12", number: 3, holding: "231 (52.02%)" },
        { key: "whales", price: "361", percent: "+12.78", number: 23, holding: "127 (28.6%)" },
      ],
      headersTableTop: [],
      dataTableTop: [],
    }
  },
  methods: {
  }
};
</script>

<style src="./ProjectDetails.scss" lang="scss" />
