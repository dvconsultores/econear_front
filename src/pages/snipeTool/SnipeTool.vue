<template>
  <section id="snipeTool" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p">Snipe Tool</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>

    <aside class="container-controls divcol gap1">
      <v-card class="tracking-pause card acenter" style="max-width:max-content;--bg:hsl(212 47% 12% / .5);gap:1em">
        <v-btn v-for="(item,i) in dataControls.up" :key="i" text style="--ml:.5em" :class="{active: item.active}"
            @click="dataControls.up.forEach(e=>{e.active=false});item.active=true">
          <span>{{item.name}}</span><img :src="require(`@/assets/icons/${item.name}.svg`)"
          :style="item.name=='tracking'?'--w:1em':'--w:.7em'">
        </v-btn>
      </v-card>

      <div class="space" style="gap:clamp(2em, 8vw, 8em)">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControls.down" :key="i" class="options">
            <h6 class="h11_em p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>

        <div class="space fill_w">
          <h3 class="h9_em p">Recently listed</h3>

          <div class="switch" :style="`--color:${notifications?'var(--success)':'var(--error)'}`"
            :class="{active:notifications}" @click="notifications=!notifications" />
        </div>
      </div>
    </aside>

    <!-- table  -->
    <v-data-table
      id="dataTable"
      class="card"
      :headers="headersTable"
      :items="dataTable"
      hide-default-footer
    >
      <template v-slot:[`item.nft`]="{ item }">
        <div class="center gap1">
          <img class="aspect" :src="item.img" alt="nft" style="--w:4.710625em">
          <div class="divcol tstart">
            <span>{{item.name}}</span>
            <span>{{item.desc}}</span>
          </div>
        </div>
      </template>

      <template v-slot:[`item.rareness`]="{ item }">
        <v-chip style="border-radius: .3vmax"
          :color="item.rareness=='rare'?'#26A17B':
          item.rareness=='common'?'var(--warning)':
          item.rareness=='legendary'?'#0000B6':
          item.rareness=='mystic'?'#6A25D2':null">
          <span class="tfirst">{{item.rareness}}</span>
        </v-chip>
      </template>

      <template v-slot:[`item.price`]="{ item }">
        <span :style="item.state_price?'color:#22B573':'color:var(--error)'">
          {{item.state_price?'+':'-'}}{{item.price}}%
        </span>
      </template>

      <template v-slot:[`item.market`]="{ item }">
        <img :src="item.market" alt="market">
      </template>

      <template v-slot:[`item.lorem`]>
        <v-btn class="btn" style="border-radius: .3vmax;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">
          <span class="tfirst">Buy Now</span>
        </v-btn>
      </template>
    </v-data-table>
  </section>
</template>

<script>
export default {
  name: "snipeTool",
  i18n: require("./i18n"),
  data() {
    return {
      notifications: true,
      dataControls: {
        up: [
          { name: "tracking", active: false },
          { name: "pause", active: false },
        ],
        down: [
          { name: "Common", active: false },
          { name: "Rare", active: false },
          { name: "Epic", active: false },
          { name: "Mystic", active: false },
        ],
      },
      headersTable: [
        { value: "nft", text: "NFT", align: "center", sortable: false },
        { value: "supply", text: "Supply", align: "center", sortable: false },
        { value: "rareness", text: "Rareness", align: "center", sortable: false },
        { value: "price", text: "Price", align: "center", sortable: false },
        { value: "market", text: "Market", align: "center", sortable: false },
        { value: "lorem", text: "Lorem ipsum", align: "center", sortable: false },
      ],
      dataTable: [
        { 
          img: require('@/assets/nfts/nft1.png'),
          name: "Collection o Nft Name",
          desc: "#3232",
          supply: "12,0001",
          rareness: "common",
          price: "104.4 N",
          market: require('@/assets/logos/market-p.svg'),
          state_price: true,
        },
        { 
          img: require('@/assets/nfts/nft1.png'),
          name: "Collection o Nft Name",
          desc: "#3232",
          supply: "12,0001",
          rareness: "rare",
          price: "104.4 N",
          market: require('@/assets/logos/market-p.svg'),
          state_price: true,
        },
        { 
          img: require('@/assets/nfts/nft1.png'),
          name: "Collection o Nft Name",
          desc: "#3232",
          supply: "12,0001",
          rareness: "legendary",
          price: "104.4 N",
          market: require('@/assets/logos/market-p.svg'),
          state_price: true,
        },
        { 
          img: require('@/assets/nfts/nft1.png'),
          name: "Collection o Nft Name",
          desc: "#3232",
          supply: "12,0001",
          rareness: "mystic",
          price: "104.4 N",
          market: require('@/assets/logos/market-p.svg'),
          state_price: true,
        },
      ]
    }
  },
  methods: {
  }
};
</script>

<style src="./SnipeTool.scss" lang="scss" />
