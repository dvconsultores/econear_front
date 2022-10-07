<template>
  <section id="activeWalletsStats" class="divcol gap2">
    <h2 class="h5_em p tcenter">Active Wallets Stats</h2>

    <section class="infodown fwrap">
      <v-card v-for="(item,i) in dataInfo" :key="i" class="card align center">
        <v-sheet color="var(--clr-card)" class="jspace" max-height="150px">
          <div class="divcol">
            <div class="space gap1">
              <div class="infotext bold acenter" style="gap:.7em">
                <span>{{
                  item.key=='seller'?'Largest Seller (24h)'
                  :item.key=='buyer'?'Largest Buyer (24h)'
                  :item.key=='sale'?'Highest Sale (24h)'
                  :item.key=='rank'?'Your Rank'
                  :null
                }}</span>

                <v-tooltip top color="#1A6765" style="border-radius:.5vmax">
                  <template v-slot:activator="{ on, attrs }">
                    <img v-on="item.key=='rank'?on:null" v-bind="item.key=='rank'?attrs:null" src="@/assets/icons/info.svg" alt="info" style="--w:.9em">
                  </template>
                  <span>Your rank based on your amount of NEAR spend on NFTs</span>
                </v-tooltip>
              </div>
              <v-chip v-show="item.key=='rank'" class="btn center" 
                style="--bg:var(--primary);--c:var(--success);--bs:none;--p:0 .5em;--w:min(199%, 3.5em);--h:2em">
                <span class="number">#{{item.number}}</span>
              </v-chip>
            </div>
            
            <span class="text bold" style="gap:.7em">{{item.wallet}}</span>
            
            <span v-show="item.key=='sale'" class="number">{{item.near}} NEAR</span>
          </div>
        </v-sheet>
      </v-card>
    </section>


    <!-- wallets stats -->
    <aside class="container-controls space gap2 wrap">
      <!-- <v-tabs>
        <v-tab v-for="(item,i) in dataControlsStats" :key="i" @click="dataControlsStats.forEach(e=>{e.active=false});item.active=true">
          <h6 class="p">{{item.name}}</h6>
        </v-tab>
      </v-tabs> -->
      
      <div class="acenter gap1 marginaleft">
        <v-text-field
          v-model="searchStats"
          hide-details
          solo
          label="Search for wallet"
          append-icon="mdi-magnify"
          style="--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em;--label:#FFFFFF;max-width:30.061875em"
          class="customeFilter"
          @input="debounce()"
        ></v-text-field>
        <v-select
          v-model="sort.stats.value"
          :items="sort.stats.items"
          solo
          hide-details
          append-icon="mdi-chevron-down"
          style="--w:min-content;--h:42px;--p:0 0 0 .5em;--bg:#1F6C64;--bs: none;--c:#FFFFFF;--br:.4vmax"
          :menu-props="{ contentClass: 'selectGreen' }"
          class="customeFilter"
          @change="activeWallets()"
        ></v-select>
      </div>
    </aside>


    <v-data-table
      class="dataTable card"
      :headers="headersTableStats"
      v-show="statsBool"
      :items="dataTableStats"
      hide-default-footer
      mobile-breakpoint="-1"
    >
      <template v-slot:[`header.number`]>
        <center class="center">
          <span>#</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.spend`]>
        <center class="center">
          <span>Total Spend</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.bought`]>
        <center class="center">
          <span># NFTs Bought</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.purchase`]>
        <center class="center">
          <span>Highest Purchase</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <!-- <template v-slot:[`header.toal`]>
        <center class="center">
          <span>Total Sales</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template> -->
      
      <!-- <template v-slot:[`header.sold`]>
        <center class="center">
          <span># NFTs Sold</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.sale`]>
        <center class="center">
          <span>Highest Sale</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template> -->
      
      <template v-slot:[`item.number`]="{ item }">
        <span>{{dataTableStats.indexOf(item)+1}}</span>
      </template>
      
      <template v-slot:[`item.wallet`]="{ item }">
        <div class="walletDetails start gap1">
          <!-- @click="$router.push('/wallet-details')" -->
          <!-- <img class="aspect" :src="item.img" alt="nft" style="--w:4.710625em"> -->
          <span class="astart twrapa">{{item.wallet}}</span>
        </div>
      </template>
      
      <template v-slot:[`item.spend`]="{ item }">
        <span style="--c:#22B573">{{item.spend}} N</span>
      </template>

      <template v-slot:[`item.purchase`]="{ item }">
      
          <div class="divcol astart">
            <span class="bold">{{item.purchase_wallet}}</span>
            <span style="--c:#22B573">{{item.purchase_price}} N</span>
          </div>
     
      </template>
      
      <template v-slot:[`item.sale`]="{ item }">
        <center class="center">
          <div class="divcol astart">
            <span class="bold">{{item.sale_wallet}}</span>
            <span style="--c:#22B573">{{item.sale_price}} N</span>
          </div>
        </center>
      </template>
      
      <template v-slot:footer>
        <div class="fill_w center">
          <v-btn-toggle mandatory color="#60D2CA">
            <!-- <v-btn color="transparent">
              <v-icon color="#707070">mdi-chevron-left</v-icon>
            </v-btn> -->
            <v-btn v-for="n in sizeStats" :key="n" color="transparent" @click="fnPaginationStats(n)">
              <span>{{n}}</span>
            </v-btn>
            <!-- <v-btn color="transparent">
              <v-icon color="#707070">mdi-chevron-right</v-icon>
            </v-btn> -->
          </v-btn-toggle>
        </div>
      </template>
    </v-data-table>

    <center v-show="!statsBool" style="margin-block:8em">
      <v-progress-circular
        :size="110"
        :width="10"
        indeterminate
        color="white"
      ></v-progress-circular>
    </center>


    <!-- wallets by market -->
    <!-- <h3 class="h9_em margin2top">Active wallets by market</h3> -->
    
    <!-- <aside class="container-controls space gap2 wrap">
       <h3 class="h9_em margin2top">Active wallets by market</h3>
      <div class="acenter gap1 marginaleft">
        <v-text-field
          v-model="searchMarket"
          hide-details
          solo
          label="Search for wallet"
          append-icon="mdi-magnify"
          style="--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF;max-width:30.061875em"
          class="customeFilter"
          @input="debounceMarket()"
        ></v-text-field>
        <v-select
          v-model="sort.market.value"
          :items="sort.market.items"
          solo
          hide-details
          append-icon="mdi-chevron-down"
          style="--w:min-content;--h:42px;--p:0 0 0 .5em;--bg:#1F6C64;--bs: none;--c:#FFFFFF;--br:.4vmax"
          :menu-props="{ contentClass: 'selectGreen' }"
          class="customeFilter"
          @change="activeWalletsMarket()"
        ></v-select>
      </div>
    </aside>
 -->

    <!-- <v-data-table
      class="dataTable card"
      :headers="headersTableMarket"
      v-show="marketBool"
      :items="dataTableMarket"
      hide-default-footer
      mobile-breakpoint="-1"
    >
      <template v-slot:[`header.number`]>
        <center class="center">
          <span>#</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.spend`]>
        <center class="center">
          <span>Total Spend</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.bought`]>
        <center class="center">
          <span># NFTs Bought</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.purchase`]>
        <center class="center">
          <span>Highest Purchase</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.toal`]>
        <center class="center">
          <span>Total Sales</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.sold`]>
        <center class="center">
          <span># NFTs Sold</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`header.sale`]>
        <center class="center">
          <span>Highest Sale</span>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
        </center>
      </template>
      
      <template v-slot:[`item.number`]="{ item }">
        <span>{{dataTableMarket.indexOf(item)+1}}</span>
      </template>
      
      <template v-slot:[`item.wallet`]="{ item }">
        <div class="walletDetails start gap1">
          <span class="astart twrapa">{{item.wallet}}</span>
        </div>
      </template>
      
      <template v-slot:[`item.spend`]="{ item }">
        <span style="--c:#22B573">{{item.spend}} N</span>
      </template>

      <template v-slot:[`item.purchase`]="{ item }">
          <div class="divcol astart">
            <span class="bold">{{item.purchase_wallet}}</span>
            <span style="--c:#22B573">{{item.purchase_price}} N</span>
          </div>
      </template>
      
      <template v-slot:[`item.sale`]="{ item }">
        <center class="center">
          <div class="divcol astart">
            <span class="bold">{{item.sale_wallet}}</span>
            <span style="--c:#22B573">{{item.sale_price}} N</span>
          </div>
        </center>
      </template>
      
      <template v-slot:[`item.marketplace`]="{ item }">
        <div class="divcol center tcenter">
          <img :src="item.market_icon" alt="marketplace image" style="--w:2.535em">
          <span>{{item.marketplace}}</span>
        </div>
      </template>
      
      <template v-slot:footer>
        <div class="fill_w center">
          <v-btn-toggle mandatory color="#60D2CA">
            <v-btn v-for="n in sizeMarket" :key="n" color="transparent" @click="fnPaginationMarket(n)">
              <span>{{n}}</span>
            </v-btn>
          </v-btn-toggle>
        </div>
      </template>
    </v-data-table> -->
    <!-- <center v-show="!marketBool" style="margin-block:8em">
      <v-progress-circular
        :size="110"
        :width="10"
        indeterminate
        color="white"
      ></v-progress-circular>
    </center> -->
  </section>
