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
                --c:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{item.percent}}%
              </v-chip>
            </div>
            <span class="h11_em">$ <span class="light">{{item.dollar}}</span></span>
          </aside>

          <aside class="divcol" style="gap:.2em">
            <span>
              24h change
              <span class="margin2left" :style="`color:${item.change.includes('+')?'var(--success)':'var(--error)'}`">
                {{item.change}}
              </span>
            </span>

            <span>
              All time profit/loss
              <span class="margin2left" :style="`color:${item.profit.includes('+')?'var(--success)':'var(--error)'}`">
                {{item.profit}}
              </span>
            </span>
          </aside>
        </v-sheet>
      </v-card>
    </section>

    <aside class="container-controls space gap2">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControlsCharts" :key="i" @click="dataControlsCharts.forEach(e=>{e.active=false});item.active=true">
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
    </aside>

    <section class="container-charts divcol" style="gap:2em">
      <LineChart ref="linechart" v-show="dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='line')].active"></LineChart>
      <PieChart ref="piechart" v-show="dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='pie')].active"></PieChart>

      <section v-show="dataControlsCharts[dataControlsCharts.findIndex(e=>e.key=='statistics')].active" class="container-profit divcol gap2">
        <!-- profit -->
        <v-card class="card profit" style="--bg:hsl(212 47% 12% / .5);--p:2em;--b:none">
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
        </v-card>

        <div class="fwrap spacee acenter gap2 gap2">
          <!-- near -->
          <v-card class="card" style="--bg:hsl(212 47% 12% / .5);--p:2em;--b:none">
            <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
              <aside class="divcol" style="gap:.5em">
                <div class="space gap2">
                  <div class="acenter" style="gap:.5em">
                    <img src="@/assets/logos/near.svg" alt="near" style="--w:2.2em">
                    <h3 class="h7_em p bold">NEAR</h3>
                  </div>

                  <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                    --c:${dataStatistics.near.percent.includes('+')?'var(--success)':'var(--error)'}`">
                    {{dataStatistics.near.percent}}%
                  </v-chip>
                </div>
                <span class="h11_em">Best Performace</span>
              </aside>

              <aside class="divcol" style="gap:.2em">
                <div class="acenter" style="gap:.2em">
                  <img src="@/assets/logos/near.svg" alt="near" style="--w:1.055625em">
                  <span class="bold">{{dataStatistics.near.crypto}}</span>
                </div>

                <span>$ {{dataStatistics.near.dollar}}</span>
              </aside>
            </v-sheet>
          </v-card>
          
          <!-- econear -->
          <v-card class="card" style="--bg:hsl(212 47% 12% / .5);--p:2em;--b:none">
            <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)" max-height="186px">
              <aside class="divcol" style="gap:.5em">
                <div class="space gap2">
                  <div class="acenter" style="gap:.5em">
                    <img src="@/assets/logos/econear.svg" alt="econear" style="--w:2.2em">
                    <h3 class="h7_em p bold">ECONEAR</h3>
                  </div>

                  <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                    --c:${dataStatistics.econear.percent.includes('+')?'var(--success)':'var(--error)'}`">
                    {{dataStatistics.econear.percent}}%
                  </v-chip>
                </div>
                <span class="h11_em">Best Performace</span>
              </aside>

              <aside class="divcol" style="gap:.2em">
                <div class="acenter" style="gap:.2em">
                  <img src="@/assets/logos/econear.svg" alt="econear" style="--w:1.055625em">
                  <span class="bold">{{dataStatistics.econear.crypto}}</span>
                </div>

                <span>$ {{dataStatistics.econear.dollar}}</span>
              </aside>
            </v-sheet>
          </v-card>
        </div>
      </section>
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
      v-if="organizationStyle"
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

    <!-- mosaico -->
    <section v-else class="mosaico card grid"
      style="--gtc: repeat(auto-fit, minmax(min(100%,var(--size)),1fr)); gap:1.5em;--p:2em;--size:16.2225em">
      <v-card v-for="(item,i) in dataTable" :key="i" class="divcol alignmobile" color="#112131" width="var(--size)" style="border-radius: .4vmax">
        <img class="h11_em" :src="item.img" alt="nft" style="--w:100%">
        <aside class="contenido divcol" style="gap:.2em">
          <span class="Title tcenter h11_em">{{item.name}}</span>
          <div class="space h11_em">
            <span>24h change</span>
            <span :style="`color:${item.change.includes('+')?'var(--success)':'var(--error)'}`">
              {{item.change}}%
            </span>
          </div>

          <div class="space h11_em">
            <span>Supply</span>
            <span>{{item.supply}}</span>
          </div>

          <div class="space h11_em">
            <span>Floor Price</span>
            <span>{{item.price}}</span>
          </div>

          <div class="space h11_em">
            <span>Holdings</span>
            <span>{{item.holdings}}</span>
          </div>

          <div class="space">
            <span class="h11_em">Rarity</span>
            <v-chip style="border-radius: .3vmax"
              :color="item.rarity=='rare'?'#26A17B':
              item.rarity=='common'?'var(--warning)':
              item.rarity=='legendary'?'#0000B6':
              item.rarity=='mystic'?'#6A25D2':null">
              <span class="tfirst h11_em">{{item.rarity}}</span>
            </v-chip>
          </div>
        </aside>
      </v-card>
    </section>
  </section>
</template>

<script>
import LineChart from './chart/LineChart.vue'
import PieChart from './chart/PieChart.vue'
export default {
  name: "walletDetails",
  i18n: require("./i18n"),
  components: { LineChart, PieChart },
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
          percent: "+12.8",
          change: "+28,747",
          profit: "+28,747",
        },
        {
          token: "econear",
          crypto: "36,379",
          dollar: "32,245.65",
          percent: "-1.8",
          change: "-8,747",
          profit: "+28,747",
        },
      ],
      dataControlsCharts: [
        { key: "line", icon: "chart-line", name: "Line Chart", active: false },
        { key: "pie", icon: "chart-pie", name: "Pie Chart", active: false },
        { key: "statistics", icon: "chart-line-variant", name: "Statistics", active: false },
      ],
      dataStatistics: {
        profit: {
          crypto: "46,529",
          dollar: "232,245.65",
          percent: "+12.8",
        },
        econear: {
          crypto: "36,379",
          dollar: "32,245.65",
          percent: "-1.8",
        },
        near: {
          crypto: "46,529",
          dollar: "232,245.65",
          percent: "+12.8",
        },
      },
      organizationStyle: true,
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
          rarity: "common",
        },
        { 
          img: require('@/assets/images/c3.png'),
          name: "Collection o Nft Name",
          desc: "#3232",
          change: "-3.0",
          price: "104.4 N",
          supply: "1243 / 3333",
          holdings: "1243 / 3333",
          rarity: "rare",
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="./WalletDetails.scss" lang="scss" />
