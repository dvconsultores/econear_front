<template>
  <section id="marketplaceStats" class="divcol gap2">
    <h2 class="h5_em p tcenter">Marketplace Stats</h2>

    <section class="divcol gap2" style="margin-block:8em">
      <aside class="container-controls space gap2 wrap">
        <!-- <v-tabs>
          <v-tab v-for="(item,i) in dataControls" :key="i" @click="dataControls.forEach(e=>{e.active=false});item.active=true">
            <h6 class="p">{{item.name}}</h6>
          </v-tab>
        </v-tabs> -->
        
        <v-text-field
          v-model="search"
          hide-details
          solo
          label="Search for NFTs and collections"
          append-icon="mdi-magnify"
          style="--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF;max-width:30.061875em"
          class="customeFilter search"
        ></v-text-field>
      </aside>

      <section class="card grid" style="--p:2em;gap:1em;--gtc: repeat(auto-fit,minmax(min(100%,16.124375em),1fr))">
        <v-card v-for="(item,i) in marketplace" :key="i" class="card" style="--p:1em;display:flex;gap:1em;" @click="ShowStats(item)">
          <img :src="item.img" alt="markets" style="--w:4.710625em">
          <span class="h9_em">{{item.name}}</span>
        </v-card>
      </section>

      <v-btn-toggle mandatory color="#60D2CA" class="marginaleft">
        <v-btn color="transparent">
          <v-icon color="#FFFFFF">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn v-for="n in 5" :key="n" color="transparent">
          <span>{{n}}</span>
        </v-btn>
        <v-btn color="transparent">
          <v-icon color="#FFFFFF">mdi-chevron-right</v-icon>
        </v-btn>
      </v-btn-toggle>
    </section>

    <section v-show="stats" class="divcol gap2">
      <div class="space gap2">
        <v-card id="card-stats" class="card center gap1mobile alignmobile">
          <div class="acenter gap1">
            <img :src="dataStats.img" alt="marketplace image" style="--w:4.710625em">
            <span class="h9_em">{{dataStats.name}}</span>
          </div>

          <div class="container-btns">
            <v-btn v-for="(item,i) in dataStats.dataSocialRed" :key="i" icon :href="item.link" target="_blank">
              <img :src="require(`@/assets/icons/${item.social}.svg`)" :alt="`${item.social} icon`">
            </v-btn>
          </div>
          
          <p class="p vermobile tcenter" style="font-size:1.7em">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus</p>
        </v-card>

        <p class="p eliminarmobile" style="font-size:clamp(1em,1.8vw,1.8em)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus</p>
      </div>

      <v-card id="container-info" class="card fwrap">
        <div class="center">
          <div class="divcol">
            <label class="semibold">Total Supply NFT</label>
            <span class="bold">{{dataStats.info.supply}}</span>
          </div>
        </div>
        
        <div class="center">
          <div class="divcol">
            <label class="semibold">Subscribers</label>
            <span class="bold">{{dataStats.info.subscribers}}</span>
          </div>
        </div>
        
        <div class="center">
          <div class="divcol">
            <label class="semibold">Total Volume</label>
            <div class="acenter" style="gap:1em">
              <span class="bold">{{dataStats.info.volume}}</span>
              <img src="@/assets/logos/near.svg" alt="near icon" style="--w:1.673125em;margin-bottom:4px">
            </div>
          </div>
        </div>
        
        <div class="center">
          <div class="divcol">
            <label class="semibold">Total estimated users</label>
            <span class="bold">{{dataStats.info.users}}</span>
          </div>
        </div>
        
        <div class="center">
          <div class="end">
            <v-btn icon style="--p:1.6em">
              <img src="@/assets/icons/heart.svg" alt="like icon" style="--w:2.396875em">
            </v-btn>
            
            <v-btn icon style="--p:1.6em">
              <img src="@/assets/icons/share.svg" alt="share icon" style="--w:2.396875em">
            </v-btn>
            
            <v-btn icon style="--p:1.6em">
              <img src="@/assets/icons/bell-white.svg" alt="bell icon" style="--w:2.396875em">
            </v-btn>
          </div>
        </div>
      </v-card>

      <section class="infodown fwrap">
        <v-card v-for="(item,i) in dataStats.info.dataDown" :key="i" class="card align">
          <v-sheet color="var(--clr-card)" class="jspace">
            <div class="divcol">
              <div class="infotext bold acenter" style="gap:.7em">
                <span>{{item.key=='market'?'Market Cap':item.key=='biggest'?'Biggest Sale':item.key=='volume'?'Volume (24H)':item.key=='price'?'Floor price':null}}</span>
                <img src="@/assets/icons/info.svg" alt="info" style="--w:.9em">
              </div>
              <span class="number bold acenter" style="gap:.7em">
                <img v-if="item.key=='volume'||item.key=='price'||item.key=='biggest'" src="@/assets/logos/near.svg" alt="near" style="--w:.8em">
                {{item.price}}
              </span>
              <!-- <span class="percent" :style="`color:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{item.percent}}%
              </span> -->
            </div>

            <v-chip class="btn center" 
              style="--bg:var(--primary);--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 3.5em);--h:2em">
              #{{item.number}}
            </v-chip>
          </v-sheet>
        </v-card>
      </section>
      
      <aside class="container-controls divcol gap1">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControlStats" :key="i" @click="dataControlStats.forEach(e=>{e.active=false});item.active=true">
            <h6 class="p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>
      </aside>

      <!-- overview section -->
      <template v-if="dataControlStats[dataControlStats.findIndex(e=>e.key=='overview')].active">
        <!-- chart marketCap -->
        <ChartMarketCap ref="chartmarketcap" :Height="chartHeight"></ChartMarketCap>

        <!-- chart volume -->
        <ChartVolume ref="chartvolume" :Height="chartHeight"></ChartVolume>

        <!-- chart user visits -->
        <ChartUserVisits ref="chartuservisits" :Height="chartHeight"></ChartUserVisits>

        <section id="container-fwrap" class="fwrap" style="--fb:1 1 45em; gap:1em">
          <!-- chart sales -->
          <aside class="card" style="--p:clamp(1em,2vw,2em)">
            <div class="space wrap margin2bottom">
              <h3 class="h9_em">Sales (24h)</h3>

              <v-btn-toggle mandatory color="#60D2CA">
                <v-btn v-for="n in 2" :key="n" color="transparent">
                  <span>{{n==1?'High':n==2?'Low':null}}</span>
                </v-btn>
              </v-btn-toggle>
            </div>

            <v-data-table
              id="dataTable"
              class="card"
              :headers="headersTableSales"
              :items="dataTableSales"
              hide-default-footer
              mobile-breakpoint="-1"
              style="--bg:transparent;--b:none;--p:0"
            >
              <template v-slot:[`header.number`]>
                <center class="center">
                  <span>#</span>
                  <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
                </center>
              </template>
              
              <template v-slot:[`item.number`]="{ item }">
                {{dataTableSales.indexOf(item) + 1}}
              </template>
              
              <template v-slot:[`item.nft`]="{ item }">
                <div class="nftDetail center gap1">
                  <img class="aspect" :src="item.img" alt="nft" style="--w:4.710625em">
                  <div class="divcol tstart">
                    <span>{{item.name}} {{item.id}}</span>
                    <span>{{item.desc}}</span>
                  </div>
                </div>
              </template>
              
              <template v-slot:[`item.sales`]="{ item }">
                {{item.sales}} NEAR
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
          </aside>


          <!-- chart total sale -->
          <ChartTotalSale ref="charttotalsale" :Height="chartHeight"></ChartTotalSale>
        </section>
      </template>


      <!-- social section -->
      <template v-if="dataControlStats[dataControlStats.findIndex(e=>e.key=='social')].active">
        <!-- chart discord -->
        <ChartDiscord ref="chartdiscord" :Height="chartHeight"></ChartDiscord>

        <!-- chart twitter -->
        <ChartTwitter ref="charttwitter" :Height="chartHeight"></ChartTwitter>
      </template>
    </section>
  </section>