</template>

<script>
export default {
  name: "activeWalletsStats",
  i18n: require("./i18n"),
  data() {
    return {
      dataInfo: [
        { key: "seller", wallet: "loremipsu.near" },
        { key: "buyer", wallet: "234rt5..67i8.near" },
        { key: "sale", wallet: "24t5..67i8.near", near: "1,238,798.98" },
        { key: "rank", wallet: "pedrog..z23.near", number: "3,970,890" },
      ],
      dataControlsStats: [
        { key: "all", name: "All Time Best", active: true },
        { key: "hype", name: "$HYPE", active: false },
      ],
      sort:{
        stats: {
          value: "24h",
          items: [ "24h", "7d", "30d", "90d", "1Y" ],
        },
        market: {
          value: "24h",
          items: [ "24h", "7d", "30d", "90d", "1Y" ],
        },
      },
      headersTableStats: [
        { value: "number", text: "#", align: "center", sortable: false },
        { value: "wallet", text: "Wallet", align: "center", sortable: false },
        { value: "spend", text: "Total Spend", align: "center", sortable: false },
        { value: "bought", text: "# NFT Bought", align: "center", sortable: false },
        { value: "purchase", text: "Highest Purchase", align: "start", sortable: false },
        // { value: "total", text: "Total Sales", align: "center", sortable: false },
        // { value: "sold", text: "# NFTs Sold", align: "center", sortable: false },
        // { value: "sale", text: "Highest Sale", align: "center", sortable: false },
      ],
      dataTableStats: [
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   wallet: "Collection o Nft Name",
        //   spend: 12.0001,
        //   bought: "1,203",
        //   purchase_wallet: "MonkeONear #123",
        //   purchase_price: "129,504.46",
        //   total: "129,504.46",
        //   sold: 220,
        //   sale_wallet: "MonkeONear #3",
        //   sale_price: "9,729,504.46",
        // },
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   wallet: "Collection o Nft Name",
        //   spend: 12.0001,
        //   bought: "1,203",
        //   purchase_wallet: "MonkeONear #123",
        //   purchase_price: "129,504.46",
        //   total: "129,504.46",
        //   sold: 220,
        //   sale_wallet: "MonkeONear #3",
        //   sale_price: "9,729,504.46",
        // },
      ],
      dataControlsMarket: [
        { key: "all", name: "All Time Best", active: true },
        { key: "hype", name: "$HYPE", active: false },
      ],
      headersTableMarket: [
        { value: "number", text: "#", align: "center", sortable: false },
        { value: "wallet", text: "Wallet", align: "center", sortable: false },
        { value: "spend", text: "Total Spend", align: "center", sortable: false },
        { value: "bought", text: "# NFT Bought", align: "center", sortable: false },
        { value: "purchase", text: "Highest Purchase", align: "start", sortable: false },
        // { value: "total", text: "Total Sales", align: "center", sortable: false },
        // { value: "sold", text: "# NFTs Sold", align: "center", sortable: false },
        // { value: "sale", text: "Highest Sale", align: "center", sortable: false },
        { value: "marketplace", text: "Marketplace", align: "center", sortable: false },
      ],
      dataTableMarket: [
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   wallet: "Collection o Nft Name",
        //   spend: 12.0001,
        //   bought: "1,203",
        //   purchase_wallet: "MonkeONear #123",
        //   purchase_price: "129,504.46",
        //   total: "129,504.46",
        //   sold: 220,
        //   sale_wallet: "MonkeONear #3",
        //   sale_price: "9,729,504.46",
        //   marketplace: "paras",
        // },
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   wallet: "Collection o Nft Name",
        //   spend: 12.0001,
        //   bought: "1,203",
        //   purchase_wallet: "MonkeONear #123",
        //   purchase_price: "129,504.46",
        //   total: "129,504.46",
        //   sold: 220,
        //   sale_wallet: "MonkeONear #3",
        //   sale_price: "9,729,504.46",
        //   marketplace: "shinto swap",
        // },
      ],
      searchStats: null,
      searchMarket:null,
      sizeStats: 0,
      sizeMarket: 0,
      marketBool: false,
      statsBool: false,
      indexStats: 0,
      indexMarket: 0
    }
  },
  async mounted() {
    this.activeWallets()
    this.activeWalletsMarket()
  },
  methods: {
    fnPaginationStats(n) {
      if (n == 1) {
        this.indexStats = 0
      } else {
        this.indexStats = 10 * (n-1)
      }
      this.activeWallets()
    },
    fnPaginationMarket(n) {
      if (n == 1) {
        this.indexMarket = 0
      } else {
        this.indexMarket = 5 * (n-1)
      }
      this.activeWalletsMarket()
    },
    debounce () {
      clearTimeout(this.timer)
      this.timer = setTimeout(this.activeWallets, 1000)
    },
    debounceMarket () {
      clearTimeout(this.timer)
      this.timer = setTimeout(this.activeWalletsMarket, 1000)
    },
    async activeWallets(){
      this.statsBool = false
      this.dataTableStats = []
      const url = "api/v1/activeWallets"
      let item = {
        "limit": "10",
        "index": String(this.indexStats),
        "value": 24,
        "time": "h",
        "wallet": "%"
      }
      if (this.sort.stats.value === "24h") {
        item.time = "h"
        item.value = 24
      } else if (this.sort.stats.value === "7d") {
        item.time = "d"
        item.value = 7
      } else if (this.sort.stats.value === "30d") {
        item.time = "d"
        item.value = 30
      } else if (this.sort.stats.value === "90d") {
        item.time = "d"
        item.value = 90
      } else if (this.sort.stats.value === "1Y") {
        item.time = "d"
        item.value = 365
      }
      if (this.searchStats === '' || this.searchStats === null) {
        item.wallet = "%"
      } else {
        item.wallet = this.searchStats
      }

      console.log(item)

      this.axios.post(url, item)
        .then((response) => {
          console.log("DATA",response.data)
          let data = response.data.response
          this.sizeStats = Math.ceil(response.data.rows_count / parseInt(item.limit))
          this.dataTableStats = []
          for (var i = 0; i < data.length; i++) {
            let collection = { 
              img: require('@/assets/nfts/nft1.png'),
              wallet: data[i].wallet,
              spend: parseFloat(data[i].total_gastado).toFixed(2),
              bought: data[i].total_comprado,
              purchase_wallet: data[i].mayor_compra[0].titulo + " #" + data[i].mayor_compra[0].token_id,
              purchase_price: data[i].mayor_compra[0].precio,
            }     
            this.dataTableStats.push(collection)
          }
          this.indexStats = this.indexStats + this.dataTableStats.length
          this.statsBool=true
        //   dataTableStats: [
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   wallet: "Collection o Nft Name",
        //   spend: 12.0001,
        //   bought: "1,203",
        //   purchase_wallet: "MonkeONear #123",
        //   purchase_price: "129,504.46",
        //   total: "129,504.46",
        //   sold: 220,
        //   sale_wallet: "MonkeONear #3",
        //   sale_price: "9,729,504.46",
        // },
        }).catch((error) => {
          console.log(error)
          this.statsBool=true
        })
    },
    // async activeWalletsMarket(){
    //   this.marketBool=false
    //   const url = "api/v1/activewalletsmarket"
    //   let item = {
    //     "limit": "5",
    //     "index": String(this.indexMarket),
    //     "value": 24,
    //     "time": "h",
    //     "wallet": "%"
    //   }
    //   if (this.sort.market.value === "24h") {
    //     item.time = "h"
    //     item.value = 24
    //   } else if (this.sort.market.value === "7d") {
    //     item.time = "d"
    //     item.value = 7
    //   } else if (this.sort.market.value === "30d") {
    //     item.time = "d"
    //     item.value = 30
    //   } else if (this.sort.market.value === "90d") {
    //     item.time = "d"
    //     item.value = 90
    //   } else if (this.sort.market.value === "1Y") {
    //     item.time = "d"
    //     item.value = 365
    //   }
    //   if (this.searchMarket === '' || this.searchMarket === null) {
    //     item.wallet = "%"
    //   } else {
    //     item.wallet = this.searchMarket
    //   }

    //   console.log(item)

    //   this.axios.post(url, item)
    //     .then((response) => {
    //       console.log("DATAMARKET",response.data)
    //       let data = response.data.response
    //       this.sizeMarket = Math.ceil(response.data.rows_count / parseInt(item.limit))
    //       this.dataTableMarket = []
    //       for (var i = 0; i < data.length; i++) {
    //         let collection = { 
    //           img: require('@/assets/nfts/nft1.png'),
    //           wallet: data[i].wallet,
    //           spend: parseFloat(data[i].total_gastado).toFixed(2),
    //           bought: data[i].total_comprado,
    //           purchase_wallet: data[i].mayor_compra[0].titulo + " #" + data[i].mayor_compra[0].token_id,
    //           purchase_price: data[i].mayor_compra[0].precio,
    //           market_icon: data[i].market_icon
    //         }     
    //         this.dataTableMarket.push(collection)
    //       }
    //       this.indexMarket = this.indexMarket + this.dataTableMarket.length
    //       this.marketBool=true
    //     }).catch((error) => {
    //       console.log(error)
    //       this.marketBool=true
    //     })
    // },
  }
};
</script>

<style src="./ActiveWalletsStats.scss" lang="scss" />
