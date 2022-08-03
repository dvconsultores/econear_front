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
    <aside class="container-controls space gap2">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControlsStats" :key="i" @click="dataControlsStats.forEach(e=>{e.active=false});item.active=true">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
      
      <div class="acenter gap1">
        <v-text-field
          v-model="searchStats"
          hide-details
          solo
          label="Search for wallet"
          append-icon="mdi-magnify"
          style="--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF;max-width:30.061875em"
          class="searchStats"
        ></v-text-field>
        <v-select
          v-model="sort.stats.value"
          :items="sort.stats.items"
          solo
          hide-details
          append-icon="mdi-chevron-down"
          style="--w:min-content;--h:42px;--p:0 0 0 .5em;--bg:#1F6C64;--bs: none;--c:#FFFFFF;--br:.4vmax"
          :menu-props="{ contentClass: 'selectGreen' }"
        ></v-select>
      </div>
    </aside>


    <v-data-table
      class="dataTable card"
      :headers="headersTableStats"
      :items="dataTableStats"
      hide-default-footer
    >
      <template v-slot:[`header.number`]>
        <span>#</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.spend`]>
        <span>Total Spend</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.bought`]>
        <span># NFTs Bought</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.purchase`]>
        <span>Highest Purchase</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.toal`]>
        <span>Total Sales</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.sold`]>
        <span># NFTs Sold</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.sale`]>
        <span>Highest Sale</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`item.number`]="{ item }">
        <span>{{dataTableStats.indexOf(item)+1}}</span>
      </template>
      
      <template v-slot:[`item.wallet`]="{ item }">
        <div class="walletDetails center gap1" @click="$router.push('/wallet-details')">
          <img class="aspect" :src="item.img" alt="nft" style="--w:4.710625em">
          <span class="astart twrapa">{{item.wallet}}</span>
        </div>
      </template>
      
      <template v-slot:[`item.spend`]="{ item }">
        <span style="--c:#22B573">{{item.spend}} N</span>
      </template>

      <template v-slot:[`item.purchase`]="{ item }">
        <center class="center">
          <div class="divcol astart">
            <span class="bold">{{item.purchase_wallet}}</span>
            <span style="--c:#22B573">{{item.purchase_price}} N</span>
          </div>
        </center>
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


    <!-- wallets by market -->
    <h3 class="h9_em">Active wallets by market</h3>
    
    <aside class="container-controls space gap2">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControlsMarket" :key="i" @click="dataControlsMarket.forEach(e=>{e.active=false});item.active=true">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
      
      <div class="acenter gap1">
        <v-text-field
          v-model="searchMarket"
          hide-details
          solo
          label="Search for wallet"
          append-icon="mdi-magnify"
          style="--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF;max-width:30.061875em"
          class="searchMarket"
        ></v-text-field>
        <v-select
          v-model="sort.market.value"
          :items="sort.market.items"
          solo
          hide-details
          append-icon="mdi-chevron-down"
          style="--w:min-content;--h:42px;--p:0 0 0 .5em;--bg:#1F6C64;--bs: none;--c:#FFFFFF;--br:.4vmax"
          :menu-props="{ contentClass: 'selectGreen' }"
        ></v-select>
      </div>
    </aside>


    <v-data-table
      class="dataTable card"
      :headers="headersTableMarket"
      :items="dataTableMarket"
      hide-default-footer
    >
      <template v-slot:[`header.number`]>
        <span>#</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.spend`]>
        <span>Total Spend</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.bought`]>
        <span># NFTs Bought</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.purchase`]>
        <span>Highest Purchase</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.toal`]>
        <span>Total Sales</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.sold`]>
        <span># NFTs Sold</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`header.sale`]>
        <span>Highest Sale</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
      </template>
      
      <template v-slot:[`item.number`]="{ item }">
        <span>{{dataTableMarket.indexOf(item)+1}}</span>
      </template>
      
      <template v-slot:[`item.wallet`]="{ item }">
        <div class="walletDetails center gap1" @click="$router.push('/wallet-details')">
          <img class="aspect" :src="item.img" alt="nft" style="--w:4.710625em">
          <span class="astart twrapa">{{item.wallet}}</span>
        </div>
      </template>
      
      <template v-slot:[`item.spend`]="{ item }">
        <span style="--c:#22B573">{{item.spend}} N</span>
      </template>

      <template v-slot:[`item.purchase`]="{ item }">
        <center class="center">
          <div class="divcol astart">
            <span class="bold">{{item.purchase_wallet}}</span>
            <span style="--c:#22B573">{{item.purchase_price}} N</span>
          </div>
        </center>
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
          <img :src="require(`@/assets/marketplace/${item.marketplace}.svg`)" alt="marketplace image" style="--w:2.535em">
          <span>{{item.marketplace}}</span>
        </div>
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
        { value: "purchase", text: "Highest Purchase", align: "center", sortable: false },
        { value: "total", text: "Total Sales", align: "center", sortable: false },
        { value: "sold", text: "# NFTs Sold", align: "center", sortable: false },
        { value: "sale", text: "Highest Sale", align: "center", sortable: false },
      ],
      dataTableStats: [
        { 
          img: require('@/assets/nfts/nft1.png'),
          wallet: "Collection o Nft Name",
          spend: 12.0001,
          bought: "1,203",
          purchase_wallet: "MonkeONear #123",
          purchase_price: "129,504.46",
          total: "129,504.46",
          sold: 220,
          sale_wallet: "MonkeONear #3",
          sale_price: "9,729,504.46",
        },
        { 
          img: require('@/assets/nfts/nft1.png'),
          wallet: "Collection o Nft Name",
          spend: 12.0001,
          bought: "1,203",
          purchase_wallet: "MonkeONear #123",
          purchase_price: "129,504.46",
          total: "129,504.46",
          sold: 220,
          sale_wallet: "MonkeONear #3",
          sale_price: "9,729,504.46",
        },
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
        { value: "purchase", text: "Highest Purchase", align: "center", sortable: false },
        { value: "total", text: "Total Sales", align: "center", sortable: false },
        { value: "sold", text: "# NFTs Sold", align: "center", sortable: false },
        { value: "sale", text: "Highest Sale", align: "center", sortable: false },
        { value: "marketplace", text: "Marketplace", align: "center", sortable: false },
      ],
      dataTableMarket: [
        { 
          img: require('@/assets/nfts/nft1.png'),
          wallet: "Collection o Nft Name",
          spend: 12.0001,
          bought: "1,203",
          purchase_wallet: "MonkeONear #123",
          purchase_price: "129,504.46",
          total: "129,504.46",
          sold: 220,
          sale_wallet: "MonkeONear #3",
          sale_price: "9,729,504.46",
          marketplace: "paras",
        },
        { 
          img: require('@/assets/nfts/nft1.png'),
          wallet: "Collection o Nft Name",
          spend: 12.0001,
          bought: "1,203",
          purchase_wallet: "MonkeONear #123",
          purchase_price: "129,504.46",
          total: "129,504.46",
          sold: 220,
          sale_wallet: "MonkeONear #3",
          sale_price: "9,729,504.46",
          marketplace: "shinto swap",
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="./ActiveWalletsStats.scss" lang="scss" />