</template>

<script>
import ChartMarketCap from './ChartMarketCap.vue'
import ChartVolume from './ChartVolume.vue'
import ChartUserVisits from './ChartUserVisits.vue'
import ChartTotalSale from './ChartTotalSale.vue'
import ChartDiscord from './ChartDiscord.vue'
import ChartTwitter from './ChartTwitter.vue'

export default {
  name: "marketplaceStats",
  i18n: require("./i18n"),
  components: { ChartMarketCap, ChartVolume, ChartUserVisits, ChartTotalSale, ChartDiscord, ChartTwitter },
  data() {
    return {
      chartHeight: "422.76px",
      dataControls: [
        { key: "all", name: "All time volume", active: true },
        { key: "total", name: "Total estimated users", active: false },
        { key: "volume", name: "Volume (24H)", active: false },
      ],
      search: "",
      marketplace: [
        // { img: require('@/assets/images/paras.png'), name: "Paras" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Paras" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
      ],
      image: require('@/assets/nfts/nft1.png'),
      marketsArray: [],
      stats: false,
      dataStats: {
        img: "",
        name: "",
        dataSocialRed: [
          // { social: "clip", link: "#" },
          // { social: "twitter", link: "#" },
          // { social: "discord", link: "#" },
          // { social: "telegram", link: "#" },
        ],
        info: {
          // supply: "",
          // subscribers: "",
          volume: "",
          // users: "",
          dataDown: [
            { key: "market", price: "71,629", percent: "-0.12", number: 3 },
            { key: "biggest", price: "361", percent: "+12.78", number: 23 },
            { key: "volume", price: "318", percent: "+73.26", number: 2 },
            { key: "price", price: "175", percent: "-1.78", number: 3970 },
          ]
        },
      },
      dataControlStats: [
        { key: "overview", name: "Overview", active: true },
        { key: "social", name: "Social", active: false },
      ],
      headersTableSales: [
        { value:"number", align:"center", sortable:false },
        { value:"nft", text:"NFT/Collection NFT", align:"center", sortable:false },
        { value:"sales", text:"Sales", align:"center", sortable:false },
      ],
      dataTableSales: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear",
          id: "#232",
          desc: "Lorem ipsum dolor sit",
          sales: "2,000,459",
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear",
          id: "#232",
          desc: "Lorem ipsum dolor sit",
          sales: "2,000,459",
        },
      ],
    }
  },
  mounted() {
    this.getDataMarketplace()
    this.Responsive()
    window.onresize = () => this.Responsive()
  },
  methods: {
    Responsive() {
      if (window.innerWidth >= 880) {
        this.chartHeight = "422.76px"
      } else {
        this.chartHeight = "222.76px"
      }
    },
    ShowStats(item) {
      const i = item.index
      this.stats = true

      this.dataStats = {
        img: this.marketsArray[i].market_icon || this.image,
        name: this.marketsArray[i].market_name,
        dataSocialRed: [
          { social: "clip", link: this.marketsArray[i].market_web },
          // { social: "twitter", link: "#" },
          // { social: "discord", link: "#" },
          // { social: "telegram", link: "#" },
        ],
        info: {
          // supply: "45,234,676",
          // subscribers: "2,967,567",
          volume: parseFloat(this.marketsArray[i].volumen_market).toFixed(2),
          // users: "890,967",
          dataDown: [
            // { key: "market", price: "71,629", percent: "-0.12", number: 3 },
            { key: "biggest", price: this.marketsArray[i].biggest_sale, percent: "+12.78", number: 23 },
            // { key: "volume", price: "318", percent: "+73.26", number: 2 },
            { key: "price", price: this.marketsArray[i].floor_sales, percent: "-1.78", number: 3970 },
          ]
        },
      }
    },
    async getDataMarketplace(){
      const url = "api/v1/stastmarket"

      this.axios.post(url)
        .then((response) => {
          //console.log(response.data)
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              index: i,
              img: response.data[i].market_icon || this.image,
              name: response.data[i].market_name,
              marketplace: response.data[i].marketplace,
            }
            this.marketplace.push(collection)
          }
          this.marketsArray = response.data
        }).catch((error) => {
          //console.log("ERR",error)
        })
    },
  }
};
</script>

<style src="./MarketplaceStats.scss" lang="scss" />
