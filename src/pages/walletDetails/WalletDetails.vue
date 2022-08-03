<template>
  <section id="walletDetails" class="divcol gap2">
    <div class="center gap1">
      <img :src="dataWallet.img" alt="marketplace image">
      <h2 class="h5_em p tcenter">{{dataWallet.wallet}}</h2>
    </div>

    <section class="container-profit fwrap spacee acenter gap2">
      <v-card v-for="(item,i) in dataProfit" :key="i"
        class="card" style="--bg:hsl(212 47% 12% / .5);--p:2em;--b:none">
        <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
          <aside class="divcol" style="gap:.5em">
            <div class="space gap2">
              <div class="acenter" style="gap:.5em">
                <img :src="require(`@/assets/logos/${item.token}.svg`)" alt="near" style="--w:2.2em">
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

    <aside class="container-controls divcol gap1">
      <div class="space gap2">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControls" :key="i">
          <v-icon>mdi-{{item.icon}}</v-icon>
          <h6 class="h11_em p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>

        <v-tabs class="tab-right">
          <v-tab>
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF">
            $
          </v-tab>
        </v-tabs>
      </div>
    </aside>

    <section class="section-down divcol" style="gap:2em">
      <Chart ref="chart"></Chart>
    </section>

    <aside class="space gap2 wrap">
      <h2 class="h9_em p">Assets</h2>

      <div class="acenter gap1">
        <v-tabs class="tab-right">
          <v-tab @click="organizationStyle=true">
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-tab>
          <v-tab @click="organizationStyle=false">
            <v-icon>mdi-view-grid</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs class="tab-right">
          <v-tab>
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF;font-size:1em">
            $
          </v-tab>
          <v-tab style="color:#FFFFFF">
            %
          </v-tab>
        </v-tabs>
      </div>
    </aside>

    <!-- tabla  -->
    <v-data-table
      id="dataTable"
      class="card "
      :headers="headersTable"
      :items="dataTable"
      hide-default-footer
    >
      <template v-slot:[`item.nft`]="{ item }">
        <div class="center gap1 h11_em">
          <img class="aspect" :src="item.img" alt="nft" style="--w:4.710625em">
          <div class="divcol tstart">
            <span>{{item.name}}</span>
            <span>{{item.desc}}</span>
          </div>
        </div>
      </template>

      <template v-slot:[`item.change`]="{ item }">
        <span :style="`color:${item.change.includes('+')?'var(--success)':'var(--error)'}`">
          {{item.change}}%
        </span>
      </template>
    </v-data-table>


  </section>
</template>

<script>
import Chart from './chart/Chart.vue'
export default {
  name: "walletDetails",
  i18n: require("./i18n"),
  components: { Chart },
  data() {
    return {
      dataWallet: {
        img: require("@/assets/nfts/nft1.png"),
        wallet: "loremipsu.near",
      },
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
          token: "econear",
          crypto: "36,379",
          dollar: "32,245.65",
          percent: 1.8,
          state_percent: false,
          change: "8,747",
          state_change: false,
          profit: "28,747",
          state_profit: true,
        },
      ],
      dataControls: [
        { icon: "chart-line", name: "Line Chart", active: false },
        { icon: "chart-pie", name: "Pie Chart", active: false },
        { icon: "chart-line-variant", name: "Statistics", active: false },
      ],
      headersTable: [
        { value: "nft", text: "NFT", align: "center", sortable: false },
        { value: "change", text: "24h Change", align: "center", sortable: false },
        { value: "price", text: "Floor Price", align: "center", sortable: false },
        { value: "supply", text: "Supply", align: "center", sortable: false },
        { value: "holdings", text: "Holdings", align: "center", sortable: false },
      ],
      dataTable: [
        { 
          img: require('@/assets/images/c2.png'),
          name: "Collection o Nft Name",
          desc: "#3232",
          change: "+13.3",
          price: "104.4 N",
          supply: "1243 / 3333",
          holdings: "1243 / 3333",
        },
        { 
          img: require('@/assets/images/c3.png'),
          name: "Collection o Nft Name",
          desc: "#3232",
          change: "-3.0",
          price: "104.4 N",
          supply: "1243 / 3333",
          holdings: "1243 / 3333",
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="./WalletDetails.scss" lang="scss" />
