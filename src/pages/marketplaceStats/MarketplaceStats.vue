<template>
  <section id="marketplaceStats" class="divcol gap2">
    <h2 class="h5_em p tcenter">Marketplace Stats</h2>

    <section class="divcol gap2" style="margin-block:8em">
      <aside class="container-controls space gap2">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControls" :key="i" @click="dataControls.forEach(e=>{e.active=false});item.active=true">
            <h6 class="h11_em p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>
        
        <v-text-field
          v-model="search"
          hide-details
          solo
          label="Search for NFTs and collections"
          append-icon="mdi-magnify"
          style="--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF;max-width:30.061875em"
          class="search"
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
        <v-card id="card-stats" class="card center">
          <div class="acenter gap1">
            <img :src="dataStats.img" alt="marketplace image" style="--w:4.710625em">
            <span class="h9_em">{{dataStats.name}}</span>
          </div>

          <div class="grid" style="--gtc: repeat(2, max-content)">
            <v-btn v-for="(item,i) in dataStats.dataSocialRed" :key="i" icon :href="item.link" target="_blank">
              <img :src="require(`@/assets/icons/${item.social}.svg`)" :alt="`${item.social} icon`" style="--w:1.80375em">
            </v-btn>
          </div>
        </v-card>

        <p class="p" style="font-size:1.8em">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus</p>
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
                <span>{{item.key=='market'?'Market Cap':item.key=='traders'?'Traders':item.key=='volume'?'Volume (24H)':item.key=='price'?'Floor price':null}}</span>
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
      </section>
      
      <aside class="container-controls divcol gap1">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControlStats" :key="i" @click="dataControlStats.forEach(e=>{e.active=false});item.active=true">
            <h6 class="h11_em p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>
      </aside>

      <!-- overview section -->
      <template v-if="dataControlStats[dataControlStats.findIndex(e=>e.key=='overview')].active">
        <!-- chart marketCap -->
        <section class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">MarketCap</h3>

            <v-btn-toggle mandatory color="#60D2CA">
              <v-btn v-for="n in 3" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':null}}</span>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartMarketCap ref="chartmarketcap"></ChartMarketCap>
        </section>


        <!-- chart volume -->
        <section class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Volume</h3>

            <v-btn-toggle mandatory color="#60D2CA">
              <v-btn v-for="n in 3" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':null}}</span>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartVolume ref="chartvolume"></ChartVolume>
        </section>


        <!-- chart user visits -->
        <section class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">User Visits</h3>

            <v-btn-toggle mandatory color="#60D2CA">
              <v-btn v-for="n in 3" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':null}}</span>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartUserVisits ref="chartuservisits"></ChartUserVisits>
        </section>


        <section class="fwrap" style="--fb:1 1 45em; gap:1em">
          <!-- chart sales -->
          <aside class="container-chart card" style="--p:2em">
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
              style="--bg:transparent;--b:none;--p:0"
            >
              <template v-slot:[`header.number`]>
                <span>#</span>
                <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
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
          <aside class="container-chart card" style="--p:2em">
            <div class="space wrap">
              <h3 class="h9_em">Total Sale</h3>

              <v-btn-toggle mandatory color="#60D2CA">
                <v-btn v-for="n in 3" :key="n" color="transparent">
                  <span>{{n==1?'24h':n==2?'7d':n==3?'30d':null}}</span>
                </v-btn>
              </v-btn-toggle>
            </div>

            <ChartTotalSale ref="charttotalsale"></ChartTotalSale>
          </aside>
        </section>
      </template>


      <!-- social section -->
      <template v-if="dataControlStats[dataControlStats.findIndex(e=>e.key=='social')].active">
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
      dataControls: [
        { key: "all", name: "All time volume", active: true },
        { key: "total", name: "Total estimated users", active: false },
        { key: "volume", name: "Volume (24H)", active: false },
      ],
      search: "",
      marketplace: [
        { img: require('@/assets/images/paras.png'), name: "Paras" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Paras" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
      ],
      stats: false,
      dataStats: {
        img: require('@/assets/images/paras.png'),
        name: "Paras",
        dataSocialRed: [
          { social: "clip", link: "#" },
          { social: "twitter", link: "#" },
          { social: "discord", link: "#" },
          { social: "telegram", link: "#" },
        ],
        info: {
          supply: "45,234,676",
          subscribers: "2,967,567",
          volume: "10,967,234.43",
          users: "890,967",
          dataDown: [
            { key: "market", price: "71,629", percent: "-0.12", number: 3 },
            { key: "traders", price: "361", percent: "+12.78", number: 23 },
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
  methods: {
    ShowStats(item) {
      this.stats = true
      console.log(item)
    }
  }
};
</script>

<style src="./MarketplaceStats.scss" lang="scss" />
